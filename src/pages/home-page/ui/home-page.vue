<template>
    <div class="home-page">
        <app-header></app-header>
        <call-healthier-way-life></call-healthier-way-life>
        <offers></offers>
        <about></about>
        <our-products></our-products>
        <reviews></reviews>
    </div>
</template>

<script setup>
import { AppHeader } from '@/widgets/app-header'
import { useProductModel } from '@/entities/product'
import { CallHealthierWayLife } from '@/widgets/call-healthier-way-life'
import { Offers } from '@/widgets/offers'
import { About } from '@/widgets/about'
import { OurProducts } from '@/widgets/our-products'
import { Reviews } from '@/widgets/reviews'

const product_model = useProductModel()
product_model.fetchProducts()
</script>

<style lang="scss" scoped></style>
