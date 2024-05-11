import { create } from "zustand";

// eslint-disable-next-line no-unused-vars
const UseConversation = create((set, get) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default UseConversation;
