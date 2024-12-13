import { Shield, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Technical Expertise",
      description: "Our team brings extensive experience in blockchain development and smart contract implementation."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Financial Knowledge",
      description: "Deep understanding of DeFi systems and regulatory compliance across regions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Focus",
      description: "Committed to creating an inclusive platform that serves freelancers worldwide."
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            About Skillbridge
          </h1>
          <p className="text-lg text-muted-foreground">
            We're revolutionizing the freelance marketplace through blockchain technology and financial inclusion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          {team.map((item, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose prose-lg mx-auto">
          <h2>Our Mission</h2>
          <p>
            Skillbridge is dedicated to breaking down barriers in the global freelance economy. 
            Through blockchain technology and innovative solutions, we're creating a more 
            accessible, transparent, and efficient marketplace for talent worldwide.
          </p>
          
          <h2>Our Vision</h2>
          <p>
            We envision a future where geographical boundaries and financial systems no longer 
            limit opportunities for skilled professionals. By leveraging Stellar blockchain and 
            Soroban smart contracts, we're making this vision a reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;