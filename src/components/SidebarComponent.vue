<template>
    <div class="sidebar">
      <h3>Menu</h3>
      <div class="button-container">
        <router-link class="button" v-for="section in sections" :key="section.id"
        :to="`/${$route.params.pageNumber}/section/${section.id}`">
          {{ section.name }}
        </router-link>
      </div>
    </div>
</template>

<script>

export default{
  data(){
    return{
      sections:[
        {id: 'section1', name: 'Section 1'},
        {id: 'section2', name: 'Section 2'},
        {id: 'section3', name: 'Section 3'},
        {id: 'section4', name: 'Section 4'},
      ]
    }
  }
}
</script>

<style scoped>
    .sidebar{
    width: fit-content;
    height: 80vh;
    border: 1px solid black;
    border-bottom: 0;
    border-top: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .button{
      border: 1px solid black;
      width: 300px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: black;
      font-weight: 500;
    }
</style>