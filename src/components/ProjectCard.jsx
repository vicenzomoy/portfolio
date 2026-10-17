function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  pageUrl,
  onPageClick,
  badge,
  isFeatured = false,
}) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-2 flex flex-col justify-between ${
        isFeatured
          ? "border-cyan-400/50 bg-gradient-to-b from-gray-900/90 to-gray-950 shadow-xl shadow-cyan-950/30 hover:border-cyan-400"
          : "border-white/10 bg-gray-950 hover:border-cyan-400/40"
      }`}
    >
      <div>
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden bg-gray-800">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          {badge && (
            <div className="absolute top-3 left-3">
              <span className="rounded-full border border-cyan-400/40 bg-gray-950/80 px-3 py-1 text-xs font-bold text-cyan-300 backdrop-blur-md shadow-md">
                {badge}
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Project Title */}
          <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-4 leading-7 text-gray-400 text-sm">{description}</p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-400/20"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Links Footer */}
      <div className="p-6 pt-0 mt-4 flex flex-wrap items-center gap-4">
        {pageUrl && (
          <a
            href={pageUrl}
            onClick={(e) => {
              if (onPageClick) {
                e.preventDefault();
                onPageClick();
              }
            }}
            className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-gray-950 shadow-md shadow-cyan-500/20 transition hover:bg-cyan-400 cursor-pointer"
          >
            <span>Buka Halaman SmartPond</span>
            <span>→</span>
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-xs text-gray-300 transition hover:text-cyan-400"
          >
            GitHub →
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
