<template>
    <div class="home-page">
        <app-header />
        <!-- <call-healthier-way-life />
        <offers />
        <about />
        <our-products />
        <reviews />
        <environmentally-friendly-products />
        <eco-friendly />
        <categories />
        <news />
        <subscribe-form />
        <app-footer /> -->
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
import { EnvironmentallyFriendlyProducts } from '@/widgets/environmentally-friendly-products'
import { EcoFriendly } from '@/widgets/eco-friendly'
import { Categories } from '@/widgets/categories'
import { News } from '@/widgets/news'
import { SubscribeForm } from '@/widgets/subscribe-form'
import { AppFooter } from '@/widgets/app-footer'

const product_model = useProductModel()
product_model.fetchProducts()
</script>

<style lang="scss" scoped></style>
