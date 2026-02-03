import { FadeIn } from "@/components/FadeIn";

export const Science = () => {
  return (
    <section className="kora-section bg-card">
      <div className="kora-container">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="kora-label mb-6">Scientific Foundation</p>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="kora-heading-lg mb-8">
              Built on established science
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="space-y-6 kora-body">
              <p>
                Heart rate variability (HRV) is a well-established marker of autonomic nervous system regulation, closely linked to stress and resilience.
              </p>
              <p>
                KORA builds on this science with a proprietary Stress Index that detects early deviations from your personal physiological baseline.
              </p>
              <p>
                Adaptive algorithms and an AI agent learn how your nervous system responds over time, refining when and how to intervene based on what works for you.
              </p>
              <p className="text-foreground font-medium">
                Developed in collaboration with researchers and clinicians, with a commitment to rigor and evidence-based design.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="mt-12 pt-12 border-t border-border">
              <p className="text-foreground font-medium">
                Chronic stress is one of the defining challenges of modern life.<br />
                It's time to address it — when it matters.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
