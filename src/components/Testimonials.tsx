import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Skillbridge revolutionized how I receive payments. The instant transactions and low fees have made a huge difference in my freelancing career.",
      author: "Sarah Chen",
      role: "UI/UX Designer",
      avatar: "SC"
    },
    {
      quote: "The escrow system gives me peace of mind. I know my payment is secure, and I can focus on delivering quality work.",
      author: "Michael Rodriguez",
      role: "Full Stack Developer",
      avatar: "MR"
    },
    {
      quote: "Being able to receive payments in my local currency without crypto knowledge has opened up global opportunities for me.",
      author: "Priya Sharma",
      role: "Content Writer",
      avatar: "PS"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Freelancers Worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from our community about how Skillbridge has transformed their freelancing experience
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <blockquote className="text-gray-900 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}