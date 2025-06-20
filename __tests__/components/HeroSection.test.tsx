import { render, screen } from "@testing-library/react";
import HeroSection from "../../app/components/HeroSection";

describe("HeroSection", () => {
  it("renders the hero section", () => {
    render(<HeroSection />);

    expect(screen.getByText("LOST KEEPERS")).toBeInTheDocument();
  });

  it("displays the main tagline", () => {
    render(<HeroSection />);

    expect(
      screen.getByText(/An epic puzzle adventure awaits/)
    ).toBeInTheDocument();
  });

  it("shows the release date", () => {
    render(<HeroSection />);

    expect(screen.getByText("Coming Fall 2025")).toBeInTheDocument();
  });

  it("renders the background image", () => {
    render(<HeroSection />);

    const backgroundImage = screen.getByAltText("Hero Background");
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute("src", "environment_concept.jpeg");
  });

  it("includes scroll indicator", () => {
    render(<HeroSection />);

    const scrollIndicator = screen.getByRole("button", {
      name: "Scroll to next section",
    });
    expect(scrollIndicator).toBeInTheDocument();
  });
});
