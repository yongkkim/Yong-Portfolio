import { create } from "zustand";

interface StoreState {
  isClicked: boolean;
  isMobileClicked: boolean;
  isMobile: boolean;
  popupContent: { imgSrc: string; imgAlt: string; text: string } | null;
  sectionIndex: number;
  isVisibleSections: Record<string, boolean>;
  clickedIndex: number | null;
  toggleIsClicked: (
    isClicked: boolean,
    index?: number | null,
    content?: {
      imgSrc: string;
      imgAlt: string;
      text: string;
    }
  ) => void;
  setSectionIndex: (updater: (prevIndex: number) => number) => void;
  setSectionVisible: (sectionId: string, visible: boolean) => void;
  setIsMobileClicked: () => void;
  setIsMobile: (mobile: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  isClicked: false,
  isMobileClicked: false,
  isMobile: false,
  popupContent: null,
  sectionIndex: 0,
  isVisibleSections: {} as Record<string, boolean>,
  clickedIndex: null,

  toggleIsClicked: (isClicked, index, content) =>
    set((state: StoreState) => ({
      isClicked: isClicked,
      clickedIndex: index,
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
  setIsMobileClicked: () =>
    set((state) => ({
      isMobileClicked: !state.isMobileClicked,
    })),
  setIsMobile: (value) => set({ isMobile: value }),
}));
