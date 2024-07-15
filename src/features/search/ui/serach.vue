<template>
    <div class="search">
        <search-input v-model="input">
            <img src="@/shared/svg/search.svg" alt="" />
        </search-input>
    </div>
</template>

<script setup>
import { SearchInput } from '@/shared/ui/app-input'
import { ref } from 'vue'

const input = ref('')
</script>

<style lang="scss" scoped>
.search {
    display: block;
    max-width: 376px;
    height: 66px;
    border-radius: 36px;
    background-color: #fafafa;
    padding: 5px 6px;
}
</style>
