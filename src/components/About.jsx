function About() {
  return (
    <section id="about" className="bg-gray-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">About Me</p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">A little bit about me</h2>

          <p className="mt-5 leading-8 text-gray-400">
            I am an Information Systems student with a strong interest in software development and technology. I enjoy learning how technology can be used to solve real-world problems and create meaningful digital experiences.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* About Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white">Who I Am</h3>

            <div className="mt-6 space-y-4 text-gray-400 leading-7">
              <p>I am currently studying Information Systems and continuously developing my skills in programming, software development, databases, and information systems.</p>

              <p>My current focus is on web and mobile application development. I am also interested in exploring full stack development and building practical projects that can be used to solve real-world challenges.</p>

              <p>I believe that the best way to learn technology is by building projects, experimenting with new ideas, and continuously improving.</p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-gray-900/50 p-4">
                <p className="text-2xl font-bold text-cyan-400">Student</p>

                <p className="mt-1 text-sm text-gray-400">Information Systems</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-gray-900/50 p-4">
                <p className="text-2xl font-bold text-cyan-400">Developer</p>

                <p className="mt-1 text-sm text-gray-400">Web & Mobile</p>
              </div>
            </div>
          </div>

          {/* Current Focus Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white">What I'm Focused On</h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-semibold text-cyan-400">Web Development</h4>

                <p className="mt-2 leading-7 text-gray-400">Building responsive and modern web applications using technologies such as React, JavaScript, PHP, and Laravel.</p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400">Full Stack Development</h4>

                <p className="mt-2 leading-7 text-gray-400">Learning how frontend, backend, databases, and APIs work together to create complete applications.</p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400">Continuous Learning</h4>

                <p className="mt-2 leading-7 text-gray-400">Continuously improving my technical skills through personal projects, coursework, and hands-on experimentation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
