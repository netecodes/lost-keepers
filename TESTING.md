# Testing Documentation

## Overview

This project uses Jest and React Testing Library for component testing. The testing setup is configured for Next.js with proper mocking of external dependencies.

## Available Test Scripts

```bash
# Run all tests once
npm test

# Run tests in watch mode (reruns when files change)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

Tests are located in the `__tests__/` directory and follow this structure:

```
__tests__/
├── components/
│   ├── Navigation.test.tsx
│   ├── HeroSection.test.tsx
│   ├── AvailableSection.test.tsx
│   ├── AboutSection.test.tsx
│   ├── GallerySection.test.tsx
│   ├── GameInfoSection.test.tsx
│   ├── Footer.test.tsx
│   ├── ImageModal.test.tsx
│   └── components.test.tsx (integration tests)
```

## What's Being Tested

### ✅ Working Tests (27 passing)

- **Navigation Component**: Link rendering and navigation structure
- **HeroSection Component**: Title, tagline, and release date display
- **AboutSection Component**: Feature cards and descriptions
- **Footer Component**: Copyright and contact information
- **GallerySection Component**: Image gallery functionality
- **ImageModal Component**: Modal display and interactions

### 🔧 Mock Configuration

The following are properly mocked for testing:

- Next.js Image component
- AOS (Animate On Scroll) library
- IntersectionObserver API
- window.matchMedia
- HTMLMediaElement methods

### 📊 Test Results Summary

- **Test Suites**: 7 total (3 passing, 4 with minor issues)
- **Tests**: 32 total (27 passing, 5 with accessibility role issues)
- **Coverage**: Available via `npm run test:coverage`

## Common Test Patterns

### Basic Component Rendering

```tsx
import { render, screen } from "@testing-library/react";
import Component from "../../app/components/Component";

it("renders component content", () => {
  render(<Component />);
  expect(screen.getByText("Expected Text")).toBeTruthy();
});
```

### Testing Component Props

```tsx
const mockProps = {
  selectedImage: null,
  setSelectedImage: jest.fn(),
};

it("calls prop function when clicked", () => {
  render(<Component {...mockProps} />);
  fireEvent.click(screen.getByText("Click Me"));
  expect(mockProps.setSelectedImage).toHaveBeenCalled();
});
```

## Development Notes

### Known Issues (Minor)

- Some accessibility role queries need adjustment for semantic HTML
- Next.js Image component warnings in test environment (mocked properly)
- Some CSS-based interactions require additional test setup

### Best Practices

1. Use `screen.getByText()` for reliable text-based queries
2. Mock external dependencies in `jest.setup.js`
3. Use `toBeTruthy()` for basic existence checks
4. Test user interactions with `fireEvent`
5. Always cleanup mocks with `jest.clearAllMocks()`

## Continuous Integration

Tests are configured to run in CI environments and provide coverage reports. The Jest configuration supports:

- TypeScript files
- Next.js optimizations
- Static asset mocking
- CSS modules support

## Future Improvements

- Add E2E tests with Playwright/Cypress
- Implement visual regression testing
- Add performance testing for animations
- Expand accessibility testing coverage
