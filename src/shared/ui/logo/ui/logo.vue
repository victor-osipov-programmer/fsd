<template>
    <router-link class="logo" :to="{ name: 'home' }">
        <img src="./logo.svg" alt="logo-img" />

        Organick
    </router-link>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 8.2px;

    font-size: 38px;
    font-weight: 700;
    line-height: 44.53px;
    color: var(--dark-blue-color);
    cursor: pointer;
}
</style>
