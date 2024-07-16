<template>
    <p class="quote">
        <slot> </slot>
    </p>
</template>

<script setup></script>

<style lang="scss" scoped>
.quote {
    width: 936px;
    padding: 69px 59px 69px 59px;
    border-radius: 30px;

    font-size: 20px;
    font-weight: 700;
    line-height: 33.08px;
    text-align: center;
    background-color: #f1edea;
    color: var(--dark-grey-color);
}
</style>
