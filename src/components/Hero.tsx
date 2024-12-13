import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.light),theme(colors.background))]" />
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-6xl">
          Decentralizing the Freelance Economy
        </h1>
        <p className="mt-6 animate-fade-up text-lg leading-8 text-muted-foreground delay-100">
          Connect with top talent and businesses in a secure, efficient ecosystem. From project discovery to payment, we make collaboration seamless.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" className="animate-fade-up delay-200">
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}