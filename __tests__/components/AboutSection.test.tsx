import { render, screen } from "@testing-library/react";
import AboutSection from "../../app/components/AboutSection";

describe("AboutSection", () => {
  it("renders the about section title", () => {
    render(<AboutSection />);

    const title = screen.getByText(/Embark on an/);
    expect(title).toBeTruthy();
  });

  it("displays the main description", () => {
    render(<AboutSection />);

    const description = screen.getByText(
      /Lost Keepers is an immersive puzzle-adventure game/
    );
    expect(description).toBeTruthy();
  });

  it("shows feature cards", () => {
    render(<AboutSection />);

    expect(screen.getByText("Immersive World")).toBeTruthy();
    expect(screen.getByText("Epic Characters")).toBeTruthy();
    expect(screen.getByText("Mind-Bending Puzzles")).toBeTruthy();
  });

  it("has the correct section id", () => {
    render(<AboutSection />);

    const section = screen.getByRole("region");
    expect(section.id).toBe("about");
  });
});
