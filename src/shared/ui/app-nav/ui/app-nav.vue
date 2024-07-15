<template>
    <ul class="app-nav">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'home' }">About</router-link></li>
        <li><router-link :to="{ name: 'home' }">Pages</router-link></li>
        <li><router-link :to="{ name: 'home' }">Shop</router-link></li>
        <li><router-link :to="{ name: 'home' }">Projects</router-link></li>
        <li><router-link :to="{ name: 'home' }">News</router-link></li>
    </ul>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-nav {
    display: flex;
    gap: 45px;

    list-style-type: none;
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
    color: var(--dark-blue-color);
}
</style>
