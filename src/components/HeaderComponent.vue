<template>
  <div class="header-container">
    <button>Home</button>    
    <div class="usernav">
      <router-link
        v-for="page in pages"
        :key="page.id"
        :to="`/${page.id}`"
        class="link-button"
      >
        <button>{{ page.name }}</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { id: 'page1', name: 'Page 1' },
        { id: 'page2', name: 'Page 2' },
        { id: 'page3', name: 'Page 3' },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.header-container {
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: space-between;
  border: 1px solid black;
  margin: 0;
  padding: 1rem;
}

.header-container > button {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  border: none;
  background-color: transparent;
}

.usernav {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.link-button {
  text-decoration: none;
}

.link-button button {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
