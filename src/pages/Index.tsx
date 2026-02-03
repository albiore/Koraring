import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { WhyKora } from "@/components/WhyKora";
import { HowItWorks } from "@/components/HowItWorks";
import { Science } from "@/components/Science";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhyKora />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="science">
          <Science />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
