import { render, screen } from "@testing-library/react";
import Navigation from "../../app/components/Navigation";

describe("Navigation", () => {
  it("renders the navigation component", () => {
    render(<Navigation />);

    expect(screen.getByText("Lost Keepers")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navigation />);

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Game Info")).toBeInTheDocument();
  });

  it("has correct href attributes for navigation links", () => {
    render(<Navigation />);

    const aboutLink = screen.getByText("About").closest("a");
    const galleryLink = screen.getByText("Gallery").closest("a");
    const gameInfoLink = screen.getByText("Game Info").closest("a");

    expect(aboutLink).toHaveAttribute("href", "#about");
    expect(galleryLink).toHaveAttribute("href", "#gallery");
    expect(gameInfoLink).toHaveAttribute("href", "#info");
  });

  it("applies correct CSS classes", () => {
    render(<Navigation />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("fixed", "top-0", "w-full", "z-50");
  });
});
