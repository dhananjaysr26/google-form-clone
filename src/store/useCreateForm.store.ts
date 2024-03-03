import { create } from "zustand";

interface CreateFormStore {
  isTypeChange: boolean;
  setIsTypeChange: () => void;
}

const useCreateFormStore = create<CreateFormStore>((set) => ({
  isTypeChange: false,
  setIsTypeChange: () =>
    set((state) => ({ isTypeChange: !state.isTypeChange })),
}));

export default useCreateFormStore;
