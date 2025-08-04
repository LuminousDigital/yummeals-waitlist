import apiClient from '@/lib/api-client';
import { WaitlistFormData } from '@/schemas/waitlistSchema';

export const submitWaitlist = async (data: WaitlistFormData) => {
  try {
    const response = await apiClient.post('/api/v1/waitlist', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      personalityType: data.personalityType || "N/A",
      timestamp: new Date().toISOString(),
    });
    
    return response.data;
  } catch (error) {
    console.error("Waitlist submission error:", error);
    throw new Error((error as Error).message || "Waitlist submission failed");
  }
};