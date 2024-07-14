<template>
    <div class="nav">
        <router-link :to="{ name: 'home-page' }">Home</router-link>
        <router-link :to="{ name: 'about-page' }">About</router-link>
    </div>

    <router-view></router-view>
</template>

<style lang="scss">
.nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
