import { FadeIn } from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Sense",
    description: "The KORA ring continuously captures heart rate variability and other autonomic nervous system signals with clinical-grade precision.",
  },
  {
    number: "02",
    title: "Detect",
    description: "Our AI identifies early stress deviations from your personal baseline—subtle shifts that occur before you consciously notice tension.",
  },
  {
    number: "03",
    title: "Respond",
    description: "A personalized micro-intervention is delivered through the app. KORA then measures the physiological effect to refine future responses.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="kora-section">
      <div className="kora-container">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="kora-label mb-6 text-center">How It Works</p>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="kora-heading-lg text-center mb-16">
              Three steps to real-time regulation
            </h2>
          </FadeIn>
          
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={200 + index * 100}>
                <div className="relative">                  
                  <div className="text-center lg:text-left">
                    <span className="inline-block text-5xl font-light text-primary/30 mb-4">
                      {step.number}
                    </span>
                    <h3 className="kora-heading-md text-2xl mb-3">{step.title}</h3>
                    <p className="kora-body">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
