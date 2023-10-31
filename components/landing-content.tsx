"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Aaliyah R.",
    avatar: "A",
    title: "Entrepreneur",
    description: "'As a busy entrepreneur, I was struggling to keep up with administrative tasks for my small business. Saive has been an absolute game-changer! The AI-powered virtual assistant has automated so many repetitive jobs, freeing up my schedule dramatically. Whether it's responding to customer inquiries or creating marketing materials, Saive handles it seamlessly. The unlimited capabilities with Saive Premium have allowed me to scale my business like never before. I don't know how I functioned without it!'"
  },
  {
    name: "Wardell C.",
    avatar: "W",
    title: "Content Creator",
    description: "'Saive has revolutionized my content creation workflow. As a freelance video producer, I used to spend hours searching for royalty-free music and images. Now, Saive instantly generates high-quality visuals, audio, and even engaging video scripts tailored to my needs. With the time savings, I can take on more client work while also focusing on more creative endeavors. The seamless integration with existing tools through Saive is a game-changer for any content creator. I'm so glad I made the switch to this AI-powered assistant!'"
  },
  {
    name: "Ben D.",
    avatar: "B",
    title: "Digital Marketer",
    description: "'As a digital marketer managing multiple client accounts and campaigns, I rely heavily on automation, but was still spending hours on mundane responsibilities. Saive has taken my productivity to the next level with its unmatched AI capabilities! I can instantly generate content, engagements, and other assets needed to manage my clients' online presence. Saive Premium offers everything I need to continue growing my agency while maintaining excellent service quality. I firmly believe this is an indispensable tool for marketing professionals.'"
  },
  {
    name: "James W.",
    avatar: "J",
    title: "CTO at Acme Enterprises",
    description: "'As CTO of a rapidly growing startup, finding ways to optimize our operations is crucial. Integrating Saive into our customer service and marketing teams has increased productivity dramatically while lowering costs. Being able to automate conversations, content development, and other repetitive tasks has allowed us to scale efficiently. Switching to the corporate plan has provided all the AI capabilities we need as we continue to expand. I highly recommend Saive to any technology leader looking to streamline their workflow.'"
  }
]

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
