// src/components/Timeline.jsx
import React, { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Code, Award } from "lucide-react";

const TimelineItem = ({ item, index }) => {
  const itemRef = useRef(null);

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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  const Icon =
    {
      work: Briefcase,
      education: GraduationCap,
      project: Code,
      achievement: Award,
    }[item.type] || Briefcase;

  return (
    <div
      ref={itemRef}
      className={`flex w-full transition-all duration-700 ease-in-out transform opacity-0 ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
      style={{
        transform: "translateY(20px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Timeline Card */}
      <div
        className={`w-[calc(50%-24px)] px-6 py-4 ${
          index % 2 === 0 ? "text-right" : "text-left"
        }`}
      >
        <div className="bg-card border-border p-6 rounded-xl shadow-lg border">
          <div className="flex items-center mb-2">
            <Icon className="text-primary mr-2" size={18} />
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {item.type}
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
          <p className="mt-3 text-foreground/90">{item.description}</p>
          {item.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Timeline Icon - Positioned in the center */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary border-4 border-card shadow-lg">
          <Icon className="text-primary-foreground" size={18} />
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const timelineRef = useRef(null);

  const timelineItems = [
    {
      type: "work",
      title: "Frontend Developer",
      date: "Feb 2024 - Present",
      description:
        "Led development of responsive web applications using React and TypeScript.",
      tags: [
        "React",
        "TypeScript",
        "Redux",
        "Material UI",
        "Chakra UI",
        "Next.js",
        "Tailwind CSS",
        "Figma",
        "Git/GitHub",
        "Docker",
        "Blender",
        "Wordpress",
        "VS Code",
        "RTK Query",
        "Redux Toolkit",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      date: "Oct 2018 - Sep 2022",
      description:
        "Graduated with honors, receiving a Bachelor of Computer Science degree from Unity University.",
      tags: ["Computer Science", "Unity University", "Honors"],
    },
    {
      type: "project",
      title: "First MERN Project",
      date: "Feb 2024",
      description:
        "A simple MERN stack project. Built with React, Node.js, Chakra UI, and MongoDB that does basic CRUD operations.",
      tags: ["React", "Node.js", "Chakra UI", "MongoDB", "Express"],
    },
    // {
    //   type: "achievement",
    //   title: "Best UI Design Award",
    //   date: "Nov 2020",
    //   description:
    //     "Received industry recognition for innovative dashboard interface design.",
    //   tags: ["UI Design", "Figma", "Prototyping"],
    // },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Professional <span className="text-primary">Journey</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My career progression, education, and significant milestones.
        </p>

        <div className="relative py-12" ref={timelineRef}>
          {/* Single Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2"></div>

          <div className="space-y-16 relative">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                <TimelineItem item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
