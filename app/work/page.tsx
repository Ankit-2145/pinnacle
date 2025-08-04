const Work = () => {
  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-slate-200 dark:border-slate-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Content */}
        <div className="relative flex flex-col justify-center items-center h-full px-8">
          <div className="text-center space-y-4">
            {/* Subtitle */}
            <p className="text-purple-300 text-sm font-medium tracking-wider uppercase">
              Portfolio
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Work
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover our latest projects and creative solutions
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
        </div>

        {/* Bottom Border Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
      </div>
    </div>
  );
};

export default Work;
