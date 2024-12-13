import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileCheck, LockKeyhole, UserCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <LockKeyhole className="h-6 w-6" />,
      title: "Job Posting & Payment Lock",
      description: "Clients post jobs and lock payment in a Stellar-based escrow smart contract."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Work Submission",
      description: "Freelancers complete work and submit deliverables for client review."
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Client Approval",
      description: "Clients review and approve completed work."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Instant Payment",
      description: "Smart contracts automatically release payment to freelancer."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Skillbridge Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Experience seamless, secure freelancing with our blockchain-powered platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-white/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}