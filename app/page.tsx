"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AvailableSection from "./components/AvailableSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import GameInfoSection from "./components/GameInfoSection";
import Footer from "./components/Footer";
import ImageModal from "./components/ImageModal";

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

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <HeroSection />
      <AvailableSection />
      <AboutSection />
      <GallerySection
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <GameInfoSection />
      <Footer />
      <ImageModal
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </main>
  );
}
