import { Shield, DollarSign, Globe, Scale, LightningBolt, Handshake } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose SkillBridge?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Built on Stellar blockchain, our platform revolutionizes freelancing with secure, instant, and transparent transactions.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          <FeatureCard
            title="Secure Escrow Payments"
            description="Smart contracts ensure your funds are safe until work is approved, eliminating payment risks for both parties."
            icon={<Shield className="h-6 w-6" />}
          />
          <FeatureCard
            title="Instant Global Payments"
            description="Receive payments within seconds, not days, with minimal fees using Stellar's fast blockchain network."
            icon={<LightningBolt className="h-6 w-6" />}
          />
          <FeatureCard
            title="Fair Dispute Resolution"
            description="Transparent, on-chain mediation process ensures fair resolution of any disputes."
            icon={<Scale className="h-6 w-6" />}
          />
          <FeatureCard
            title="Global Accessibility"
            description="Connect with opportunities worldwide, regardless of your location or banking access."
            icon={<Globe className="h-6 w-6" />}
          />
          <FeatureCard
            title="Low Transaction Fees"
            description="Save money with minimal fees for payments and currency conversions."
            icon={<DollarSign className="h-6 w-6" />}
          />
          <FeatureCard
            title="Trusted Collaboration"
            description="Build confidence with a transparent, blockchain-based reputation system."
            icon={<Handshake className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
}