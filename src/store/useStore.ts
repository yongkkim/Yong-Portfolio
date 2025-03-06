import { create } from "zustand";

interface StoreState {
  isClicked: boolean;
  popupContent: { imgSrc: string; imgAlt: string; text: string } | null;
  sectionIndex: number;
  isVisibleSections: Record<string, boolean>;
  toggleIsClicked: (content?: {
    imgSrc: string;
    imgAlt: string;
    text: string;
  }) => void;
  setSectionIndex: (updater: (prevIndex: number) => number) => void;
  setSectionVisible: (sectionId: string, visible: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  isClicked: false,
  popupContent: null,
  sectionIndex: 0,
  isVisibleSections: {} as Record<string, boolean>,

  toggleIsClicked: (content) =>
    set((state: StoreState) => ({
      isClicked: !state.isClicked,
      popupContent: content ?? null, // Update popup content
    })),
  setSectionIndex: (updater) =>
    set((state) => ({
      sectionIndex: updater(state.sectionIndex),
    })),
  setSectionVisible: (sectionId, visible) =>
    set((state) => ({
      isVisibleSections: { ...state.isVisibleSections, [sectionId]: visible },
    })),
}));
