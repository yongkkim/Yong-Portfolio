import { create } from "zustand";

interface contentObject {
  company?: string;
  position?: string;
  duration?: string;
  logo?: string;
  techStack?: Array<string>;
  description: Array<string>;
  bgColor?: string;
}

interface StoreState {
  clickedSection: string;
  isMobileMenuOpen: boolean;
  isMobile: boolean;
  popupContent: string[] | string;
  sectionIndex: number;
  isVisibleSections: Record<string, boolean>;
  clickedIndex: number | null;
  fullScreenPopup: boolean;
  popupHeight: number;
  selectedContent: contentObject;
  setFullScreenPopup: (fullScreen: boolean) => void;
  setPopupHeight: (width: number) => void;
  toggleIsClicked: (
    clickedSection: string,
    text?: string[] | string,
    index?: number | null
  ) => void;
  setSectionIndex: (updater: (prevIndex: number) => number) => void;
  setSectionVisible: (sectionId: string, visible: boolean) => void;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  setIsMobile: (mobile: boolean) => void;
  setSelectedContent: (content: contentObject) => void;
}

export const useStore = create<StoreState>((set) => ({
  clickedSection: "home",
  isMobileMenuOpen: false,
  isMobile: false,
  popupContent: "",
  sectionIndex: 0,
  isVisibleSections: {} as Record<string, boolean>,
  clickedIndex: null,
  fullScreenPopup: false,
  popupHeight: 0,
  selectedContent: {} as contentObject,

  setFullScreenPopup: (fullScreen) => set({ fullScreenPopup: fullScreen }),
  setPopupHeight: (width) => set({ popupHeight: width }),
  toggleIsClicked: (section, content, index) =>
    set(() => ({
      clickedSection: section,
      clickedIndex: index,
      popupContent: content, // Update popup content
    })),
  setSectionIndex: (updater) =>
    set((state) => ({
      sectionIndex: updater(state.sectionIndex),
    })),
  setSectionVisible: (sectionId, visible) =>
    set((state) => ({
      isVisibleSections: { ...state.isVisibleSections, [sectionId]: visible },
    })),
  setIsMobileMenuOpen: (isOpen) =>
    set({
      isMobileMenuOpen: isOpen,
    }),
  setIsMobile: (value) => set({ isMobile: value }),
  setSelectedContent: (content) => set({ selectedContent: content }),
}));
