import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Timeline from "@/components/Timeline";
import DailyLife from "@/components/DailyLife";
import Emigrants from "@/components/Emigrants";
import Promo from "@/components/Promo";
import Quotes from "@/components/Quotes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Timeline />
      <DailyLife />
      <Emigrants />
      <Promo />
      <Quotes />
      <Footer />
    </main>
  );
};

export default Index;
