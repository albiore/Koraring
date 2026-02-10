import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { EarlyAccessBanner } from "@/components/EarlyAccessBanner";
import koraRing from "@/assets/kora-ring.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f6f1e2] overflow-hidden">
      
      <div className="kora-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <FadeIn>
              <p className="kora-label mb-6">Introducing KORA</p>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="kora-heading-xl mb-6 text-[#5C4033]">
                Stress doesn't need tracking. It needs intervention.
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="kora-body-lg max-w-xl mx-auto lg:mx-0 mb-10 text-[#5C4033]/80">
                Detect early stress signals and intervene before they escalate. Now you are in control.
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <EarlyAccessBanner>
                  <Button variant="kora" size="xl">
                    Join the early access list
                  </Button>
                </EarlyAccessBanner>
              </div>
            </FadeIn>
          </div>
          
          {/* Ring Image */}
          <FadeIn delay={400} className="flex justify-center lg:justify-end">
            {/* Ensure ring area matches hero background exactly */}
            <div className="relative bg-[#f6f1e2]">
              {/* Keep hero background perfectly flat; no localized glow behind ring */}
              <img 
                src={koraRing} 
                alt="KORA Smart Ring" 
                className="relative w-80 md:w-96 lg:w-[28rem] animate-float"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
