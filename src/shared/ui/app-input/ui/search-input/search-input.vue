<template>
    <div class="search-input">
        <input class="input" v-model="model" />

        <slot></slot>
    </div>
</template>

<script setup>
const model = defineModel()
</script>

<style lang="scss" scoped>
.search-input {
    display: flex;
}
.input {
    width: 300px;
    border: none;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: transparent;
    font-size: 1.5rem;
}
.input:focus {
    outline: none;
}
:slotted(*) {
    cursor: pointer;
}
</style>
