import { create } from "zustand";

interface UseOpenListProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useOpenList = create<UseOpenListProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useOpenList;
