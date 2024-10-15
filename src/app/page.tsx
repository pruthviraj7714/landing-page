import CommunityChallenges from "@/components/CommunityChallanges";
import TestimonialsSection from "@/components/TestimonialSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart2,
  BookA,
  Brain,
  BrainCog,
  GitGraph,
  SmilePlus,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Learning",
    description:
      "Personalized learning paths driven by AI to help you master quantitative finance concepts faster.",
    icon: Brain,
  },
  {
    title: "Real-Time Market Data",
    description:
      "Stay updated with real-time market insights to apply your learning in real-world scenarios.",
    icon: GitGraph,
  },
  {
    title: "Expert-Crafted Curriculum",
    description:
      "Courses developed by leading finance experts, tailored to provide deep insights into complex quantitative strategies.",
    icon: BookA,
  },
  {
    title: "Interactive Simulations",
    description:
      "Practice trading and risk management in simulated environments that mirror real-world markets.",
    icon: SmilePlus,
  },
  {
    title: "Community Challenges",
    description:
      "Compete in challenges, learn from peers, and showcase your skills in quantitative finance competitions.",
    icon: BrainCog,
  },
  {
    title: "Personalized Progress Tracking",
    description:
      "Track your learning journey with insights into your strengths, areas for improvement, and milestones.",
    icon: BarChart2,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
            <div className="max-w-xl space-y-8 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter text-gray-900">
                Elevate Your Quantitative Finance Skills with{" "}
                <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  AI
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                Harness the power of AI and expert knowledge to thrive in the
                world of finance
              </p>
              <Button
                size="lg"
                className="group px-8 py-4 text-lg font-semibold bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Join Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="w-full max-w-lg lg:max-w-xl">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.prod.website-files.com/64ccd6239abfeec743815b28/662f58e1e6dd5be58d583ec3_AI-data-visualization%20(1).webp"
                  alt="AI data visualization"
                  className="mt-24 transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl lg:text-5xl font-bold mb-16 text-gray-800">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CommunityChallenges />

      <TestimonialsSection />

      <section className="py-20 lg:py-24 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Transform Your Quant Skills?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Join QuantDash today and start your journey to becoming a quant
            expert!
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  );
}
