<template>
    <div class="news">
        <div class="container">
            <div class="news__header">
                <div class="headers">
                    <h4 class="sub-header">News</h4>
                    <h2 class="header">Discover weekly content about organic food, & more</h2>
                </div>

                <app-button color="white">More News</app-button>
            </div>

            <div class="news__container">
                <div class="new">
                    <div class="new__date">25<br /><span class="date__month">Nov</span></div>

                    <div class="new__content">
                        <p class="new__author">
                            <img src="@/shared/svg/people.svg" alt="people" />
                            By Rachi Card
                        </p>

                        <h6 class="new__title">The Benefits of Vitamin D & How to Get It</h6>
                        <p class="new__description">
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>

                        <app-button color="pale-yellow">Read More</app-button>
                    </div>
                </div>

                <div class="new">
                    <div class="new__date">25<br /><span class="date__month">Nov</span></div>

                    <div class="new__content">
                        <p class="new__author">
                            <img src="@/shared/svg/people.svg" alt="people" />
                            By Rachi Card
                        </p>

                        <h6 class="new__title">Our Favourite Summertime Tommeto</h6>
                        <p class="new__description">
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>

                        <app-button color="pale-yellow">Read More</app-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { AppButton } from '@/shared/ui/app-button'
</script>

<style lang="scss" scoped>
.news {
    padding-top: 171px;
    padding-bottom: 185px;
}
.news__header {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 49px;
}
.sub-header {
    font-family: Yellowtail;
    color: var(--light-green-color);
    margin-bottom: 8px;
}
.header {
    max-width: 702px;
}
.new {
    max-height: 524px;
    border-radius: 30px;
    padding: 43px 32px 0;
}
.new:nth-of-type(1) {
    background-image: url('@/shared/img/greenery.png');
}
.new:nth-of-type(2) {
    background-image: url('@/shared/img/tomatoes.png');
}
.news__container {
    display: flex;
    justify-content: space-between;
    gap: 46px;
}
.new__content {
    padding: 46px 57px 60px 57px;
    border-radius: 31px 34px 30px 30px;
    background-color: white;
    box-shadow: 0px 20px 35px 0px #a7a7a740;
}
.new__author {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;

    color: var(--dark-blue-color);
    font-family: Roboto;
    line-height: 21.09px;
}
.new__title {
    margin-bottom: 2px;
}
.new__description {
    margin-bottom: 15px;
}
.new__date {
    width: 82px;
    height: 82px;
    border-radius: 50%;
    background-color: white;
    padding: 15px 23px 16px;
    text-align: center;
    margin-bottom: 137px;

    font-family: Roboto;
    font-size: 25px;
    font-weight: 800;
    color: var(--dark-blue-color);
    line-height: 1;
}
.date__month {
    font-size: 20px;
}
</style>
