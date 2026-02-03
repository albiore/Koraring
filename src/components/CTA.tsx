import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { EarlyAccessBanner } from "@/components/EarlyAccessBanner";
import happyWalking from "@/assets/happy-walking.jpg";

export const CTA = () => {
  return (
    <section className="relative kora-section overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${happyWalking})` }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="kora-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="kora-heading-lg mb-6">
              What would life feel like with less stress?
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="kora-body-lg mb-10">
              Join our early access list to be among the first to experience KORA. 
              We're building something thoughtful—and we'd love to have you with us.
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <EarlyAccessBanner>
              <Button variant="kora" size="xl">
                Join the early access list
              </Button>
            </EarlyAccessBanner>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
