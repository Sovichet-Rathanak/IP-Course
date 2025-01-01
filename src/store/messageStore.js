import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: () => ({
    messages: [], 
  }),
  actions: {
    setMessage(page, message) {
      this.messages.push({ page, message }); 
    },
    getMessages() {
      return this.messages; 
    },
  },
});
