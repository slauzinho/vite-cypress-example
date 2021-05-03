import { defineStore } from 'pinia';

interface MainStoreState {
  counter: number;
  name: string;
}

export const useMainStore = defineStore({
  // name of the store
  // it is used in devtools and allows restoring state
  id: 'main',
  // a function that returns a fresh state
  state: (): MainStoreState => ({
    counter: 0,
    name: 'Eduardo',
  }),
  getters: {
    doubleCount() {
      return this.counter * 2;
    },
    doubleCountPlusOne() {
      return this.doubleCount * 2 + 1;
    },
  },
  actions: {
    reset() {
      this.counter = 0;
    },
    increment() {
      this.counter++;
    },
  },
});
