import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Timeline from "@/components/Timeline";
import Emigrants from "@/components/Emigrants";
import Quotes from "@/components/Quotes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Timeline />
      <Emigrants />
      <Promo />
      <Quotes />
      <Footer />
    </main>
  );
};

export default Index;
