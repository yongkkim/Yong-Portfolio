import { stat } from "fs";
import { create } from "zustand";

interface expObject {
  company: string;
  position: string;
  duration: string;
  logo: string;
  description: Array<string>;
}

interface StoreState {
  clickedSection: string;
  isMobileClicked: boolean;
  isMobile: boolean;
  popupContent: { imgSrc: string; imgAlt: string; text: string } | null;
  sectionIndex: number;
  isVisibleSections: Record<string, boolean>;
  clickedIndex: number | null;
  popupFullScreen: boolean;
  popupHeight: number;
  selectedExp: expObject;
  setPopupFullScreen: (fullScreen: boolean) => void;
  setPopupHeight: (width: number) => void;
  toggleIsClicked: (
    clickedSection: string,
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
  setSelectedExp: (exp: expObject) => void;
}

export const useStore = create<StoreState>((set) => ({
  clickedSection: "home",
  isMobileClicked: false,
  isMobile: false,
  popupContent: null,
  sectionIndex: 0,
  isVisibleSections: {} as Record<string, boolean>,
  clickedIndex: null,
  popupFullScreen: false,
  popupHeight: 0,
  selectedExp: {} as expObject,

  setPopupFullScreen: (fullScreen) => set({ popupFullScreen: fullScreen }),
  setPopupHeight: (width) => set({ popupHeight: width }),
  toggleIsClicked: (section, index, content) =>
    set((state: StoreState) => ({
      clickedSection: section,
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
  setSelectedExp: (exp) => set({ selectedExp: exp }),
}));
