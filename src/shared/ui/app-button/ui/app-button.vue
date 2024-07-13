<template>
    <button class="app-button">
        <slot>

        </slot>

        <img src="@/shared/svg/next.svg" alt="">
    </button>
</template>

<script lang="ts" setup>
import type { Props } from './types';
import { useStyles } from './styles';

const props = defineProps<Props>()
const { background_color_style, color_style, border_style } = useStyles(props);
</script>

<style lang="scss" scoped>
.app-button {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    padding: 28px 39px 29px 39px;
    border-radius: 16px;
    border: none;
    background-color: v-bind(background_color_style);

    color: v-bind(color_style);
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
    cursor: pointer;

    border: v-bind(border_style);
}
</style>