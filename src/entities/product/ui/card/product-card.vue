<template>
    <div class="product-card">
        <p class="category">
            {{ product.category }}
        </p>

        <img class="img" :src="product.thumbnail" alt="" />

        <p class="title">{{ product.title }}</p>

        <hr class="line" />

        <div class="product-card__footer">
            <div class="price-info">
                <p class="old-price">
                    ${{ getOldPrice(product.price, product.discountPercentage).toFixed(2) }}
                </p>
                <p class="price">${{ product.price }}</p>
            </div>

            <rating :rating="product.rating"></rating>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getOldPrice } from '../../lib'
import type { IProduct } from '../../types'
import { Rating } from '@/shared/ui/rating'

defineProps<{
    product: IProduct
}>()
</script>

<style lang="scss" scoped>
.product-card {
    border-radius: 30px;
    background-color: var(--white-color);
    padding: 29px 26px 16px 30px;
}
.category {
    display: inline-block;
    padding: 5px 12px 6px 12px;
    border-radius: 8px;

    font-size: 15px;
    font-weight: 600;
    line-height: 20.43px;
    background-color: var(--dark-blue-color);
    color: white;
    margin-bottom: 20px;
}
.title {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 600;
    line-height: 23.44px;
    color: var(--dark-blue-color);
    margin-bottom: 13px;
}
.line {
    margin-bottom: 6px;
    border: none;
    border-top: 1px solid #dedddd;
}
.price-info {
    display: flex;

    align-items: center;
    gap: 8px;
}
.old-price {
    font-size: 15px;
    font-weight: 600;
    line-height: 20.43px;
    color: #b8b8b8;
    text-decoration: line-through;
}
.price {
    font-weight: 700;
    line-height: 24.51px;
    color: var(--dark-blue-color);
}
.product-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
