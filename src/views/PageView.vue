<template>
    <div>
      <h1>Welcome to, {{ pageContent.title }}!</h1>
      <hr>
      <router-view/>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pages: {
          page1: { title: 'Page 1' },
          page2: { title: 'Page 2' },
          page3: { title: 'Page 3' },
        },
      };
    },
    computed: {
      pageContent() {
        return this.pages[this.$route.params.pageNumber] || { title: 'Page Not Found' };
      },
    },
  };
  </script>
  