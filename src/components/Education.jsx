function Education() {
  const journey = [
    {
      type: "Education",
      period: "2024 - Present",
      title: "Information Systems",
      organization: "Universitas Pelita Harapan Medan",
      description: "Studying Information Systems with a focus on software development, databases, information systems, and technology.",
    },
    {
      type: "Organization",
      period: "August 2025 - July 2026",
      title: "Member of Communication Media and Information Department",
      organization: "Himpunan Mahasiswa Program Studi Sistem Informasi UPH Medan",
      description: "Contributed as a member of the Communication, Media, and Information Department, supporting organizational communication and media-related activities.",
    },
  ];

  return (
    <section id="education" className="bg-gray-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">Education & Experience</p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">My journey so far</h2>

          <p className="mt-5 leading-8 text-gray-400">My academic journey, organizational experience, and activities that have helped me develop both technical and interpersonal skills.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-3 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          {journey.map((item, index) => (
            <div key={`${item.type}-${item.title}`} className="relative mb-12 last:mb-0">
              <div className={`flex flex-col gap-8 md:flex-row md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content */}
                <div className="ml-10 w-full md:ml-0 md:w-1/2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-400/40">
                    {/* Type */}
                    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">{item.type}</p>

                    {/* Period */}
                    <p className="mt-2 text-sm text-gray-500">{item.period}</p>

                    {/* Title */}
                    <h3 className="mt-3 text-xl font-semibold leading-relaxed text-white">{item.title}</h3>

                    {/* Organization */}
                    <p className="mt-2 font-medium text-gray-300">{item.organization}</p>

                    {/* Description */}
                    <p className="mt-4 leading-7 text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-3 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 ring-4 ring-gray-900 md:left-1/2" />

                {/* Empty Space */}
                <div className="hidden w-1/2 md:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
