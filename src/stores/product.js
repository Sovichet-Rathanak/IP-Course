import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),
  getters: {
    //filter category by group
    getCategoriesByGroup: (state) => {return (groupName) => state.categories.filter((category) => category.group === groupName)},
    //filter product by group
    getProductsByGroup: (state) => {return (groupName) => state.products.filter((product) => product.group === groupName)},
    //filter by category
    getProductsByCategory: (state) => (categoryId) => {return state.products.filter((product) => product.categoryId === categoryId)},
    //filter product by popularity
    getPopularProducts: (state) => () => {return state.products.filter((product) => product.countSold > 10)},
  },
  actions: {
    async fetchCategories() {
      await axios.get("http://localhost:3000/api/categories").then((res) => {
        this.categories = res.data;
      });
    },
    async fetchPromotions() {
      await axios.get("http://localhost:3000/api/promotions").then((res) => {
        this.promotions = res.data;
      });
    },
    async fetchProducts() {
      await axios.get("http://localhost:3000/api/products").then((res) => {
        this.products = res.data;
      });
    },
  },
});

export default useProductStore;