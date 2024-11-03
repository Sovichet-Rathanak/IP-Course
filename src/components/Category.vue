<template>
  <div class="container" v-bind:style="{backgroundColor: bg_color, borderColor: border_color }">
    <img :src="img_src" alt="product_image" width="130" height="100">
    <div class="label">{{ label }}</div>
    <div class="quantity">{{ quantity }} Items</div>
  </div>
</template>

<script>
export default {
  props: {
    img_src: String,
    quantity: Number,
    label: String,
    bg_color: String,
    border_color: String
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 200px;
  border-radius: 10px;
  border: 3px solid;
  margin: .5rem;
  box-shadow: 10px 5px 15px grey;
}

.container .label{
    font-weight: bold;
    color: black;
    font-size: 1.5em;
    margin-top: 1.3rem;
    font-family: "Roboto Mono", monospace;
  }
  
.container .quantity{
    font-family: "Roboto Mono", monospace;
    color: black;
    font-size: .6rem;
    margin-top: .7rem;
}
</style>
