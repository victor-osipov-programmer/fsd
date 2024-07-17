<template>
    <div class="subscribe-form">
        <div class="container subscribe-form__container">
            <h2 class="header">Subscribe to our Newsletter</h2>

            <div class="controls">
                <app-input v-bind="email" placeholder="Your Email Address"></app-input>
                <app-button>Subscribe</app-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { AppInput } from '@/shared/ui/app-input'
import { ref } from 'vue'
import { AppButton } from '@/shared/ui/app-button'

const email = ref('')
</script>

<style lang="scss" scoped>
.subscribe-form {
    padding-bottom: 117px;
}
.subscribe-form__container {
    background-image: url('@/shared/img/blue_oranges.jpg');
    border-radius: 30px;
    padding: 105px 71px;
    display: flex;
    background-size: cover;
    justify-content: space-between;
    align-items: center;
}
.header {
    max-width: 357px;
    color: white;
}

.controls {
    display: flex;
    align-items: center;
    gap: 6px;
}
.app-button {
    padding: 28px 47px 29px 47px;
}
:deep(.app-button__img) {
    display: none;
}
</style>
