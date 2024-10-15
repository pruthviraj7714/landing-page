import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function CommunityChallenges() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-primary/10 to-purple-600/10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl lg:text-5xl font-bold mb-16 text-gray-800">
          Join a Vibrant Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-full h-48 relative mb-4 rounded-t-lg overflow-hidden">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/413/153/non_2x/outlined-icon-of-group-of-people-doing-discussion-suitable-for-design-element-of-teamwork-discussion-social-networking-and-business-forum-free-vector.jpg"
                  alt="Quant Finance Discussions"
                />
              </div>
              <CardTitle className="text-xl font-bold">
                Quant Finance Discussions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Join in-depth conversations on quantitative finance strategies
                and industry trends. Learn from experts and peers to stay ahead
                of the curve.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-full h-48 relative mb-4 rounded-t-lg overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/637711198/photo/hand-with-marker-writing-skill-concept.jpg?s=612x612&w=0&k=20&c=Dq1KVhcx71mfFq36b8Ieaz-H9IKCdu9YdDSkY_5XfM4="
                  alt="Skill-Sharpening Challenges"
                />
              </div>
              <CardTitle className="text-xl font-bold">
                Skill-Sharpening Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Participate in regular finance challenges to test and improve
                your expertise.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-full h-48 relative mb-4 rounded-t-lg overflow-hidden">
                <img
                  src="https://assets-static.invideo.io/images/large/webinar_pic_669a2b94fd.jpg"
                  alt="Expert-Led Webinars"
                />
              </div>
              <CardTitle className="text-xl font-bold">
                Expert-Led Webinars
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Attend live webinars hosted by quant experts, covering key
                topics from market analysis to risk management. Ask questions
                and get real-time answers.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
          >
            Get Involved
          </Button>
        </div>
      </div>
    </section>
  );
}
