import campaignImage from 'figma:asset/b74fbb8de2c9166277b6dc0cff5a4b4fe70a70d0.png';
import marineImage from 'figma:asset/7e1a37972034542d9a1fdd414a41b89726c770d3.png';
import image_b355c4b1e2be77c92651a8f62375abbd7d7982c6 from 'figma:asset/b355c4b1e2be77c92651a8f62375abbd7d7982c6.png';
import image_cf1eea0ec5ad2e36582806c137df6682635403fd from 'figma:asset/cf1eea0ec5ad2e36582806c137df6682635403fd.png';
import image_96d1009674c819361b9011e4dd49d2fae3f84ebc from 'figma:asset/96d1009674c819361b9011e4dd49d2fae3f84ebc.png';
import image_2b2ea050d2711d502e9f13fc585076bc4057603e from 'figma:asset/2b2ea050d2711d502e9f13fc585076bc4057603e.png';

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from 'react-router-dom';

export function ProjectsSection() {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 1,
      title: "Case Study page for the Brand Site",
      description: "Implemented a case study page in collaboration with the marketing team, enhancing brand storytelling and improving audience engagement.",
      image: image_96d1009674c819361b9011e4dd49d2fae3f84ebc,
      tags: ["Case Study", "Web Design", "Marketing"],
      year: "2025",
      slug: "case-study-brand-site"
    },
    {
      id: 2,
      title: "Go Green Website Implementation",
      description: "Implemented a Go Green website by adapting a pre-designed template into a CMS platform, enhancing it with a modern, visually appealing layout to deliver a polished and user-friendly experience.",
      image: image_b355c4b1e2be77c92651a8f62375abbd7d7982c6,
      tags: ["Recycle", "Implementation", "Custom Work"],
      year: "2023",
      slug: "go-green-website"
    },
    {
      id: 3,
      title: "Donation Page for Marine Live",
      description: "A donation page dedicated to supporting marine life conservation, making it easy for visitors to contribute to protecting our oceans.",
      image: marineImage,
      tags: ["Donation Page", "Implementation", "Template"],
      year: "2022",
      slug: "marine-live-donation"
    },

    {
      id: 4,
      title: "Dummy Charity Website for Client Pitching",
      description: "Implemented the 'Sleep for Cancer' campaign landing page by translating provided mockups into a CMS-based website. The result is a polished, visually engaging layout that effectively showcases the cause while remaining easy to manage and update.",
      image: campaignImage,
      tags: ["Campaign", "Landing Page", "Fancy Layout"],
      year: "2021",
      slug: "charity-campaign-marine-version"
    }
  ];

  const handleProjectClick = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  return (
    <section id="projects" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-medium mb-4">Website Design Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A selection of recent web projects showcasing my approach to modern digital design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group cursor-pointer overflow-hidden border-0 bg-muted/30 hover:bg-muted/50 transition-all duration-300"
              onClick={() => handleProjectClick(project.slug)}
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image || "https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwcG9ydGZvbGlvJTIwbW9ja3VwfGVufDF8fHx8MTc1NjU0OTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                        {tag}
                      </Badge>
                    ))}
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