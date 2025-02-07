<template>
    <div v-if="props.isEnable" class="fp-container">
        <button class="close-button" @click="$emit('close')">X</button>
        <div class="fp-reset">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isEnable: Boolean
})
</script>

<style scoped>
.fp-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.close-button{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    border: none;
    background: transparent;
    color: white;cursor: pointer;
}

.fp-reset{
    margin-top: 3.5%;
    width: 34%;
    height: 50vh;
    border-radius: 15px;
    background-color: rgb(214, 214, 214);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
</style>