import { FadeIn } from "@/components/FadeIn";
import smilingPeople from "@/assets/smiling-people.jpg";

export const Solution = () => {
  return (
    <section className="kora-section">
      <div className="kora-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <FadeIn>
              <p className="kora-label mb-6">The Solution</p>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h2 className="kora-heading-lg mb-8">
                A closed-loop system for <span className="kora-gradient-text">real-time regulation</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="space-y-6 kora-body">
                <p>
                  KORA continuously monitors your autonomic nervous system through a precision 
                  smart ring. It learns your personal physiological baseline—not generic 
                  population averages.
                </p>
                <p>
                  When early stress deviations appear, KORA responds in the moment.<br />
                  A short, context-aware micro-intervention — a brief breathing exercise, a guided pause, a moment of conscious movement. Then it measures the effect.
                </p>
                <p className="text-foreground font-medium">
                  Over time, KORA learns which interventions work best for you, and when to deliver them.
                </p>
              </div>
            </FadeIn>
          </div>
          
          {/* Image */}
          <FadeIn delay={300} className="flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={smilingPeople} 
                alt="People smiling confidently" 
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
