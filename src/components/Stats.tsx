import { Users, Globe, DollarSign, Clock } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "50K+",
      label: "Global Freelancers",
      description: "Trusted by freelancers worldwide"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "180+",
      label: "Countries Served",
      description: "True global accessibility"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      value: "0.001$",
      label: "Average Fee",
      description: "Minimal transaction costs"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "5s",
      label: "Payment Speed",
      description: "Lightning-fast transactions"
    }
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-lg bg-primary/10 p-3 text-primary">
                {stat.icon}
              </div>
              <div className="order-2 ml-4">
                <p className="text-3xl font-semibold tracking-tight text-primary">
                  {stat.value}
                </p>
                <p className="text-base font-semibold leading-7 text-gray-900">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}