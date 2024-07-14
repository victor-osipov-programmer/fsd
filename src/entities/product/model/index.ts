import { defineStore } from 'pinia'
import { ProductApi } from '../index'

export const useProductModel = defineStore('product', {
    state: () => ({
        products: []
    }),
    actions: {
        async fetchProducts() {
            this.products = await ProductApi.fetchProducts()
        }
    }
})
