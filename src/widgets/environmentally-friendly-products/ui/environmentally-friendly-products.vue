<template>
    <div class="environmentally-friendly-products">
        <div class="container">
            <div class="top">
                <div class="headers">
                    <h4 class="sub-header">Offer</h4>
                    <h2 class="header">We Offer Organic For You</h2>
                </div>

                <app-button color="pale-yellow">View All Product</app-button>
            </div>

            <products :products="natural_products"></products>
        </div>
    </div>
</template>

<script setup>
import { AppButton } from '@/shared/ui/app-button'
import { Products } from '@/features/products'
import { useProductModel } from '@/entities/product'
import { ref, watch } from 'vue'

const product_model = useProductModel()
const natural_products = ref([])

watch(
    [() => product_model.products],
    () => {
        natural_products.value = [
            product_model.products[20],
            product_model.products[22],
            product_model.products[24],
            product_model.products[29]
        ]
    },
    {
        once: true
    }
)
</script>

<style lang="scss" scoped>
.environmentally-friendly-products {
    background-color: var(--dark-blue-color);
    padding-block: 201px;
}
.sub-header {
    font-family: Yellowtail;
    color: var(--light-green-color);
    margin-bottom: 8px;
}
.header {
    color: white;
}
.top {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 50px;
}
</style>
