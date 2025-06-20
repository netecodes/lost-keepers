export default function GameInfoSection() {
  return (
    <section id="info" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Game <span className="text-purple-400">Information</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">
              Release Details
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-400">Release Date:</span>
                <span className="text-white">Fall 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Platform:</span>
                <span className="text-white">Steam (PC)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Genre:</span>
                <span className="text-white">Puzzle Adventure</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Players:</span>
                <span className="text-white">Single Player</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Development
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-400">Engine:</span>
                <span className="text-white">Unreal Engine</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400">In Development</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Art Style:</span>
                <span className="text-white">Fantasy Realism</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">World:</span>
                <span className="text-white">Open Exploration</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-lg p-8 border border-purple-400/20">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-6">
            Follow our development journey and be the first to know about new
            updates, behind-the-scenes content, and release announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Follow on Twitter
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Join Discord
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
