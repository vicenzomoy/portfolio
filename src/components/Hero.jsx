function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-gray-950 px-6 pt-20">
      {/* Background Decoration */}
      <div className="absolute left-1/2 top-1/4 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p className="mb-4 text-lg font-medium text-cyan-400">Hello, I'm</p>

          {/* Name */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">Vicenzo</h1>

          {/* Role */}
          <h2 className="mt-4 text-2xl font-semibold leading-relaxed text-gray-300 sm:text-3xl">
            Information Systems Student
            <span className="text-cyan-400"> & </span>
            Aspiring Full Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I am passionate about building web and mobile applications, learning modern technologies, and creating digital solutions that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:bg-cyan-300">
              View My Projects
            </a>

            {/* <a href="/cv.pdf" download className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400">
              Download CV
            </a> */}
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-6">
            <a href="https://github.com/vicenzomoy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition hover:text-cyan-400">
              GitHub
            </a>

            <a href="https://linkedin.com/in/vicenzomoy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition hover:text-cyan-400">
              LinkedIn
            </a>

            <a href="mailto:vicenzomoy@gmail.com" className="text-gray-400 transition hover:text-cyan-400">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
