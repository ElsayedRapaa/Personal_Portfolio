import { create } from "zustand";

interface UseDarkModeProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDarkMode = create<UseDarkModeProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useDarkMode;
