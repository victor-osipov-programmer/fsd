<template>
    <div class="categories">
        <div class="category">
            <a href="#" class="category__button"><h6 class="header">Organic Juice</h6></a>
        </div>
        <div class="category">
            <a href="#" class="category__button"><h6 class="header">Organic Food</h6></a>
        </div>
        <div class="category">
            <a href="#" class="category__button"><h6 class="header">Nuts Cookis</h6></a>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.categories {
    padding-block: 187px;
    background-color: #f1f8f4;
    display: flex;
    justify-content: space-between;
    gap: 42px;
}
.category {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    background-size: cover;
    // width: 612px;
    // height: 583px;
    aspect-ratio: 612 / 583;
}
.category__button {
    padding: 33px 83px 34px 83px;
    border-radius: 20px;
    background-color: white;
}
.header {
    font-weight: 500;
}
.category:nth-child(1) {
    background-image: url('@/shared/img/organic-juice.png');
}
.category:nth-child(2) {
    background-image: url('@/shared/img/organic-food.png');
}
.category:nth-child(3) {
    background-image: url('@/shared/img/organic-cookies.png');
}
</style>
