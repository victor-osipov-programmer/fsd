<template>
    <div class="eco-friendly">
        <!-- <img class="img" src="@/shared/img/eco-friendly.jpg" alt="" /> -->

        <div class="container">
            <div class="content">
                <h4 class="sub-header">Eco Friendly</h4>
                <h2 class="header">Econis is a Friendly Organic Store</h2>

                <ul class="list">
                    <li class="list__item">
                        <h6 class="list__header">Start with Our Company First</h6>
                        <p class="list__description">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                            doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </li>
                    <li class="list__item">
                        <h6 class="list__header">Learn How to Grow Yourself</h6>
                        <p class="list__description">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                            doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </li>
                    <li class="list__item">
                        <h6 class="list__header">Farming Strategies of Today</h6>
                        <p class="list__description">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                            doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.eco-friendly {
    // display: flex;
    background-image: url('@/shared/img/eco-friendly.jpg');
    background-size: contain;
    // background-position: 300px 0;
    padding-block: 105px;
}
.container {
    display: flex;
    justify-content: end;
}
.img {
}
.sub-header {
    font-family: Yellowtail;
    color: var(--light-green-color);
    margin-bottom: 8px;
}
.header {
    color: var(--dark-blue-color);
    max-width: 600px;
    margin-bottom: 35px;
}
.list__header {
    font-weight: 500;
    margin-bottom: 7px;
}
.list__description {
    max-width: 635px;
}
.content {
    padding: 78px 65px 78px 89px;
    background-color: white;
    border-radius: 30px;
}
.list__item:not(:last-child) {
    margin-bottom: 35px;
}
</style>
