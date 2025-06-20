import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "../../app/components/Navigation";
import HeroSection from "../../app/components/HeroSection";
import AboutSection from "../../app/components/AboutSection";
import Footer from "../../app/components/Footer";

describe("Component Integration Tests", () => {
  describe("Navigation", () => {
    it("renders navigation with correct links", () => {
      render(<Navigation />);

      expect(screen.getByText("Lost Keepers")).toBeTruthy();
      expect(screen.getByText("About")).toBeTruthy();
      expect(screen.getByText("Gallery")).toBeTruthy();
      expect(screen.getByText("Game Info")).toBeTruthy();
    });
  });

  describe("HeroSection", () => {
    it("renders hero content", () => {
      render(<HeroSection />);

      expect(screen.getByText("LOST KEEPERS")).toBeTruthy();
      expect(screen.getByText(/An epic puzzle adventure/)).toBeTruthy();
      expect(screen.getByText("Coming Fall 2025")).toBeTruthy();
    });
  });

  describe("AboutSection", () => {
    it("renders about content", () => {
      render(<AboutSection />);

      expect(screen.getByText(/Embark on an/)).toBeTruthy();
      expect(screen.getByText("Immersive World")).toBeTruthy();
      expect(screen.getByText("Epic Characters")).toBeTruthy();
      expect(screen.getByText("Mind-Bending Puzzles")).toBeTruthy();
    });
  });

  describe("Footer", () => {
    it("renders footer content", () => {
      render(<Footer />);

      expect(screen.getByText("Lost Keepers")).toBeTruthy();
      expect(
        screen.getByText("An epic adventure coming Fall 2025")
      ).toBeTruthy();
      expect(screen.getByText("©2025 Lost Keepers Game")).toBeTruthy();
    });
  });
});
