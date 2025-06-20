import { render, screen } from "@testing-library/react";
import Footer from "../../app/components/Footer";

describe("Footer", () => {
  it("renders the footer component", () => {
    render(<Footer />);

    expect(screen.getByText("Lost Keepers")).toBeInTheDocument();
  });

  it("displays the tagline", () => {
    render(<Footer />);

    expect(
      screen.getByText("An epic adventure coming Fall 2025")
    ).toBeInTheDocument();
  });

  it("shows copyright information", () => {
    render(<Footer />);

    expect(screen.getByText("©2025 Lost Keepers Game")).toBeInTheDocument();
    expect(screen.getByText("All Rights Reserved")).toBeInTheDocument();
  });

  it("applies correct footer element", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});
