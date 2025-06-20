import Image from "next/image";

export default function AvailableSection() {
  return (
    <section className="py-20 px-4 bg-black/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-12"
          data-aos="fade-up"
        >
          Available <span className="text-purple-400">fall 2025</span> on
        </h2>

        {/* Platform */}
        <div
          className="flex justify-center mb-16"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center">
              <Image
                src="steam_logo.png"
                alt="Steam Logo"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Review Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <blockquote className="text-gray-300 mb-4 italic">
              "A captivating puzzle adventure that challenges your mind while
              telling an unforgettable story."
            </blockquote>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">
                ★★★★★
              </div>
              <div className="text-purple-400 font-semibold">Gaming Weekly</div>
            </div>
          </div>

          <div
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <blockquote className="text-gray-300 mb-4 italic">
              "Lost Keepers sets a new standard for puzzle-adventure games with
              brilliant brain teasers."
            </blockquote>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">
                9.5/10
              </div>
              <div className="text-blue-400 font-semibold">
                Game Review Plus
              </div>
            </div>
          </div>

          <div
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <blockquote className="text-gray-300 mb-4 italic">
              "Visually stunning and emotionally engaging - a must-play
              experience."
            </blockquote>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">
                ★★★★★
              </div>
              <div className="text-green-400 font-semibold">
                Indie Gaming Today
              </div>
            </div>
          </div>
        </div>

        {/* Pre-order CTA */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pre-order Now
            </h3>
            <p className="text-gray-300 mb-6">
              Be among the first to experience Lost Keepers. Pre-order now and
              receive exclusive in-game content.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-purple-500/25">
              Pre-order on Steam
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
