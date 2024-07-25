<template>
    <ul class="app-nav">
        <li v-for="link in links"><router-link :to="{ name: link.route_name }">{{ link.title }}</router-link></li>
    </ul>
</template>

<script lang="ts" setup>
import type { ILink } from '../types';

defineProps<{
    links: ILink[]
}>()
</script>

<style lang="scss" scoped>
.app-nav {
    display: flex;
    gap: 45px;

    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
    color: var(--dark-blue-color);
}
</style>
