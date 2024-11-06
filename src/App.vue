<template>
  <div class="cat_container">
    <Category v-for="product in products" key="product" 
      :img_src="product.img_src"
      :label="product.label"
      :quantity="product.quantity"
      :bg_color="product.bg_color"
      :border_color="product.border_color"
    />
  </div>

  <div class="promo_container">
    <Promotion v-for="promo in promos" key="promo"
      :img_src="promo.img_src"
      :label="promo.label"
      :bg_color="promo.bg_color"
      :border_color="promo.border_color"
    />
  </div>
</template>

<script>
import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';

export default {
  components: {
    Category,
    Promotion
  },
  data() {
    return {
      products: [
        {
          img_src: './src/assets/images/borga.png',
          quantity: 30,
          label: 'Burger',
          bg_color: '#f8fce4',
          border_color: '#f8fce4'
        },
        {
          img_src: './src/assets/images/peach.png',
          quantity: 20,
          label: 'Peach',
          bg_color: '#fffcec',
          border_color: '#fffcec'
        },
        {
          img_src: './src/assets/images/kiwi.png',
          quantity: 36,
          label: 'Kiwi',
          bg_color: '#ecfcec',
          border_color: '#ecfcec'
        },
        {
          img_src: './src/assets/images/apple.png',
          quantity: 20,
          label: 'Apple',
          bg_color: '#fcecec',
          border_color: '#fcecec'
        },
        {
          img_src: './src/assets/images/snack.png',
          quantity: 37,
          label: 'Snacks',
          bg_color: '#fcf4ec',
          border_color: '#fcf4ec'
        },
        {
          img_src: './src/assets/images/plum.png',
          quantity: 34,
          label: 'Plum',
          bg_color: '#fcf4fc',
          border_color: '#fcf4fc'
        },
        {
          img_src: './src/assets/images/vegetable.png',
          quantity: 12,
          label: 'Vegetables',
          bg_color: '#f4fce4',
          border_color: '#f4fce4'
        },
        {
          img_src: './src/assets/images/headphone.png',
          quantity: 33,
          label: 'Headphones',
          bg_color: '#fffcec',
          border_color: '#fffcec'
        },
        {
          img_src: './src/assets/images/cake.png',
          quantity: 23,
          label: 'Cake & Milk',
          bg_color: '#eab676',
          border_color: '#eab676'
        },
        {
          img_src: './src/assets/images/orange.png',
          quantity: 21,
          label: 'Orange',
          bg_color: '#fff4fc',
          border_color: '#fff4fc'
        }
      ],
      promos: [
        {
          img_src:'./src/assets/images/onion.png',
          label:'Everyday Fresh &\nClean with our\nProucts',
          bg_color: '#f8ecd4',
          border_color: '#f8ecd4'
        },
        {
          img_src:'./src/assets/images/strawberry.png',
          label:'Make your breakfast\nHealthy and Easy',
          bg_color: '#f4e4e4',
          border_color: '#f4e4e4'
        },
        {
          img_src:'./src/assets/images/fruitbasket.png',
          label:'The best Organic\nProducts Online',
          bg_color: '#e8ecf4',
          border_color: '#e8ecf4'
        }
      ] 
    };
  }
};
</script>

