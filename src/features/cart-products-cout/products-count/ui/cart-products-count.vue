<template>
    <Cart :products_count="count"></Cart>
</template>

<script setup>
import { Cart } from '@/entities/cart';
import { getProductsCount } from '../api';
import { ref } from 'vue';

const count = ref(null)
count.value = await getProductsCount();
</script>

<style lang="scss" scoped>

</style>