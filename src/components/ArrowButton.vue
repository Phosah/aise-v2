<template>
    <button
        class="btn rounded-full p-2 bg-white border dark:border-brand-black-1 transition-all duration-500 ease-in"
    >
        <img
            class="transparent opacity-75 h-6"
            :src="img"
            :alt="arrowType + ' arrow'"
        />
    </button>
</template>

<script>
export default {
    name: "ArrowButton",
    props: {
        arrowType: String,
        img: String,
    },
}
</script>

<style scoped>
.btn:disabled {
    opacity: 0.25;
}
</style>