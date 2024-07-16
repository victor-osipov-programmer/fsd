<template>
    <div class="products">
        <product-card
            v-for="product in product_model.products.slice(9, 17)"
            :product
        ></product-card>
    </div>
</template>

<script setup>
import { ProductCard } from '@/entities/product'
import { useProductModel } from '@/entities/product'
const product_model = useProductModel()
</script>

<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
</style>
