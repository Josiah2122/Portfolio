import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "First MERN Project",
    description: "A simple MERN stack project.",
    image: "/projects/mern project.png",
    tags: ["React", "Express", "Node.js", "Chakra UI", "MongoDB"],
    demoUrl: "https://mern-crash-course-z27s.onrender.com/",
    githubUrl: "https://github.com/Josiah2122/MERN-crash-course",
    category: "self",
  },
  {
    id: 2,
    title: "Dental Clinic Website",
    description:
      "A modern dental practice website showcasing comprehensive oral care services, from routine checkups to cosmetic dentistry. Features online booking, patient resources, and educational content for a seamless healthcare experience.",
    image: "/projects/dental home.png",
    tags: ["Wordpress"],
    demoUrl: "https://wisdomaddis.com/",
    // githubUrl: "#",
    category: "meselal",
  },
  {
    id: 3,
    title: "Meselal Company Website",
    description:
      "The official hub for Meselal Tech, highlighting IT solutions, web development, and digital services. Explore their portfolio, client testimonials, and expertise in delivering tailored technology innovations.",
    image: "/projects/home.png",
    tags: ["Wordpress"],
    demoUrl: "https://meselaltech.com/",
    // githubUrl: "#",
    category: "meselal",
  },
  {
    id: 4,
    title: "Property and Procurement Management",
    description:
      "This robust Enterprise Resource Planning (ERP) system is designed to streamline property management, procurement, inventory control, fleet operations, and financial workflows for businesses requiring end-to-end operational oversight. With modular menus catering to diverse departments, the system ensures efficiency, transparency, and accountability across all processes.",
    image: "/projects/property.png",
    tags: [
      "React",
      "Redux",
      "C#",
      ".NET",
      "SQL",
      "Redux Toolkit",
      "Bootstrap",
      "MUI",
    ],
    demoUrl: "https://property.meselaltech.com/",
    // githubUrl: "#",
    category: "meselal",
  },
  {
    id: 5,
    title: "Production and Sales Management",
    description:
      "This advanced ERP system is designed for businesses in manufacturing, construction, or material production (e.g., concrete, asphalt, chemicals) that require end-to-end control over production, sales, inventory, and cost analysis. It integrates mix design management, laboratory testing, order processing, and financial tracking into a unified platform, ensuring efficiency from raw material procurement to final product delivery.",
    image: "/projects/sales.png",
    tags: [
      "React",
      "Redux",
      "C#",
      ".NET",
      "SQL",
      "Redux Toolkit",
      "Bootstrap",
      "MUI",
    ],
    demoUrl: "https://sales.meselaltech.com/",
    // githubUrl: "#",
    category: "meselal",
  },
  {
    id: 6,
    title: "HR Management",
    description:
      "This HR Management System is a centralized platform designed to simplify and automate employee management, payroll, performance tracking, and workforce communication. With an intuitive dashboard and organized modules, it empowers HR teams to efficiently handle all aspects of the employee lifecycle while ensuring compliance and data-driven decision-making.",
    image: "/projects/HR.png",
    tags: [
      "React",
      "Redux",
      "C#",
      ".NET",
      "SQL",
      "Redux Toolkit",
      "Bootstrap",
      "MUI",
    ],
    demoUrl: "https://hr.meselaltech.com/",
    // githubUrl: "#",
    category: "meselal",
  },
  {
    id: 7,
    title: "Office Management",
    description:
      "This Office Management System is a centralized digital workspace designed to enhance productivity, task tracking, and team collaboration. With a user-friendly dashboard, it provides real-time visibility into pending actions, deadlines, and project statuses—ensuring nothing falls through the cracks.",
    image: "/projects/office.png",
    tags: [
      "React",
      "Redux",
      "C#",
      ".NET",
      "SQL",
      "Redux Toolkit",
      "Bootstrap",
      "MUI",
    ],
    demoUrl: "https://office.meselaltech.com/",
    // githubUrl: "#",
    category: "meselal",
  },
];

const categories = ["all", "meselal", "self"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(
              (project) =>
                activeCategory === "all" || project.category === activeCategory
            )
            .map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {" "}
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Josiah2122"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
