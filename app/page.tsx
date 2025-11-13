export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Animated star/sparkle decoration */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 border border-slate-700/50 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-16 h-16 border border-slate-600/50 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-slate-400 rounded-full animate-pulse" />
              </div>
            </div>
            {/* Orbiting elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
              <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-slate-500 rounded-full animate-orbit" />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-slate-100">
            House <span className="font-serif italic text-slate-300">Celestre</span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto" />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
          Something extraordinary is taking shape among the stars.
          <br />
          <span className="text-sm text-slate-500 mt-2 block">
            Coming soon
          </span>
        </p>

        {/* Optional: Email signup placeholder */}
        <div className="pt-8">
          <div className="inline-flex items-center gap-2 text-sm text-slate-500 border border-slate-800 rounded-full px-6 py-3 hover:border-slate-700 transition-colors">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Stay tuned for updates</span>
          </div>
        </div>
      </div>
    </main>
  )
}
