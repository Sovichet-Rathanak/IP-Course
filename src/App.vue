<template>
  <div class="cat_container">
    <Category v-for="product in products" key="product.label" 
      :image="product.image"
      :name="product.name"
      :quantity="product.productCount"
      :color="product.color"
      :border_color="product.color"
    />
  </div>

  <div class="promo_container">
    <Promotion v-for="promo in promos" key="promo.label"
      :image="promo.image"
      :title="promo.title"
      :color="promo.color"
      :border_color="promo.color"
    />
  </div>
</template>

<script>
import axios from 'axios';
import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';

export default {
  components: {
    Category,
    Promotion
  },
  data() {
    return {
      products: [],
      promos: [] 
    };
  },
  mounted(){
    // fetch data from backend
    this.fetchCat();
    this.fetchPromo();
  },
  methods:{
    fetchCat(){
      axios.get("http://localhost:3000/api/categories").then(result => {
        this.products = result.data;
        console.log(result.data);
      });
    },
    fetchPromo(){
      axios.get("http://localhost:3000/api/promotions").then(result =>{
        this.promos = result.data; 
      })
    }
  }
};
</script>