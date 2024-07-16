<template>
    <div class="our-products">
        <div class="container">
            <div class="headers">
                <h4 class="sub-header">Categories</h4>
                <h2 class="header">Our Products</h2>
            </div>

            <products></products>

            <app-button>Load More</app-button>
        </div>
    </div>
</template>

<script setup>
import { Products } from '@/features/products'
import { AppButton } from '@/shared/ui/app-button'
</script>

<style lang="scss" scoped>
.our-products {
    padding-top: 176px;
    padding-bottom: 201px;
}
.sub-header {
    font-family: Yellowtail;
    color: var(--light-green-color);
    text-align: center;
    margin-bottom: 8px;
}
.header {
    text-align: center;
    margin-bottom: 40px;
}
.products {
    margin-bottom: 122px;
}
.app-button {
    margin: 0 auto;
}
</style>
