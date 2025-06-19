"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  const characterImages = [
    { src: "/characters_1.jpeg", alt: "Lost Keepers Characters 1" },
    { src: "/characters_2.jpeg", alt: "Lost Keepers Characters 2" },
  ];

  const environmentImages = [
    { src: "/environment_1.jpeg", alt: "Game Environment 1" },
    { src: "/environment_2.jpeg", alt: "Game Environment 2" },
    { src: "/environment_3.jpeg", alt: "Game Environment 3" },
    { src: "/environment_concept.jpeg", alt: "Environment Concept Art" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Lost Keepers</h1>
            <div className="flex space-x-6 text-white/80">
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#gallery" className="hover:text-white transition-colors">
                Gallery
              </a>
              <a href="#info" className="hover:text-white transition-colors">
                Game Info
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/environment_concept.jpeg"
            alt="Hero Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            LOST KEEPERS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            An epic puzzle adventure awaits in a world where logic and mystery
            intertwine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-purple-300 font-semibold">
                Coming Fall 2025
              </span>
            </div>
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-blue-300 font-semibold">
                Nintendo Switch
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-green-300 font-semibold">
                Unreal Engine
              </span>
            </div> */}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
      {/* Available Section */}
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
                  src="/steam_logo.png"
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
                <div className="text-purple-400 font-semibold">
                  Gaming Weekly
                </div>
              </div>
            </div>

            <div
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <blockquote className="text-gray-300 mb-4 italic">
                "Lost Keepers sets a new standard for puzzle-adventure games
                with brilliant brain teasers."
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
      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
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
                Meet unforgettable characters and forge alliances that will
                shape your destiny.
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2
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
                  <source src="/environment_reel.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Game Info Section */}
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
              Follow our development journey and be the first to know about The
              Lost Keepers news, updates, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Join Newsletter
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Follow Updates
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Lost Keepers</h3>
          <p className="text-gray-400 mb-6">
            An epic adventure coming Fall 2025
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <span>©2025 Lost Keepers Game</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
