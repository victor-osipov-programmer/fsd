<template>
    <div class="home-page">
        Home page
        <app-button color="pale-yellow">Default Button</app-button>

        <Suspense>
            <cart />

            <template #fallback> Loading... </template>
        </Suspense>

        <quote
            >“The first rule of any organic used in a business is that nature applied to an
            efficient operation will magnify the efficiency. The second is that organic applied to
            an inefficient operation will magnify the health.”</quote
        >

        <h1>123</h1>
        <h1>123</h1>

        <p>
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley.established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed.
        </p>

        <ol>
            <li>Publishing packages and web pageLorem Ipsum as their default</li>
            <li>Content here, content here', making it look like readable</li>
            <li>Packages and web pageLorem Ipsum as their default</li>
        </ol>
    </div>
</template>

<script setup>
import { AppButton } from '@/shared/ui/app-button'
import { Quote } from '@/shared/ui/quote'
import { Cart } from '@/features/cart'
import { useProductModel } from '@/entities/product'

const product_model = useProductModel()
product_model.fetchProducts()
</script>

<style lang="scss" scoped></style>
