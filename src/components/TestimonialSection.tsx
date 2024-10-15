import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  name : string;
  title : string;
  quote : string;
  image : string;
}

const testimonials : TestimonialProps[] = [
  {
    name: "Sarah Johnson",
    title: "Software Engineer",
    quote:
      "This platform has been a game-changer for my career. The courses are top-notch and directly applicable to my work.",
    image:
      "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    name: "Michael Chen",
    title: "Data Scientist",
    quote:
      "I've tried many online learning platforms, but this one stands out. The quality of instruction and the community support are unparalleled.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJTbqAEuo4bB02nBStyA5fYTVn3fQ1hi5MZOK_nF4Ai7Jl_zmgbqHIR4jesI_oMn9JMw&usqp=CAU",
  },
  {
    name: "Emily Rodriguez",
    title: "UX Designer",
    quote:
      "The courses here have helped me stay ahead in the fast-paced world of design. I've learned so much and it's reflected in my work.",
    image:
      "https://img.freepik.com/foto-gratis/foto-estudio-mujer-alegre-sonriente-tiene-apariencia-atractiva_273609-28204.jpg",
  },
  {
    name: "David Kim",
    title: "Product Manager",
    quote:
      "As a PM, staying updated with tech trends is crucial. This platform provides concise, relevant courses that fit into my busy schedule.",
    image:
      "https://img.freepik.com/foto-gratis/atractiva-mujer-caucasica-cabello-rubio-lacio-gafas-camisa-vaquera-sonrie-feliz-tiene-buen-humor-despues-dia-exitoso-universidad-contenta-contenta-posar_176420-13174.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Learners Are Saying
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial : TestimonialProps, index : number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
      
                        className="rounded-full h-24 w-24 object-contain mb-4"
                      />
                      <blockquote className="text-center mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-center">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">
                          {testimonial.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
