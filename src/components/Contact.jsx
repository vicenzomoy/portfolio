function Contact() {
  return (
    <section id="contact" className="bg-gray-950 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Contact Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-16 text-center sm:px-12">
          {/* Background Decoration */}
          <div className="absolute left-1/2 top-0 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            {/* Section Label */}
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Get In Touch</p>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">Let's Connect</h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              I'm currently open to internship opportunities, collaborations, and new learning experiences. Feel free to reach out if you'd like to connect or discuss a project.
            </p>

            {/* Email Button */}
            <div className="mt-8">
              <a href="mailto:vicenzomoy@gmail.com" className="inline-flex items-center rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:bg-cyan-300">
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <a href="https://github.com/vicenzomoy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition hover:text-cyan-400">
                GitHub
              </a>

              <span className="text-gray-700">/</span>

              <a href="https://linkedin.com/in/vicenzomoy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition hover:text-cyan-400">
                LinkedIn
              </a>

              <span className="text-gray-700">/</span>

              <a href="mailto:vicenzomoy@gmail.com" className="text-gray-400 transition hover:text-cyan-400">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
