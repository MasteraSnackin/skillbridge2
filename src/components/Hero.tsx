import { Button } from "@/components/ui/button";
import { ChevronRight, Globe, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.light),theme(colors.background))]" />
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center space-x-2 mb-6">
          <Shield className="h-8 w-8 text-primary" />
          <Globe className="h-8 w-8 text-primary" />
        </div>
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-6xl">
          The Future of Freelancing is Decentralized
        </h1>
        <p className="mt-6 animate-fade-up text-lg leading-8 text-muted-foreground delay-100">
          Experience secure, instant payments and transparent collaboration through blockchain technology. Connect with global opportunities while eliminating trust barriers and high fees.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" className="animate-fade-up delay-200">
            Start Freelancing
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="animate-fade-up delay-300">
            Post a Job
          </Button>
        </div>
      </div>
    </section>
  );
}