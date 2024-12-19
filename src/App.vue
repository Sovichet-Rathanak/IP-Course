<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>

  <body>
    <div class="sidebar">
      <h3>Menu</h3>
      <div class="button" v-for="index in 4" :key="index">
        <div>Section {{ index }}</div>
      </div>
    </div>
    <router-view></router-view>
  </body>
  <footer>
    <h1>Footer</h1>
  </footer>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default{
  components:{
    HeaderComponent
  }
}
</script>

<style scoped>
body{
  display: flex;
  flex-direction: row;
}

.sidebar{
  width: fit-content;
  height: 80vh;
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar .button{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
  width: 200px;
  height: fit-content;
}

footer{
  width: auto;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

</style>