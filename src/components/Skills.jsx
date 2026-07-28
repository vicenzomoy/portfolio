function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["PHP", "Python", "Laravel", "Java"],
    },
    {
      title: "Database",
      skills: ["MySQL", "SQLite", "Room Database"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Android Studio"],
    },
  ];

  return (
    <section id="skills" className="bg-gray-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">Skills</p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">Technologies I work with</h2>

          <p className="mt-5 leading-8 text-gray-400">Here are some of the technologies and tools I have experience with or am currently learning.</p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
