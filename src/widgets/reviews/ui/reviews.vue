<template>
    <div class="reviews">
        <h4 class="sub-header">Testimonial</h4>
        <h2 class="header">What Our Customer Saying?</h2>

        <reviews-carousel></reviews-carousel>
        <!-- <v-carousel height="400" show-arrows="hover" cycle  hide-delimiter-background>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%">
                    <div class="d-flex fill-height justify-center align-center">
                        <div class="text-h2">{{ slide }} Slide</div>
                    </div>
                </v-sheet>
            </v-carousel-item>
        </v-carousel> -->

        <hr class="line" />

        <div class="statistics">
            <div class="statistics__item">
                <p class="statistics__value">100%</p>
                <p class="statistics__title">Organic</p>
            </div>
            <div class="statistics__item">
                <p class="statistics__value">285</p>
                <p class="statistics__title">Active Product</p>
            </div>
            <div class="statistics__item">
                <p class="statistics__value">350+</p>
                <p class="statistics__title">Organic Orchads</p>
            </div>
            <div class="statistics__item">
                <p class="statistics__value">25+</p>
                <p class="statistics__title">Years of Farming</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ReviewsCarousel } from '@/features/reviews-carousel'
import { ref } from 'vue'

const colors = ref(['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'])
const slides = ref(['First', 'Second', 'Third', 'Fourth', 'Fifth'])
</script>

<style lang="scss" scoped>
.v-carousel {
    width: auto;
}

.reviews {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('@/shared/img/white_background_lemons_sides.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding-block: 165px;
}
.sub-header {
    font-family: Yellowtail;
    font-size: 36px;
    font-weight: 400;
    line-height: 49.06px;
    text-align: left;
    color: var(--light-green-color);
    margin-bottom: 8px;
}
.header {
    margin-bottom: 51px;
}
.line {
    margin-bottom: 102px;
    border-color: #e0e0e0;
    width: 1108px;
}
.statistics {
    display: flex;
    gap: 62px;
}
.statistics__item {
    width: 211px;
    height: 211px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    border-radius: 50%;
    border: 4px solid var(--light-green-color);
    padding: 7px;
    background-clip: content-box;
}
.statistics__value {
    font-family: Roboto;
    font-size: 50px;
    font-weight: 800;
    line-height: 58.59px;
    color: var(--dark-blue-color);
}
.statistics__title {
    font-weight: 600;
    margin-top: -7px;
    color: var(--dark-blue-color);
}
</style>
