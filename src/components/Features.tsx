import { Shield, DollarSign, Globe, Scale, Zap, Handshake } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Skillbridge?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Experience the power of decentralized freelancing with Stellar blockchain and Soroban smart contracts. Secure, instant, and transparent transactions for the modern gig economy.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          <FeatureCard
            title="Secure Escrow Payments"
            description="Smart contracts automatically hold funds until work is approved, protecting both freelancers and clients through a trustless system."
            icon={<Shield className="h-6 w-6" />}
          />
          <FeatureCard
            title="Instant Global Payments"
            description="Leverage Stellar's 5-second finality for instant payments worldwide, with minimal fees and no currency conversion charges."
            icon={<Zap className="h-6 w-6" />}
          />
          <FeatureCard
            title="Fair Dispute Resolution"
            description="On-chain mediation through Soroban smart contracts ensures transparent and efficient resolution of any disputes."
            icon={<Scale className="h-6 w-6" />}
          />
          <FeatureCard
            title="Global Accessibility"
            description="Access opportunities worldwide with Stellar anchors, enabling seamless conversion between digital assets and local currencies."
            icon={<Globe className="h-6 w-6" />}
          />
          <FeatureCard
            title="Minimal Transaction Fees"
            description="Save money with Stellar's low-cost infrastructure, eliminating traditional banking fees and reducing currency conversion costs."
            icon={<DollarSign className="h-6 w-6" />}
          />
          <FeatureCard
            title="Milestone-Based Payments"
            description="Work confidently with automated milestone payments, ensuring fair compensation for completed work phases."
            icon={<Handshake className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
}