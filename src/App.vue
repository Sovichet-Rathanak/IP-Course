<template>
  <div class="menu_container">
    <Menu :title="section1" :onMilk="categoriesByGroup"></Menu>
  </div>

  <div class="cat_container">
    <Category
      v-for="product in categories"
      key="product.label"
      :image="product.image"
      :name="product.name"
      :productCount="product.productCount"
      :color="product.color"
      :border_color="product.color"
      :group="product.group"
    />
  </div>

  <div class="promo_container">
    <Promotion
      v-for="promo in promotions"
      key="promo.label"
      :image="promo.image"
      :title="promo.title"
      :color="promo.color"
      :border_color="promo.color"
    />
  </div>

  <div class="menu_container">
    <Menu :title="section2"></Menu>
  </div>

  <div class="popproduct_container">
    <PopularProduct
      v-for="prod in products"
      :image="prod.image"
      :name="prod.name"
      :rating="prod.rating"
      :size="prod.size"
      :price="prod.price"
      :group="prod.group"
    ></PopularProduct>
  </div>
</template>

<script>
import axios from "axios";
import useProductStore from "./stores/product.js";
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
import PopularProduct from "./components/PopularProduct.vue";
import { mapState } from "pinia";
import Menu from "./components/Menu.vue";

export default {
  setup() {
    const store = useProductStore();
    return {
      store,
      section1: "Featured Categories",
      section2: "Popular Products",
    };
  },
  components: {
    Category,
    Promotion,
    PopularProduct,
    Menu,
  },
  data() {
    return {};
  },
  async mounted() {
    // fetch data from backend
    await this.store.fetchCategories();
    await this.store.fetchPromotions();
    await this.store.fetchProducts();
  },
  methods: {},
  computed: {
    ...mapState(useProductStore, {
      categories: "categories",
      products: "products",
      promotions: "promotions",
      popProducts: "getPopularProducts",
    }),
    categoriesByGroup(store) {
      return this.store.getCategoriesByGroup(this.currentGroupName);
    },
    productsByGroup(store) {
      return this.store.getProductsByGroup(this.currentGroupName);
    },
    productsByCategory(store) {
      return this.store.getProductsByCategory(this.currentCategoryId);
    },
  },
};
</script>

<style scoped>
.cat_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.promo_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popproduct_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: auto;
}
</style>
