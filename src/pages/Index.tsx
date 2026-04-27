import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Waves from "@/components/Waves";
import Timeline from "@/components/Timeline";
import Cities from "@/components/Cities";
import DailyLife from "@/components/DailyLife";
import Press from "@/components/Press";
import Emigrants from "@/components/Emigrants";
import Children from "@/components/Children";
import Infographic from "@/components/Infographic";
import Promo from "@/components/Promo";
import Quotes from "@/components/Quotes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Waves />
      <Timeline />
      <Cities />
      <DailyLife />
      <Press />
      <Emigrants />
      <Children />
      <Infographic />
      <Promo />
      <Quotes />
      <Footer />
    </main>
  );
};

export default Index;