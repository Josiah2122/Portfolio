// src/components/ServicesSection.jsx
import React, { useEffect, useRef } from "react";
import {
  Code,
  LayoutPanelLeft,
  Gamepad2,
  Box,
  Palette,
  Smartphone,
  Database,
  Server,
} from "lucide-react";

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-card border-border p-8 rounded-xl shadow-lg border transition-all duration-700 ease-in-out transform opacity-0"
      style={{
        transform: "translateY(20px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
        <service.icon className="text-primary" size={32} />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground mb-4">{service.description}</p>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-primary mb-2">
          Technologies & Tools
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);

  const services = [
    {
      title: "Web Development",
      icon: Code,
      description:
        "Full-stack development using MERN stack or custom landing pages with responsive design. From concept to deployment, I create fast and engaging web experiences.",
      tags: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    {
      title: "UI/UX Design",
      icon: LayoutPanelLeft,
      description:
        "Creating intuitive user interfaces and seamless experiences. I focus on user-centered design principles to deliver products that users love.",
      tags: [
        "Figma",
        // "Adobe XD",
        // "User Research",
        // "Wireframing",
        // "Prototyping",
        // "Usability Testing",
      ],
    },
    {
      title: "Game Development",
      icon: Gamepad2,
      description:
        "Building interactive games with modern engines. As a passionate beginner, I enjoy creating immersive gameplay experiences and learning new techniques.",
      tags: [
        "Unity",
        "C#",
        "Blender",
        "2D/3D Design",
        // "Game Mechanics",
        "Level Design",
        "Godot",
        "GDScript",
        // "Phaser.js",
      ],
    },
    {
      title: "3D Modeling",
      icon: Box,
      description:
        "Creating detailed 3D models and animations with Blender. From characters to environments, I bring ideas to life in three dimensions.",
      tags: [
        "Blender",
        "Hard Surface Modeling",
        // "3D Sculpting",
        // "Texturing",
        // "Rigging",
        "Animation",
        "Rendering",
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      description:
        "Building cross-platform mobile applications with responsive interfaces. I create apps that work seamlessly across all device sizes.",
      tags: [
        // "React Native",
        // "Flutter",
        // "iOS",
        "Android",
        // "Responsive UI",
        // "Mobile UX",
      ],
    },
    {
      title: "Backend & API Development",
      icon: Server,
      description:
        "Designing robust backend systems and RESTful APIs. I build scalable solutions that power modern web applications.",
      tags: [
        "Node.js",
        "Express",
        "MongoDB",
        // "PostgreSQL",
        // "REST APIs",
        // "GraphQL",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to bring your digital ideas to life.
            From web development to 3D modeling, I combine technical skills with
            creative vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Have a project that doesn't fit into these categories? I'm always
            excited to explore new challenges and technologies. Let's discuss
            how I can help!
          </p>
          <a
            href="#contact"
            className="cosmic-button inline-flex items-center gap-2"
          >
            Let's Talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
