<template>
    <div class="about">
        <div class="container">
            <img class="about__img" src="@/shared/img/citrus_fruits.png" alt="" />

            <div class="content">
                <h4 class="sub-header">About Us</h4>
                <h2 class="header">We Believe in Working Accredited Farmers</h2>
                <p class="description">
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                    been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                </p>

                <ul class="list">
                    <li class="list__item">
                        <img class="list__img" src="@/shared/svg/plate_with_leaf.svg" alt="" />

                        <div class="text">
                            <h6 class="list__header">Organic Foods Only</h6>
                            <p class="list__description">
                                Simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum
                            </p>
                        </div>
                    </li>

                    <li class="list__item">
                        <img class="list__img" src="@/shared/svg/mail.svg" alt="" />

                        <div class="text">
                            <h6 class="list__header">Quality Standards</h6>
                            <p class="list__description">
                                Simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum
                            </p>
                        </div>
                    </li>
                </ul>

                <app-button>Shop Now</app-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { AppButton } from '@/shared/ui/app-button'
</script>

<style lang="scss" scoped>
.about {
    background-color: var(--white-color);
    padding-top: 87px;
    padding-bottom: 113px;
}
.container {
    display: flex;
    align-items: center;
}
.about__img {
    margin-left: -160px;
    margin-right: -53px;
}
.list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 46px;
}
.list__item {
    display: flex;
    align-items: center;
    gap: 19px;
}
.sub-header {
    font-family: Yellowtail;
    color: var(--light-green-color);
    margin-bottom: 8px;
}
.header {
    max-width: 702px;
    margin-bottom: 14px;
}
.description {
    max-width: 685px;
    margin-bottom: 46px;
}
.list__header {
    margin-bottom: 7px;
}
.list__description {
    max-width: 444px;
}
</style>
