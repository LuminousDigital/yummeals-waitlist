import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'waitlist.json');

// Validation schema
const waitlistSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50, "First name too long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name too long"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number too long"),
  personalityType: z.string().optional(),
  timestamp: z.string().optional()
});

interface WaitlistEntry {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  personalityType?: string;
  timestamp: string;
  id: number; // Changed from string to number
}

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (err) {
    console.error('Error creating data directory:', err);
    throw err;
  }
}

async function readWaitlistData(): Promise<WaitlistEntry[]> {
  try {
    const fileData = await fs.readFile(FILE_PATH, 'utf8');
    return JSON.parse(fileData);
  } catch (err) {
    // If file doesn't exist, return empty array
    if (err instanceof Error && 'code' in err && err.code === 'ENOENT') {
      return [];
    }
    throw err;
  }
}

async function writeWaitlistData(data: WaitlistEntry[]): Promise<void> {
  await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2));
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>\"']/g, '');
}

// Modified to generate sequential IDs
async function generateNextId(): Promise<number> {
  const existingData = await readWaitlistData();
  if (existingData.length === 0) {
    return 1;
  }
  return Math.max(...existingData.map(entry => entry.id)) + 1;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the input
    const validationResult = waitlistSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Validation failed',
          errors: validationResult.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;
    
    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeInput(validatedData.firstName),
      lastName: sanitizeInput(validatedData.lastName),
      email: validatedData.email.toLowerCase().trim(),
      phoneNumber: sanitizeInput(validatedData.phoneNumber),
      personalityType: validatedData.personalityType ? sanitizeInput(validatedData.personalityType) : undefined,
    };

    await ensureDataDir();
    
    // Read existing data
    const existingData = await readWaitlistData();
    
    // Create new entry with sequential ID
    const newEntry: WaitlistEntry = {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      id: await generateNextId() // Now returns a number
    };
    
    const updatedData = [...existingData, newEntry];
    await writeWaitlistData(updatedData);
    
    console.log(`New waitlist entry added: ${sanitizedData.email} at ${newEntry.timestamp}`);
    
    return NextResponse.json({ 
      success: true,
      message: 'Successfully joined waitlist!',
      data: {
        id: newEntry.id,
        timestamp: newEntry.timestamp,
        email: sanitizedData.email
      }
    });
    
  } catch (error) {
    console.error('Waitlist API Error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? 
          (error instanceof Error ? error.message : 'Unknown error') : 
          'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureDataDir();
    
    const data = await readWaitlistData();
    
    // Return summary data (without sensitive info in production)
    const sanitizedData = data.map(entry => ({
      id: entry.id,
      firstName: entry.firstName,
      lastName: entry.lastName,
      email: process.env.NODE_ENV === 'development' ? entry.email : entry.email.replace(/(.{3}).*(@.*)/, '$1***$2'),
      personalityType: entry.personalityType,
      timestamp: entry.timestamp
    }));
    
    return NextResponse.json({
      success: true,
      count: data.length,
      data: sanitizedData,
      totalEntries: data.length
    });
    
  } catch (error) {
    console.error('Waitlist GET API Error:', error);
    
    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to retrieve data',
        error: process.env.NODE_ENV === 'development' ? 
          (error instanceof Error ? error.message : 'Unknown error') : 
          'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}