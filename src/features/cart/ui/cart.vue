<template>
    <div class="cart">
        <img src="@/shared/svg/cart.svg" alt="cart" />
        Cart ({{ product_model.products.length }})
    </div>
</template>

<script lang="ts" setup>
import { useProductModel } from '@/entities/product'
const product_model = useProductModel()
</script>

<style lang="scss" scoped>
.cart {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 18px;
    font-weight: 600;
    line-height: 21.09px;
    color: var(--dark-blue-color);
}
</style>
