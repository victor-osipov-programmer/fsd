<template>
    <button class="app-button">
        <slot> </slot>

        <img src="@/shared/svg/next.svg" alt="" />
    </button>
</template>

<script lang="ts" setup>
import type { Props } from './types'
import { useStyles } from './styles'
import type { IStyles } from '@/shared/types'

const props = defineProps<Props>()
const styles: IStyles = useStyles(props)
</script>

<style lang="scss" scoped>
.app-button {
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 28px 39px 29px 39px;
    border-radius: 16px;
    border: none;
    background-color: v-bind("styles.app_button['background-color']");

    color: v-bind("styles.app_button['color']");
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
    cursor: pointer;

    border: v-bind("styles.app_button['border']");
}
</style>
