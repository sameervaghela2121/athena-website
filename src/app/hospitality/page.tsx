"use client";

import Footer from "@/app/home/components/Footer";
import Header from "@/app/home/components/Header";
import Button from "@/common/Button";
import Pricing from "@/app/home/components/Pricing";
import Contact from "@/app/home/components/Contact";
import {
  Scale,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  Hotel,
  Star,
  Sparkles,
  HeadphonesIcon,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function HospitalityPage() {
  const enterpriseFeatures = [
    {
      icon: Scale,
      title: "Scalable",
      description: "Powerful to serve the needs of the biggest multi-nationals, with built-in support for multi-lingual, multi-location, and up to millions of users."
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security with SOC 2 compliance, end-to-end encryption, and role-based access controls to protect your sensitive information."
    },
    {
      icon: Zap,
      title: "Efficient",
      description: "Reduce information retrieval time by 80%. AI-powered instant answers mean your team spends less time searching and more time serving customers."
    },
    {
      icon: Users,
      title: "User Centric Design",
      description: "Intuitive interface designed for frontline workers. No training required—if you can use a search engine, you can use AthenaPro."
    },
    {
      icon: Award,
      title: "Enterprise Grade",
      description: "Built for mission-critical operations with 99.9% uptime SLA, dedicated support, and custom deployment options including on-premise solutions."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously evolving with the latest AI advancements. Regular updates ensure you're always leveraging cutting-edge knowledge management technology."
    }
  ];
  const handleGetStarted = () => {
    window.open("https://app.athenapro.ai", "_blank");
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-[#36a6e2]">
                Elevate Your{" "}
                <span className="text-primary">Guest Experience</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empower your hospitality team with instant access to guest preferences, 
                service standards, and property information—delivering exceptional experiences every time.
              </p>
              <div className="flex gap-4">
                <Button className="gap-2" onClick={handleGetStarted}>
                  Get Started
                </Button>
                <Link href="/#features"><Button variant="tertiary">
                  Learn More
                </Button></Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                <Hotel className="w-full h-64 text-primary opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#121721] text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#36a6e2]">
            Exceptional Service, Every Interaction
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 border border-white/20 p-8 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#36a6e2]">
                Personalized Service
              </h3>
              <p className="text-white/80">
                Access guest profiles, preferences, and history instantly. Enable your team 
                to provide personalized service that creates memorable experiences.
              </p>
            </div>
            
            <div className="bg-white/10 border border-white/20 p-8 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#36a6e2]">
                Concierge Excellence
              </h3>
              <p className="text-white/80">
                Instant access to local attractions, restaurant recommendations, and property 
                amenities. Turn every staff member into an expert concierge.
              </p>
            </div>
            
            <div className="bg-white/10 border border-white/20 p-8 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#36a6e2]">
                Service Recovery
              </h3>
              <p className="text-white/80">
                Quick access to protocols for handling complaints and special requests. 
                Empower staff to resolve issues immediately and turn problems into opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#36a6e2]">
              Built for <span className="text-primary">Hospitality Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Features that help you deliver world-class service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[#36a6e2]">Multi-Property Management</h3>
                <p className="text-muted-foreground">
                  Manage knowledge across multiple properties while maintaining unique local 
                  information. Perfect for hotel chains and resort groups.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[#36a6e2]">Standards & Quality</h3>
                <p className="text-muted-foreground">
                  Maintain brand standards across all touchpoints. Instant access to service 
                  protocols ensures consistency in every guest interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#36a6e2]">
              AI-Powered Knowledge,{" "}
              <span className="text-primary">Tailored for Enterprise Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance productivity with intelligent knowledge sharing, secure access controls, 
              and tailored solutions for enterprise-wide success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="p-8 border rounded-2xl hover:shadow-lg transition-shadow bg-white">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-primary " />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 [color:#36a6e2]">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </>
  );
}
