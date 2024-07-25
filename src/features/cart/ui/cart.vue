<template>
    <div class="cart">
        <img class="list__img" src="@/shared/svg/cart.svg" alt="cart" />
        <span class="cart__text">Cart ({{ product_model.products.length }})</span>
    </div>
</template>

<script lang="ts" setup>
import { useProductModel } from '@/entities/product'
const product_model = useProductModel()
</script>

<style lang="scss" scoped>
.cart {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 5px 24px 5px 6px;

    border-radius: 33px;
    border: 1px solid #c5c5c5;

    font-size: 18px;
    font-weight: 600;
    line-height: 21.09px;
    color: var(--dark-blue-color);
}
.list__img {
    cursor: pointer;
}
@media (width < 1200px) {
    .cart {
        padding: 5px 6px;
    }
    .cart__text {
        display: none;
    }
}
</style>
