import { render, screen, fireEvent } from "@testing-library/react";
import GallerySection from "../../app/components/GallerySection";

const mockProps = {
  selectedImage: null,
  setSelectedImage: jest.fn(),
};

describe("GallerySection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the gallery section title", () => {
    render(<GallerySection {...mockProps} />);

    const title = screen.getByText(/Game/);
    expect(title).toBeTruthy();
  });

  it("displays characters section", () => {
    render(<GallerySection {...mockProps} />);

    expect(screen.getByText("Characters")).toBeTruthy();
  });

  it("displays environments section", () => {
    render(<GallerySection {...mockProps} />);

    expect(screen.getByText("Environments")).toBeTruthy();
  });

  it("displays video showcase section", () => {
    render(<GallerySection {...mockProps} />);

    expect(screen.getByText("Environment Showcase")).toBeTruthy();
  });

  it("calls setSelectedImage when image is clicked", () => {
    render(<GallerySection {...mockProps} />);

    const characterImages = screen.getAllByAltText(/Lost Keepers Characters/);
    fireEvent.click(characterImages[0]);

    expect(mockProps.setSelectedImage).toHaveBeenCalledWith(
      "characters_1.jpeg"
    );
  });

  it("has the correct section id", () => {
    render(<GallerySection {...mockProps} />);

    const section = screen.getByRole("region");
    expect(section.id).toBe("gallery");
  });
});
