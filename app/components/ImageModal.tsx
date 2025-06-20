"use client";

import Image from "next/image";

interface ImageModalProps {
  selectedImage: string | null;
  setSelectedImage: (src: string | null) => void;
}

export default function ImageModal({
  selectedImage,
  setSelectedImage,
}: ImageModalProps) {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={() => setSelectedImage(null)}
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
        <Image
          src={selectedImage}
          alt="Gallery Image"
          fill
          className="object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
    </div>
  );
}
