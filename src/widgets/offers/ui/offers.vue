<template>
    <div class="offers">
        <div class="container">
            <div class="offer">
                <h4 class="sub-header">Natural!!</h4>
                <h3 class="list__header">Get Garden Fresh Fruits</h3>
            </div>

            <div class="offer">
                <h4 class="sub-header">Offer!!</h4>
                <h3 class="list__header">
                    Get 10% off <br />
                    on Vegetables
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.offers {
    padding-top: 145px;
    padding-bottom: 190px;
}
.container {
    display: flex;
    gap: 34px;
}
.offer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 110px 0 110px 55px;
    flex-grow: 1;
    height: 367px;
    border-radius: 36px;
    background-repeat: no-repeat;
    background-size: cover;
}
.offer:nth-child(1) {
    background-image: url('@/shared/img/yellow_and_pink_with_food.png');
}
.offer:nth-child(2) {
    background-image: url('@/shared/img/white-with-peaches.png');
}
.list__header {
    width: 277.63px;
    color: white;
}
.sub-header {
    font-family: Yellowtail;
    color: white;
    margin-bottom: 5px;
}
.offer:nth-child(2) .sub-header {
    color: var(--light-green-color);
}
.offer:nth-child(2) .list__header {
    color: var(--dark-blue-color);
}
</style>
