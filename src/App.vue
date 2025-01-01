<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>

  <body>
    <nav>
      <SidebarComponent></SidebarComponent>
    </nav>
    <h1>{{ currentPage }}</h1>
    <div class="router-container">
      <router-view></router-view>
      <span v-for="(msg, index) in pageMessages" :key="index">
        Message from {{ msg.page }}: {{ msg.message }}
      </span>
      <form class="message-form" @submit.prevent="saveMessage">
        <label for="msg-input">Message</label>
        <input class="msg-input" type="text" v-model="message">
        <button type="submit">Save</button>
      </form>
    </div>
  </body>
  <footer>
    <h1>Footer</h1>
  </footer>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import { useMessageStore } from '@/store/messageStore.js';

export default {
  data() {
    return {
      message: '',
    };
  },
  components: {
    HeaderComponent,
    SidebarComponent,
  },
  computed: {
    pageMessages() {
      const store = useMessageStore();
      return store.getMessages(this.$route.params.pageNumber);
    },
  },
  methods: {
    saveMessage() {
      const store = useMessageStore();
      store.setMessage(this.$route.params.pageNumber, this.message);
      this.message = '';
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  flex-direction: row;
}

footer {
  width: auto;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.router-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.message-form {
  font-family: 'Inter';
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.message-form button {
  background-color: white;
  border: 1px solid black;
  height: 25px;
  border-radius: 5px;
}
</style>
