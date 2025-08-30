import image_361d93c15950211637afbb81b6d743e30880bf9e from 'figma:asset/361d93c15950211637afbb81b6d743e30880bf9e.png';
import image_c8218ff8244d46cd94890ac21ca461718397e87d from 'figma:asset/c8218ff8244d46cd94890ac21ca461718397e87d.png';
import image_cb02297a6278279adf889b9e434f18e8b8712555 from 'figma:asset/cb02297a6278279adf889b9e434f18e8b8712555.png';
import image_0dc0ffe725e5a29840f66eafff7d427b4fce2db8 from 'figma:asset/0dc0ffe725e5a29840f66eafff7d427b4fce2db8.png';
import image_38ebf185b71022fd4f2a304a7a471e747edb2376 from 'figma:asset/38ebf185b71022fd4f2a304a7a471e747edb2376.png';

import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export function MoreWorksSection() {
  const navigate = useNavigate();
  
  const categories = [
    {
      title: "UI Design Gallery",
      description: "Collection of interface designs and visual explorations",
      image: image_361d93c15950211637afbb81b6d743e30880bf9e,
      projectCount: "9 Designs",
      tags: ["UI Design", "Components", "Web Design"],
      slug: "ui-design-gallery"
    },
    {
      title: "UX Case Study",
      description: "Explored a dummy case study to understand and enhance UX design processes",
      image: image_cb02297a6278279adf889b9e434f18e8b8712555,
      projectCount: "1 Case Study",
      tags: ["UX Research", "Process", "Strategy"],
      slug: "ux-case-study"
    },
    {
      title: "Brand and Logo",
      description: "Explored visual identity and branding through independent design projects",
      image: image_c8218ff8244d46cd94890ac21ca461718397e87d,
      projectCount: "1 Brand",
      tags: ["Branding", "Logo", "Identity"],
      slug: "brand-and-logo"
    }
  ];

  const handleCategoryClick = (slug: string) => {
    navigate(`/more-works/${slug}`);
  };

  return (
    <section id="more-works" className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-medium mb-4">More Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore my diverse range of design work across different disciplines and mediums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer overflow-hidden border-0 bg-background hover:shadow-xl transition-all duration-300 h-full"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-medium">{category.title}</h3>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <p className="text-muted-foreground mb-4 flex-1">{category.description}</p>
                  
                  <div className="text-sm text-muted-foreground font-medium">
                    {category.projectCount}
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