import { FadeIn } from "@/components/FadeIn";
import stressedWoman from "@/assets/stressed-woman.jpg";

export const Problem = () => {
  return (
    <section className="kora-section bg-card">
      <div className="kora-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <FadeIn className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img 
                src={stressedWoman} 
                alt="Woman experiencing stress" 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          
          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <FadeIn>
              <p className="kora-label mb-6">The Problem</p>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h2 className="kora-heading-lg mb-8">
                Stress is invisible until it isn't.
              </h2>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="space-y-6 kora-body">
                <p>
                  We become aware of stress only once it has accumulated — when the body is tense, attention slips, and recovery is required.
                </p>
                <p>
                  Meditation apps invite reflection.<br />
                  Wearables deliver reports.<br />
                  Both are useful. Both arrive too late.
                </p>
                <p className="text-foreground font-medium">
                  The moment that mattered has already passed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
