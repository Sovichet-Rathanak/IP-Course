<template>
  <div class="container" v-bind:style="{ backgroundColor: bg_color, borderColor: border_color }">
      <div class="sub_container">
        <div class="label">{{ label }}</div>
        <div class="btn"><ShopNowBtn></ShopNowBtn></div>
      </div>
    <img :src="img_src" alt="product_image" width="210px" height="210px">
  </div>
</template>

<script>
import ShopNowBtn from './ShopNowBtn.vue';

export default {
  props: {
    img_src: String,
    label: String,
    bg_color: String,
    border_color: String
  },
  components:{
    ShopNowBtn
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 512px;
  height: 300px;
  border-radius: 10px;
  border: 3px solid;
  margin: .5rem;
  box-shadow: 10px 5px 15px grey;
}

.container .label {
  white-space: pre-line;
  -webkit-text-stroke: .2px black;
  font-weight: bold;
  color: black;
  font-size: 1.3em;
  margin-inline: 2rem;
  font-family: "Roboto Mono", monospace;
}

.btn{
    margin: 2rem;
}

</style>
