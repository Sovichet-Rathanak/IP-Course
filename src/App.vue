<template>
  <div class="cat_container">
    <Category v-for="product in products" 
      :key="product.label" 
      :img_src="product.img_src"
      :label="product.label"
      :quantity="product.quantity"
      :bg_color="product.bg_color"
      :border_color="product.border_color"
    />
  </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
  components: {
    Category
  },
  data() {
    return {
      products: [
        {
          img_src: './src/assets/images/borga.png',
          quantity: 30,
          label: 'Burger',
          bg_color: '#eab676',
          border_color: '#e28743'
        },
        {
          img_src: './src/assets/images/peach.png',
          quantity: 30,
          label: 'Burger',
          bg_color: '#eab676',
          border_color: '#e28743'
        },
        {
          img_src: './src/assets/images/kiwi.png',
          quantity: 30,
          label: 'Burger',
          bg_color: '#eab676',
          border_color: '#e28743'
        },
        {
          img_src: './src/assets/images/apple.png',
          quantity: 30,
          label: 'Burger',
          bg_color: '#eab676',
          border_color: '#e28743'
        },
        {
          img_src: './src/assets/images/snacks.png',
          quantity: 30,
          label: 'Burger',
          bg_color: '#eab676',
          border_color: '#e28743'
        },
                {
          img_src: './src/assets/images/plums.png',
          quantity: 30,
          label: 'Burger',
          bg_color: '#eab676',
          border_color: '#e28743'
        },
        {
          img_src: './src/assets/images/vegetables.png',
          quantity: 30,
          label: 'Burger',
          bg_color: '#eab676',
          border_color: '#e28743'
        },
        {
          img_src: './src/assets/images/headphones.png',
          quantity: 30,
          label: 'Burger',
          bg_color: '#eab676',
          border_color: '#e28743'
        },
        {
          img_src: './src/assets/images/flour.png',
          quantity: 30,
          label: 'Burger',
          bg_color: '#eab676',
          border_color: '#e28743'
        },
        {
          img_src: './src/assets/images/orange.png',
          quantity: 30,
          label: 'Burger',
          bg_color: '#eab676',
          border_color: '#e28743'
        }
      ]
    };
  }
};
</script>

