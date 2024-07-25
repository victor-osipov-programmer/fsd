<template>
    <div class="app-header">
        <logo></logo>
        <app-nav :links></app-nav>




        <div class="right">
            <search></search>
            <cart></cart>

            <div class="menu">
                <v-menu location="bottom end">
                    <template v-slot:activator="{ props }">
                        <v-btn class="menu__btn" icon="mdi-dots-vertical" v-bind="props" :elevation="0"></v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="(item, i) in links" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Logo } from '@/shared/ui/logo'
import { AppNav } from '@/shared/ui/app-nav'
import { Search } from '@/features/search'
import { Cart } from '@/features/cart'
import type { ILink } from '@/shared/ui/app-nav';

const links: ILink[] = [
    {
        title: 'Home',
        route_name: 'home'
    },
    {
        title: 'About',
        route_name: 'home'
    },
    {
        title: 'Pages',
        route_name: 'home'
    },
    {
        title: 'Shop',
        route_name: 'home'
    },
    {
        title: 'Projects',
        route_name: 'home'
    },
    {
        title: 'News',
        route_name: 'home'
    },
]
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
    justify-content: end;
}
.menu {
    display: none;
}

@media (width < 1800px) {
    .app-nav {
        display: none;
    }
    .right {
        width: 100%;
    }
    .menu {
        display: flex;
        flex-direction: row-reverse;
    }
}

@media (width < 1200px) {
    .app-header {
        padding: 69px 69px;
    }
    .right {
        gap: 10px;
    }
}
@media (width < 1000px) {
    .search {
        width: 100%;

        :deep(.input) {
            width: 100%;
        }
    }
}
@media (width < 750px) {
    .app-header {
        padding: 0.5rem;
    }
    .search {
        width: auto;

        :deep(.input) {
            display: none;;
        }
    }
}
@media (width < 450px) {
    .logo :deep(.logo__text) {
        display: none;
    }
}

.v-list {
    margin-top: 1rem;
}
.menu__btn {
    border: 1px solid #c5c5c5;
}
</style>
