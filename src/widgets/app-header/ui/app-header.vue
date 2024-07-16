<template>
    <div class="app-header">
        <logo></logo>
        <app-nav></app-nav>

        <div class="right">
            <search></search>
            <cart></cart>
        </div>
    </div>
</template>

<script setup>
import { Logo } from '@/shared/ui/logo'
import { AppNav } from '@/shared/ui/app-nav'
import { Search } from '@/features/search'
import { Cart } from '@/features/cart'
</script>

<style lang="scss" scoped>
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 69px 162px;
}
.right {
    display: flex;
    gap: 18px;
    align-items: center;
}
</style>
