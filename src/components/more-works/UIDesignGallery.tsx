import image_51bf8c7957a49db54875cf5ac8d68d35dfebcf82 from 'figma:asset/51bf8c7957a49db54875cf5ac8d68d35dfebcf82.png';
import image_abdbfc69c40fb2fb71a6a1b2b3c0de2075a693f7 from 'figma:asset/abdbfc69c40fb2fb71a6a1b2b3c0de2075a693f7.png';
import image_3c519c949985438c7207fa8958065f81d4cebb5a from 'figma:asset/3c519c949985438c7207fa8958065f81d4cebb5a.png';
import image_e3b82ab4a77bfe0cc232aa282b8def08b28d7933 from 'figma:asset/e3b82ab4a77bfe0cc232aa282b8def08b28d7933.png';
import image_4819a686ce8926bf62ff91f56111d5965e226d82 from 'figma:asset/4819a686ce8926bf62ff91f56111d5965e226d82.png';
import image_9468cc088196ccde658451b7ec8ac27e042f63f9 from 'figma:asset/9468cc088196ccde658451b7ec8ac27e042f63f9.png';
import image_456c7023b86f897622d312f56bf9f5c4621af4ef from 'figma:asset/456c7023b86f897622d312f56bf9f5c4621af4ef.png';
import image_5db46fb5d5f176ada31dee77dab1f13f437485f3 from 'figma:asset/5db46fb5d5f176ada31dee77dab1f13f437485f3.png';
import image_096cc47804b67473bf39b86db0b7c00da7d9bbae from 'figma:asset/096cc47804b67473bf39b86db0b7c00da7d9bbae.png';
import image_4861b54ad701f4cd088fe4cbae13f140e21775da from 'figma:asset/4861b54ad701f4cd088fe4cbae13f140e21775da.png';
import image_c42e4e03e5f676bd4fad278118c0f8895ffb42fe from 'figma:asset/c42e4e03e5f676bd4fad278118c0f8895ffb42fe.png';
import image_58c98fe28e542042c61fad8b5ced1e630ba9c839 from 'figma:asset/58c98fe28e542042c61fad8b5ced1e630ba9c839.png';
import image_a549c2f7982e57198eb9d51c1a71a3cb840405a5 from 'figma:asset/a549c2f7982e57198eb9d51c1a71a3cb840405a5.png';
import image_7f57ae243e09c89c394d53678e3f9f28a8b4aa7d from 'figma:asset/7f57ae243e09c89c394d53678e3f9f28a8b4aa7d.png';
import image_e48822eff916d93bdb2ad901cb36d6410b544771 from 'figma:asset/e48822eff916d93bdb2ad901cb36d6410b544771.png';
import image_6ba63bac93b83d3e34368c049ad573cac1feab92 from 'figma:asset/6ba63bac93b83d3e34368c049ad573cac1feab92.png';
import image_a74e66efc67b5eff60b4df6f8d5b27b06944d777 from 'figma:asset/a74e66efc67b5eff60b4df6f8d5b27b06944d777.png';
import image_386551f6ff635e90eda0b5eccdcb40042188a2c7 from 'figma:asset/386551f6ff635e90eda0b5eccdcb40042188a2c7.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";

export function UIDesignGallery() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const designs = [
    {
      title: "Translator App",
      description: "This work was made for my exploration at the SoftwareSeni Design Team. This is an mobile Translator App.",
      category: "Mobile App",
      year: "2023",
      image: image_096cc47804b67473bf39b86db0b7c00da7d9bbae
    },
    {
      title: "Charity Hero",
      description: "This work was made for my exploration at the SoftwareSeni Design Team. This is an mobile Donation/Charity website with game theme.",
      category: "Hero Section",
      year: "2023",
      image: image_5db46fb5d5f176ada31dee77dab1f13f437485f3
    },
    {
      title: "Blog App",
      description: "This work was made for my exploration at the SoftwareSeni Design Team. This is an mobile Blog App.",
      category: "Mobile App",
      year: "2022",
      image: image_456c7023b86f897622d312f56bf9f5c4621af4ef
    },
    {
      title: "FnB Hero",
      description: "This work was made for my exploration at the SoftwareSeni Design Team. This hero is designed to showcase the Food & Beverages menu.",
      category: "Hero Section",
      year: "2022",
      image: image_9468cc088196ccde658451b7ec8ac27e042f63f9
    },
    {
      title: "Fashion Landing Page",
      description: "This project was created during my internship at Slab! Design Studio. The illustrations were produced by the Slab! Design Studio team. This landing page was designed to showcase and emphasize the elegance of a fashion website.",
      category: "Landing Page",
      year: "2021",
      image: image_4819a686ce8926bf62ff91f56111d5965e226d82
    },
    {
      title: "Summer Landing Page",
      description: "This project was created during my internship at Slab! Design Studio. The illustrations were produced by the Slab! Design Studio team. This summer landing page was designed to showcase a fashion website with a bright, vacation-inspired vibe.",
      category: "Landing Page",
      year: "2021",
      image: image_e3b82ab4a77bfe0cc232aa282b8def08b28d7933
    },
    {
      title: "Onboarding Screen",
      description: "This project was created during my internship at Slab! Design Studio. The illustrations were produced by the Slab! Design Studio team. This onboarding screen was designed to present an engaging and informative user experience.",
      category: "Onboarding",
      year: "2021",
      image: image_3c519c949985438c7207fa8958065f81d4cebb5a
    },
    {
      title: "JKT48 Website Redesign",
      description: "JKT48 Websiter Redesign. This is my exploration about Redesigning JKT48 Website Homepage.",
      category: "Redesign",
      year: "2021",
      image: image_abdbfc69c40fb2fb71a6a1b2b3c0de2075a693f7
    },
    {
      title: "Tokuflix",
      description: "Tokuflix is a mobile based application that provide a platform for streaming tokusatsu series or movie.",
      category: "Mobile App",
      year: "2021",
      image: image_51bf8c7957a49db54875cf5ac8d68d35dfebcf82
    }
  ];

  return (
    <div className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Button 
          onClick={() => navigate('/')}
          variant="ghost" 
          className="mb-8 rounded-[60px] hover:bg-muted/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-medium mb-6">UI Design Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            A collection of interface designs and visual explorations showcasing my approach to creating intuitive and engaging user experiences across various digital platforms.
          </p>
          
          {/* Page Badge */}
          <Badge variant="secondary" className="text-sm rounded-[60px] px-4 py-2">
            9 Designs
          </Badge>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div key={index} className="group">
              {/* Design Image */}
              <div className="aspect-[4/3] rounded-2xl mb-6 overflow-hidden">
                <ImageWithFallback
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Design Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium group-hover:text-sage-green transition-colors">
                    {design.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{design.year}</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {design.description}
                </p>
                
                <Badge variant="outline" className="text-xs rounded-full border-sage-green text-sage-green">
                  {design.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-green rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-medium mb-4">Interested in UI Design Work?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new interface design projects. Let's discuss how we can create amazing user experiences together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="rounded-[60px]"
                asChild
              >
                <a href="mailto:knockmedan@gmail.com">
                  Knock Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}