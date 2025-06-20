export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4"
      role="region"
      aria-labelledby="about-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="about-title"
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          data-aos="fade-up"
        >
          Embark on an <span className="text-purple-400">Epic Journey</span>
        </h2>
        <p
          className="text-lg text-gray-300 mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Lost Keepers is an immersive puzzle-adventure game that combines
          stunning visuals, compelling storytelling, and innovative
          problem-solving mechanics. Explore mystical realms, uncover ancient
          secrets, and solve intricate puzzles as you join the ranks of the
          legendary Keepers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-4">
              Immersive World
            </h3>
            <p className="text-gray-400">
              Explore breathtaking environments filled with secrets and
              mysteries to uncover.
            </p>
          </div>
          <div
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Epic Characters
            </h3>
            <p className="text-gray-400">
              Meet unforgettable characters and forge alliances that will shape
              your destiny.
            </p>
          </div>
          <div
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              Mind-Bending Puzzles
            </h3>
            <p className="text-gray-400">
              Solve intricate puzzles using logic, creativity, and magical
              abilities to unlock new areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
