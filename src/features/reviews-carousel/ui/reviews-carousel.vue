<template>
    <div class="reviews-carousel">
        <v-carousel cycle height="351" :show-arrows="false" hide-delimiter-background>
            <v-carousel-item>
                <div class="review">
                    <img class="review__img" src="@/shared/img/reviewer.jpg" alt="reviewer" />
                    <rating :rating="5"></rating>

                    <p class="review__text">
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been.
                    </p>

                    <p class="review__reviewer">Sara Taylor</p>
                    <p class="review__reviewer-type">Consumer</p>
                </div>
            </v-carousel-item>

            <v-carousel-item>
                <div class="review">
                    <img class="review__img" src="@/shared/img/reviewer.jpg" alt="reviewer" />
                    <rating :rating="5"></rating>

                    <p class="review__text">
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been.
                    </p>

                    <p class="review__reviewer">Sara Taylor</p>
                    <p class="review__reviewer-type">Consumer</p>
                </div>
            </v-carousel-item>

            <v-carousel-item>
                <div class="review">
                    <img class="review__img" src="@/shared/img/reviewer.jpg" alt="reviewer" />
                    <rating :rating="5"></rating>

                    <p class="review__text">
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been.
                    </p>

                    <p class="review__reviewer">Sara Taylor</p>
                    <p class="review__reviewer-type">Consumer</p>
                </div>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script setup>
import { Rating } from '@/shared/ui/rating'
</script>

<style lang="scss" scoped>
.v-carousel {
    width: auto;
}
.review {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.review__img {
    border-radius: 50%;
    margin-bottom: 22px;
}
.rating {
    margin-bottom: 25px;
}
.rating :deep(.star) {
    width: 28px;
}
.review__text {
    max-width: 780px;
    text-align: center;
    color: var(--dark-grey-color);
    margin-bottom: 20px;
}
.review__reviewer {
    font-family: Roboto;
    font-size: 25px;
    font-weight: 600;
    line-height: 29.3px;
    color: var(--dark-blue-color);
}

$point-size: 8px;
.review__reviewer-type {
    font-family: Open Sans;
    font-size: 15px;
    font-weight: 400;
    line-height: 24.81px;
    color: var(--dark-grey-color);
    margin-bottom: 19px + $point-size;
}
:deep(.v-carousel) {
    .v-icon {
        color: #c4c4c4;
        opacity: 1;
        font-size: $point-size;
    }
    .v-btn {
        width: auto;
        height: auto;
        margin: 0;
        padding: 3px;
    }
    .v-btn--active .v-icon {
        color: var(--light-green-color);
    }
    .v-carousel__controls {
        height: $point-size;
    }
}
.v-carousel {
    margin-bottom: 102px;
}
</style>
