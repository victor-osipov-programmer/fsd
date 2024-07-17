<template>
    <div class="products">
        <product-card v-for="product in products" :product></product-card>
    </div>
</template>

<script lang="ts" setup>
import { ProductCard, type IProduct } from '@/entities/product'

defineProps<{
    products: IProduct[]
}>()
</script>

<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
</style>
