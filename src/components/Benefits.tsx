import { Shield, Clock, Globe } from "lucide-react";

export function Benefits() {
  return (
    <section className="py-24 sm:py-32 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Skillbridge?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Experience the future of freelancing with our decentralized platform
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg bg-primary p-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Secure Escrow</h3>
              <p className="mt-2 text-muted-foreground">
                Smart contracts automatically hold funds until work is approved
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg bg-primary p-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">5-Second Finality</h3>
              <p className="mt-2 text-muted-foreground">
                Lightning-fast payments with Stellar blockchain technology
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg bg-primary p-3">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Global Access</h3>
              <p className="mt-2 text-muted-foreground">
                Connect with opportunities worldwide through Stellar anchors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}