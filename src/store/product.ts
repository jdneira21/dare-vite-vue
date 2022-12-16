import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {

  state: () => ({
    product: {},
    products: [],
    lastId: ''
  }),

  getters: {
    getProducts(state) {
      return state.products
    },

    getProduct(state) {
      return state.product
    },

    getLastId(state) {
      return state.lastId
    },
  },

  actions: {
    storeProduct(product) {
      this.products.push(product)
    },

    storeObjectProduct(product) {
      this.product = product
    },

    storelastId(lastId) {
      this.lastId = lastId
    },

  }

})