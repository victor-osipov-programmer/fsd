<template>
    <div class="rating">
        <img class="star" v-for="n in 5" :key="n" src="@/shared/svg/star.svg" alt="star" />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    rating: number
}>()
</script>

<style lang="scss" scoped>
.rating {
    display: flex;
    gap: 2px;
}
</style>
