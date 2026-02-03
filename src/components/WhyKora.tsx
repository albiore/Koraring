import { FadeIn } from "@/components/FadeIn";
import ringOnHand from "@/assets/ring-on-hand.png";
import meditationWoman from "@/assets/meditation-woman.jpg";
import appPhone from "@/assets/app-phone.png";

const reasons = [
  {
    image: ringOnHand,
    alt: "Smart ring on finger",
    title: "Real-time detection",
    description: "Not retrospective insights delivered hours later. KORA detects subtle shifts in your autonomic state as they happen.",
  },
  {
    image: meditationWoman,
    alt: "Woman in meditation",
    title: "Active intervention",
    description: "Not passive tracking that leaves action to you. KORA responds with targeted micro-interventions when you need them.",
  },
  {
    image: appPhone,
    alt: "App dashboard with stress chart",
    title: "Personal baselines",
    description: "Not generic metrics based on population averages. KORA learns your unique patterns and what regulation looks like for you.",
  },
];

export const WhyKora = () => {
  return (
    <section className="kora-section bg-card">
      <div className="kora-container">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="kora-label mb-6 text-center">Why KORA</p>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="text-center mb-16">
              <h2 className="kora-heading-lg mb-6">
                You've tried meditation apps and wearables.
              </h2>
              <p className="kora-body-lg max-w-2xl mx-auto">
                They help you reflect, but not regulate. KORA supports you in the moment, when it matters.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {reasons.map((reason, index) => (
              <FadeIn key={reason.title} delay={200 + index * 100}>
                <div className="text-center">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={reason.image} 
                      alt={reason.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="kora-heading-md text-xl mb-3">{reason.title}</h3>
                  <p className="kora-body text-base">{reason.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
