import { create } from "zustand";

interface Orders {
    orderIds: string[];
    addOrder: (orderId: string) => void;
}

const useGlobalStore = create<Orders>()((set) => ({
    orderIds: [],
    addOrder: (orderId) =>
        set((state) => ({ orderIds: [...state.orderIds, orderId] })),
}));

export default useGlobalStore;
