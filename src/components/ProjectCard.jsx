function ProjectCard({ title, description, image, technologies, githubUrl }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-950 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-800">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-2xl font-semibold text-white">{title}</h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-400">{description}</p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span key={technology} className="rounded-md bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-400">
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex items-center gap-6">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-300 transition hover:text-cyan-400">
            GitHub →
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
