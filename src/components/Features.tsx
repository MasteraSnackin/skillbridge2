import { Clock, TrendingUp, Lock } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Solution
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Experience a revolutionary approach to freelancing with our comprehensive platform
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          <FeatureCard
            title="Instant Payments"
            description="Upon task completion, improving cash flow"
            icon={<Clock className="h-6 w-6" />}
          />
          <FeatureCard
            title="Low Transaction Fees"
            description="Making freelance work more accessible"
            icon={<TrendingUp className="h-6 w-6" />}
          />
          <FeatureCard
            title="Blockchain Security"
            description="Transparency and secure smart contracts"
            icon={<Lock className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
}