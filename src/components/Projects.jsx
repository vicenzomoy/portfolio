import ProjectCard from "./ProjectCard";

function Projects({ onNavigateToSmartPond }) {
  const projects = [
    {
      title: "SmartPond — IoT Autonomous Pond",
      description:
        "Sistem cerdas ekosistem kolam ikan terintegrasi ESP32, sensor multi-parameter kualitas air (pH, TDS, Suhu, DO), aerator otomatis, feeder terjadwal, serta suplai energi mandiri dari kincir angin mini dan panel surya.",
      image: "/assets/ilustrasi.png",
      technologies: ["IoT", "ESP32", "React", "Sensors", "MQTT", "Clean Energy"],
      githubUrl: "https://github.com/vicenzomoy/smartpond",
      pageUrl: "/smartpond",
      isFeatured: true,
      badge: "⭐ Featured IoT Project",
    },
    {
      title: "SI UMKM",
      description:
        "A web-based financial management system designed to help small and medium-sized businesses record and monitor their daily financial transactions in a simple and organized way.",
      image: "/projects/si-umkm.png",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/vicenzomoy/siumkm",
    },
    {
      title: "PetCare App",
      description:
        "An Android marketplace application that connects pet owners with pet care services. The application provides features for booking grooming, pet hotel, and home service.",
      image: "/projects/petcare.png",
      technologies: ["Java", "Android", "Room Database"],
      githubUrl: "https://github.com/vicenzomoy/PetCareApp",
    },
  ];

  return (
    <section id="projects" className="bg-gray-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">Projects</p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">Things I've built</h2>

          <p className="mt-5 leading-8 text-gray-400">
            Here are some of the projects I have worked on while learning and exploring software development and IoT engineering.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              pageUrl={project.pageUrl}
              onPageClick={project.pageUrl === "/smartpond" ? onNavigateToSmartPond : undefined}
              badge={project.badge}
              isFeatured={project.isFeatured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
