import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: "Funraisin",
      role: "Digital Designer",
      duration: "Feb 2021 - Present",
      location: "Sydney, Australia",
      type: "Full-time",
      description: "Responsible for creating and editing client website designs using CMS platforms, with a primary focus on charity-related content.",
      achievements: [
        "Delivered various website layouts that enhanced the online presence of charity organizations",
        "Implemented tailored design solutions to keep websites aligned with current trends and requirements",
        "Supported marketing and advertising initiatives through content design and development"
      ],
      skills: ["UI/UX Design", "CMS", "Responsive Design", "HTML/CSS", "Figma", "Adobe Creative Suit"]
    },
    {
      id: 2,
      company: "SoftwareSeni Indonesia",
      role: "UX Developer",
      duration: "Dec 2020 - Present",
      location: "Yogyakarta, Indonesia",
      type: "Full-time",
      description: "Collaborated with the design team on projects involving UI design, prototyping, and graphic design, including logos, illustrations, and other creative assets.",
      achievements: [
        "Redesigned a Duty-Free website to improve usability and visual appeal",
        "Developed a complete brand identity for a project, including logo, brand guidelines, and website design",
        "Created engaging illustrations to support blog content and enhance storytelling",
        "Acted as a dedicated augmented team member for Funraisin, providing consistent value in digital design projects"
      ],
      skills: ["UI/UX Design", "Graphic Design", "Brand Identity", "Design Research", "Figma", "Adobe Creative Suit"]
    },
    {
      id: 3,
      company: "Slab! Design Studio",
      role: "UI Design",
      duration: "Aug 2020 - Dec 2020",
      location: "Yogyakarta, Indonesia",
      type: "Internship",
      description: "Designed engaging mobile and web interfaces, ensuring seamless user experiences through thorough design exploration.",
      achievements: [
        "Delivered 5+ website and mobile design projects within a 3-month internship, showcasing speed and adaptability",
        "Enhanced design expertise, with a strong focus on developing UI design skills"
      ],
      skills: ["UI/UX Design", "Design System", "Design Research","Figma"]
    },
    {
      id: 4,
      company: "PT. Inti Konten Indonesia (INTENS)",
      role: "Application Developer",
      duration: "Jun 2019 - Jul 2019",
      location: "Bandung, Indonesia",
      type: "Internship",
      description: "Redesigned and developed a desktop ballot application for secure e-voting, enhancing usability and reliability for election processes.",
      achievements: [
        "Actively participated in the entire development process, including problem research, mockup design, development & implementation, and testing",
        "Delivered an application with a refreshed interface",
        "Enhanced user experience (UX) by improving usability, accessibility, and interaction flow"
      ],
      skills: ["UI/UX Design", "Usability Testing", "Java", "Design Research", "Figma", "VS Code", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-medium mb-4">Working Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            My professional journey in design, spanning over 4 years of creating impactful digital experiences across various industries.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <Card key={experience.id} className="group border-0 bg-background hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <h3 className="text-2xl font-medium text-dark-forest">{experience.role}</h3>
                      <Badge variant="outline" className="w-fit text-xs rounded-full border-hunter-green text-hunter-green">
                        {experience.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-hunter-green" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-sage-green" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-pine-green" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-3 text-dark-forest">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-hunter-green mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3 text-dark-forest">Skills & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, index) => (
                            <Badge 
                              key={skill} 
                              variant="secondary" 
                              className={`text-xs rounded-full transition-colors ${
                                index % 4 === 0 ? 'bg-dark-forest/10 text-dark-forest hover:bg-dark-forest hover:text-white' :
                                index % 4 === 1 ? 'bg-hunter-green/10 text-hunter-green hover:bg-hunter-green hover:text-white' :
                                index % 4 === 2 ? 'bg-pine-green/10 text-pine-green hover:bg-pine-green hover:text-white' :
                                'bg-sage-green/10 text-sage-green hover:bg-sage-green hover:text-white'
                              }`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
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