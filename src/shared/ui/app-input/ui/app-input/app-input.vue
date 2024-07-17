<template>
    <input class="app-input" v-model="model" type="text" />
</template>

<script setup>
const model = defineModel()
</script>

<style lang="scss" scoped>
.app-input {
    width: 349px;
    height: 80px;
    border-radius: 16px;
    background-color: white;
    padding: 28px 23px 31px;

    font-family: Roboto;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 21.09px;
}
.app-input::placeholder {
    color: #ababab;
}
.app-input:focus {
    outline: none;
}
</style>
