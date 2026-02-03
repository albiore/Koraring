import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EarlyAccessBannerProps {
  children: React.ReactNode;
}

export const EarlyAccessBanner = ({ children }: EarlyAccessBannerProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list! 🎉",
      description: "We'll keep you updated on KORA's progress.",
    });
    
    setEmail("");
    setIsSubmitting(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-0 p-0 bg-transparent shadow-none">
        <div className="bg-gradient-to-br from-[#FBF4E2] to-[#E8F0E3] rounded-3xl p-1">
          <div className="bg-white/95 rounded-[22px] p-8 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
            {/* Header with icon */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#7C9A82]" />
                <span className="text-sm font-medium text-[#7C9A82] tracking-wide uppercase">
                  Early Access
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-[#5C4033] mb-3 leading-tight">
                Your calmer future self starts here
              </h2>
              
              <p className="text-[#5C4033]/70 text-base">
                Get early access updates as we build KORA.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-4 rounded-xl border-[#E5DFD3] bg-[#FDFCFA] text-[#5C4033] placeholder:text-[#5C4033]/40 focus:border-[#7C9A82] focus:ring-[#7C9A82]/20"
                required
              />
              
              <Button 
                type="submit" 
                variant="kora" 
                size="lg" 
                className="w-full h-12 rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join early access"}
              </Button>
            </form>

            {/* Footer */}
            <p className="text-center text-xs text-[#5C4033]/50 mt-5">
              Used only for KORA updates.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
