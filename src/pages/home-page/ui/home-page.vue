<template>
    <div class="home-page">
        <app-header></app-header>
    </div>
</template>

<script setup>
import { AppHeader } from '@/widgets/app-header'
import { useProductModel } from '@/entities/product'

const product_model = useProductModel()
product_model.fetchProducts()
</script>

<style lang="scss" scoped></style>
