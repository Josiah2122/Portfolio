import { ArrowRight, Download, ExternalLink, Github } from "lucide-react";
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
    category: "Self",
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
    category: "Meselal",
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
    category: "Meselal",
  },
  {
    id: 20,
    title: "Av Construction and Engineering",
    description:
      "A custom WordPress website for AV Construction and Engineering, showcasing their services, projects, and expertise in the construction industry. The website features a modern design, easy navigation, and a responsive layout for optimal user experience on various devices.",
    image: "/projects/Av.png",
    tags: ["Wordpress"],
    demoUrl: "https://av.meselaltech.com/",
    // githubUrl: "#",
    category: "Meselal",
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
    category: "Meselal",
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
    category: "Meselal",
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
    category: "Meselal",
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
    category: "Meselal",
  },
  {
    id: 8,
    title: "ToDo List",
    description:
      "A simple Todo List application built with Android Studio for an assignment in my 4th year at Unity University. The app allows users to create, read, update, and delete tasks. It also features a user-friendly interface with a list view, floating action button, and a navigation drawer. The app utilizes SQLite for data storage and follows the MVC architecture pattern.",
    image: "/projects/ToDoCrop.jpg",
    tags: ["Android Studio"],
    downloadLink: "/ToDo.apk",
    downloadName: "ToDo.apk",
    category: "Application Development",
  },
  {
    id: 9,
    title: "Donut Project",
    description:
      "This was my first Blender project, and I'm grateful to Blender Guru on YouTube for guiding me through it. I learned a lot from this project, from setting up a scene to rendering a final image. It was a great starting point for my Blender journey, and I'm proud of how far I've come since then.",
    video: "/projects/Donut.mp4",
    tags: ["Blender"],
    category: "Blender",
  },
  {
    id: 10,
    title: "Dodge Model",
    description:
      "I created this car model using references from images and following a tutorial. Although it's still incomplete, I managed to complete the body of the car. I'm excited to continue working on it and add more details in the future.",
    image: "/projects/Dodge Render.PNG",
    tags: ["Blender"],
    category: "Blender",
  },
  {
    id: 11,
    title: "Couch",
    description:
      "A simple couch model created using Blender. I followed a tutorial to create the couch from scratch, learning how to create and manipulate shapes, add materials and textures, and use lighting to enhance the model's appearance.",
    image: "/projects/Couch.png",
    tags: ["Blender"],
    category: "Blender",
  },
  {
    id: 12,
    title: "Environment Modeling",
    description:
      "I created an interesting environment using Blender and basic shapes. I started by creating a plane to act as the ground, and then added a few basic shapes such as spheres, cylinders, and cones to create some interesting features. ",
    image: "/projects/Environment.png",
    tags: ["Blender"],
    category: "Blender",
  },
  {
    id: 13,
    title: "Hard Surface Modeling",
    description:
      "I used this project to learn about hard surface modeling in Blender. I learned that good topology is essential for creating clean models, and that it matters for a variety of reasons such as rendering, physics, and animation. I also learned how to use the knife tool to cut through objects and create clean edges, and much more.",
    image: "/projects/HardSurface.png",
    tags: ["Blender"],
    category: "Blender",
  },
  {
    id: 14,
    title: "Low Poly Modeling",
    description:
      "In this project, I learned how to create low poly models in Blender. I started by creating a high poly model and then used the decimate tool to reduce the number of polygons. I also learned how to use the remesh tool to create a clean and organized model.",
    image: "/projects/LowPoly.png",
    tags: ["Blender"],
    category: "Blender",
  },
  {
    id: 15,
    title: "Room",
    description:
      "What I learned from this project is that you don't need already made assets to create a good render such as this. You can use the tools already in Blender, such as its built-in textures and shaders, to create a great looking render. Additionally, lighting matters a lot and using multiple light sources can greatly enhance the mood and atmosphere of your render.",
    image: "/projects/roomfinalrender.png",
    tags: ["Blender"],
    category: "Blender",
  },
  {
    id: 16,
    title: "Sword",
    description:
      "In this project, I followed a tutorial from YouTube CG Fast Track. I learned how to create a visually appealing scene by combining different elements such as lighting, textures, and objects. I also learned how to use the various tools in Blender to create a cohesive and balanced composition. This project helped me to understand the importance of composition in 3D modeling and how it can enhance the overall look and feel of a render. ",
    image: "/projects/Sword.png",
    tags: ["Blender"],
    category: "Blender",
  },
  {
    id: 17,
    title: "Bush",
    description:
      "In this project, I learned how to create a simple bush using images and textures in Blender. I followed a tutorial and applied the techniques I learned to create a visually appealing bush model. I'm proud of how it turned out and can't wait to keep learning and improving my skills.",
    image: "/projects/bush.png",
    tags: ["Blender"],
    category: "Blender",
  },
  {
    id: 18,
    title: "Well",
    description:
      "A low poly well created using simple shapes in Blender. This project was a great exercise in learning how to create visually appealing models using basic shapes and techniques.",
    image: "/projects/well.png",
    tags: ["Blender"],
    category: "Blender",
  },
  {
    id: 19,
    title: "Knight Game",
    description:
      "A low poly well created using simple shapes in Blender. This project was a great exercise in learning how to create visually appealing models using basic shapes and techniques.",
    // image: "/projects/well.png",
    video: "/projects/Knight.mp4",
    tags: ["Godot", "GD Script"],
    downloadLink: "/Knight.exe",
    downloadName: "Knight.exe",
    category: "Godot",
  },
];

const categories = [
  "All",
  "Meselal",
  "Self",
  "Application Development",
  "Blender",
  "Godot",
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
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
                activeCategory === "All" || project.category === activeCategory
            )
            .map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : project.video ? (
                    <video
                      src={project.video}
                      controls
                      className="w-full h-full object-cover"
                      poster={project.poster || undefined}
                      autoPlay={true}
                      muted={true}
                      playsInline={true}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : null}
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, key) => (
                      <span
                        key={key}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
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
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.downloadLink && (
                        <a
                          href={project.downloadLink}
                          download={project.downloadName}
                          className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                          <Download size={20} />
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
