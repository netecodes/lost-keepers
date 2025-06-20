"use client";

import Image from "next/image";

interface GallerySectionProps {
  selectedImage: string | null;
  setSelectedImage: (src: string | null) => void;
}

export default function GallerySection({
  selectedImage,
  setSelectedImage,
}: GallerySectionProps) {
  const characterImages = [
    { src: "characters_1.jpeg", alt: "Lost Keepers Characters 1" },
    { src: "characters_2.jpeg", alt: "Lost Keepers Characters 2" },
  ];

  const environmentImages = [
    { src: "environment_1.jpeg", alt: "Game Environment 1" },
    { src: "environment_2.jpeg", alt: "Game Environment 2" },
    { src: "environment_3.jpeg", alt: "Game Environment 3" },
    { src: "environment_concept.jpeg", alt: "Environment Concept Art" },
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-4 bg-slate-900/30"
      role="region"
      aria-labelledby="gallery-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="gallery-title"
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          data-aos="fade-up"
        >
          Game <span className="text-purple-400">Gallery</span>
        </h2>
        <p
          className="text-gray-300 text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Get a glimpse into the world of Lost Keepers
        </p>

        {/* Characters Section */}
        <div className="mb-16">
          <h3
            className="text-2xl font-semibold text-white mb-8 text-center"
            data-aos="fade-up"
          >
            Characters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {characterImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 150}`}
              >
                <div className="relative aspect-video">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environments Section */}
        <div>
          <h3
            className="text-2xl font-semibold text-white mb-8 text-center"
            data-aos="fade-up"
          >
            Environments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {environmentImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                <div className="relative aspect-video">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <h3
            className="text-2xl font-semibold text-white mb-8 text-center"
            data-aos="fade-up"
          >
            Environment Showcase
          </h3>
          <div
            className="max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
              <video
                controls
                className="w-full h-full object-cover"
                poster="/environment_concept.jpeg"
              >
                <source src="environment_reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
