<template>
    <div class="call-healthier-way-life">
        <div class="container">
            <h4 class="sub-header">100% Natural Food</h4>
            <h1 class="list__header">
                Choose the best healthier way <br />
                of life
            </h1>

            <app-button color="pale-yellow">Explore Now</app-button>
        </div>
    </div>
</template>

<script setup>
import { AppButton } from '@/shared/ui/app-button'
</script>

<style lang="scss" scoped>
.call-healthier-way-life {
    padding-block: 247px;
    background-image: url('src/shared/img/food_white-table.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.sub-header {
    color: var(--light-green-color);
    font-family: Yellowtail;
    margin-bottom: 8px;
}
.list__header {
    width: 530px;
    margin-bottom: 23px;
}
</style>
