<script setup>
defineProps({
    headerCenter: {
        type: String,
    }
})
</script>
<template>
    <h1 :class="headerCenter" class="max-w-7xl mx-auto mb-4 px-6 text-6xl font-bold font-new-paris-kingsize">Other Projects</h1>
    <div class="md:flex md:items-start md:space-x-12 max-w-7xl mx-auto my-20 px-6">
        <div class="md:flex-1">
            <img class="mb-4 w-full" src="../assets/other-projects-1.png" alt="Other projects">
            <div>
                <h3 class="font-new-paris-kingsize mb-4 text-2xl font-bold">Aistake finance</h3>
                <p>Staking with multiple validators on the Solana network at the same time while still having the
                    ability to stake with the community using the best validators</p>
            </div>
        </div>
        <div class="md:flex-1">
            <img class="mb-4 w-full" src="../assets/other-projects-2.png" alt="Other projects">
            <div>
                <h3 class="font-new-paris-kingsize mb-4 text-2xl font-bold">Pegasus</h3>
                <p>The easiest way for you to gain access to multiple token holdings at once by the purchase of one
                    super token </p>
            </div>
        </div>
    </div>
</template>