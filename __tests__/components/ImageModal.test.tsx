import { render, screen, fireEvent } from "@testing-library/react";
import ImageModal from "../../app/components/ImageModal";

const mockProps = {
  selectedImage: "test-image.jpg",
  setSelectedImage: jest.fn(),
};

describe("ImageModal", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders when selectedImage is provided", () => {
    render(<ImageModal {...mockProps} />);

    const modal = screen.getByRole("dialog");
    expect(modal).toBeTruthy();
  });

  it("does not render when selectedImage is null", () => {
    render(
      <ImageModal
        selectedImage={null}
        setSelectedImage={mockProps.setSelectedImage}
      />
    );

    const modal = screen.queryByRole("dialog", { hidden: true });
    expect(modal).toBeNull();
  });

  it("displays the selected image", () => {
    render(<ImageModal {...mockProps} />);

    const image = screen.getByAltText("Gallery Image");
    expect(image).toBeTruthy();
    expect(image.getAttribute("src")).toBe("test-image.jpg");
  });

  it("calls setSelectedImage with null when close button is clicked", () => {
    render(<ImageModal {...mockProps} />);

    const closeButton = screen.getByText("×");
    fireEvent.click(closeButton);

    expect(mockProps.setSelectedImage).toHaveBeenCalledWith(null);
  });

  it("calls setSelectedImage with null when backdrop is clicked", () => {
    render(<ImageModal {...mockProps} />);

    const backdrop = screen.getByRole("dialog");
    fireEvent.click(backdrop);

    expect(mockProps.setSelectedImage).toHaveBeenCalledWith(null);
  });
});
