import { create } from "zustand";

interface StoreState {
  isClicked: boolean;
  popupContent: { imgSrc: string; imgAlt: string; text: string } | null;
  toggleIsClicked: (content?: {
    imgSrc: string;
    imgAlt: string;
    text: string;
  }) => void;
}

export const useStore = create<StoreState>((set) => ({
  isClicked: false,
  popupContent: null,
  toggleIsClicked: (content) =>
    set((state) => ({
      isClicked: !state.isClicked,
      popupContent: content ?? null, // Update popup content
    })),
}));
