<template>
    <div class="cart">
        <img src="@/shared/svg/cart.svg" alt="cart">
        Cart ({{ products_count }})
    </div>
</template>

<script lang="ts" setup>
interface Props {
    products_count: number
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.cart {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 18px;
    font-weight: 600;
    line-height: 21.09px;
    color: var(--dark-blue-color)
}
</style>