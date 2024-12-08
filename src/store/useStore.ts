import { create } from 'zustand';
import type { User, Message } from '../types';

interface Store {
  user: User | null;
  messages: Message[];
  setUser: (user: User | null) => void;
  addMessage: (message: Message) => void;
  updateSubscription: (subscription: User['subscription']) => void;
  decrementViews: () => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  messages: [],
  setUser: (user) => set({ user }),
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
  updateSubscription: (subscription) => set((state) => ({
    user: state.user ? {
      ...state.user,
      subscription,
      trialStartDate: subscription === 'free' ? new Date() : state.user.trialStartDate,
      monthlyViewsLeft: subscription === 'free' ? 5 : undefined
    } : null
  })),
  decrementViews: () => set((state) => ({
    user: state.user && state.user.monthlyViewsLeft !== undefined ? {
      ...state.user,
      monthlyViewsLeft: Math.max(0, state.user.monthlyViewsLeft - 1)
    } : state.user
  }))
}));