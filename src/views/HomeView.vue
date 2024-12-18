<template>
  <body>
    <main>
      <Banner></Banner>
      <div class="menu_container">
        <Menu title="Featured Products" :navList="groups" @change-nav="categoriesByGroup"></Menu>
      </div>

      <!-- Categories with router-link -->
      <div class="cat_container">
        <router-link
          v-for="product in categoriesByGroup"
          :key="product.label"
          :to="{ name: 'category', params: { categoryId: product.id } }"
          class="router-link"
        >
          <Category
            :image="product.image"
            :name="product.name"
            :productCount="product.productCount"
            :color="product.color"
            :border_color="product.color"
          />
        </router-link>
      </div>

      <div class="promo_container">
        <Promotion
          v-for="promo in promotions"
          :key="promo.label"
          :image="promo.image"
          :title="promo.title"
          :color="promo.color"
          :border_color="promo.color"
        />
      </div>

      <div class="menu_container">
        <Menu title="Popular Products" :navList="groups" @change-nav="changeProductGroup"></Menu>
      </div>

      <!-- Popular Products with router-link -->
      <div class="popproduct_container">
        <router-link
          v-for="prod in productsByGroup"
          :key="prod.name"
          :to="{ name: 'product', params: { productId: prod.id } }"
          class="router-link"
        >
          <PopularProduct
            :image="prod.image"
            :name="prod.name"
            :rating="prod.rating"
            :size="prod.size"
            :price="prod.price"
            :group="prod.group"
          />
        </router-link>
      </div>
    </main>
  </body>
</template>

<script>
import axios from "axios";
import useProductStore from "../stores/product.js";
import Category from "../components/Category.vue";
import Promotion from "../components/Promotion.vue";
import PopularProduct from "../components/PopularProduct.vue";
import { mapState } from "pinia";
import Menu from "../components/Menu.vue";
import Banner from "@/components/Banner.vue";

export default {
  setup() {
    const store = useProductStore();
    return {
      store,
      currentGroupName: "Fruits"
    };
  },
  components: {
    Category,
    Promotion,
    PopularProduct,
    Menu,
    Banner
  },
  async mounted() {
    // fetch data from backend
    await this.store.fetchCategories();
    await this.store.fetchPromotions();
    await this.store.fetchProducts();
    await this.store.fetchGroup();
    console.log(this.store.groups);
  },
  computed: {
    ...mapState(useProductStore, {
      groups: "groups",
      categories: "categories",
      products: "products",
      promotions: "promotions",
      popProducts: "getPopularProducts",
      categoriesByGroup(store) {
        return store.getCategoriesByGroup(this.currentGroupName);
      },
      productsByGroup(store) {
        return store.getProductsByGroup();
      },
      productsByCategory(store) {
        return store.getProductsByCategory(this.currentGroupName);
      },
    }),
  },
  methods: {
    changeProductGroup(nav) {
      this.store.currProductGroup = nav;
    },
  }
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

body {
  padding-inline: 3rem;
}

/* Router link styling */
.router-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>
