<template>
    <div class="mb-6">
        <img class="h-full w-full mr-auto" :src="img" alt="Survey photo" />
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        img: {
            type: String,
            required: true
        }
    }
}
</script>