
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
// import WhyYummeals from '@/components/WhyYummeals'
import FoodPersonality from '@/components/FoodPersonality'
// import Ticket from "@/components/ticket";
import Footer from "@/components/footer";
import ComingSoonPage from '@/components/comingsoon';
import Delivery from '@/components/delivery';
import Whyyumeal from '@/components/whyyummeal';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Delivery /> 
      {/* <WhyYummeals /> */}
      <Whyyumeal /> 
      <FoodPersonality />
      {/* <Ticket /> */}
   
      <ComingSoonPage/>
      <Footer />
    </main>
  );
}
