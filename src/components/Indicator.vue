<template>
    <div class="flex space-x-1 md:space-x-4 items-center">
        <button
            v-for="(_, index) in elements"
            @click="showElement(index)"
            :key="index"
            class="flex-1 py-4 focus:outline-none"
        >
            <div
                :class="currentElementIndex === index ? 'border-gray-200 dark:border-gray-600 cursor-default' : 'border-gray-500 dark:border-gray-300'"
                class="transition-all duration-500 ease-in border-b-4 h-0"
            ></div>
        </button>
    </div>
</template>

<script>
export default {
    name: "Indicator",
    props: { elements: Array, currentElementIndex: Number, showElement: Function }
}
</script>