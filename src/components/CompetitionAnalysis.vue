<template>
    <div class="mb-32">
        <div v-if="analysis.title" class="flex items-center space-x-4 mb-10 px-4">
            <h3 class="text-xl md:text-2xl lg:text-3xl font-bold font-playfair">{{ analysis.title }}</h3>
            <div class="h-8 border-r-2 border-brand-black-4 dark:border-white"></div>
            <h3 class="text-xl md:text-2xl lg:text-3xl font-bold font-playfair">Competitive Analysis</h3>
        </div>
        <div class="md:flex md:items-center md:space-x-10 mb-10 text-sm">
            <div class="md:flex-1 px-4">
                <div class="mb-8">
                    <h4
                        class="mb-4 text-lg md:text-xl lg:text-2xl font-bold"
                    >{{ analysis.overview }}</h4>
                    <p>{{ analysis.overviewMessage }}</p>
                </div>
                <div class="mb-8">
                    <h4
                        class="mb-4 text-lg md:text-xl lg:text-2xl font-bold"
                    >{{ analysis.objectives }}</h4>
                    <ul
                        v-for="(item, index) in analysis.objectivesItems"
                        :key="index"
                        class="list-disc pl-6"
                    >
                        <li class="mb-1">{{ item }}</li>
                    </ul>
                </div>
                <div class="mb-8">
                    <h4
                        class="mb-4 text-lg md:text-xl lg:text-2xl font-bold"
                    >{{ analysis.advantages }}</h4>
                    <ul
                        v-for="(item, index) in analysis.advantagesList"
                        :key="index"
                        class="list-disc pl-6"
                    >
                        <li class="mb-1">{{ item }}</li>
                    </ul>
                </div>
                <div v-if="analysis.position" class="mb-8">
                    <h4
                        class="mb-4 text-lg md:text-xl lg:text-2xl font-bold"
                    >{{ analysis.position }}</h4>

                    <ul
                        v-for="(item, index) in analysis.positioningList"
                        :key="index"
                        class="list-disc pl-6"
                    >
                        <li class="mb-1">{{ item }}</li>
                    </ul>
                </div>
            </div>
            <div class="md:flex-1">
                <img class="h-full" :src="analysis.img" :alt="analysis.alt" />
            </div>
        </div>
        <div class="md:flex md:space-x-4 px-4 text-sm">
            <div class="md:flex-1 mb-8 md:mb-0">
                <h4 class="mb-4 text-lg md:text-xl lg:text-2xl font-bold">{{ analysis.strength }}</h4>
                <ul
                    v-for="(item, index) in analysis.strengthList"
                    :key="index"
                    class="list-disc pl-6"
                >
                    <li class="mb-1">{{ item }}</li>
                </ul>
            </div>
            <div class="md:flex-1 mb-8 md:mb-0">
                <h4 class="mb-4 text-lg md:text-xl lg:text-2xl font-bold">{{ analysis.weakness }}</h4>
                <ul
                    v-for="(item, index) in analysis.weaknessList"
                    :key="index"
                    class="list-disc pl-6"
                >
                    <li class="mb-1">{{ item }}</li>
                </ul>
            </div>
            <div class="md:flex-1 mb-8 md:mb-0">
                <h4
                    class="mb-4 text-lg md:text-xl lg:text-2xl font-bold"
                >{{ analysis.opportunities }}</h4>
                <ul
                    v-for="(item, index) in analysis.opportunitiesList"
                    :key="index"
                    class="list-disc pl-6"
                >
                    <li class="mb-1">{{ item }}</li>
                </ul>
            </div>
            <div class="md:flex-1">
                <h4 class="mb-4 text-lg md:text-xl lg:text-2xl font-bold">{{ analysis.threats }}</h4>
                <ul
                    v-for="(item, index) in analysis.threatsList"
                    :key="index"
                    class="list-disc pl-6"
                >
                    <li class="mb-1">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompetitionAnalysis",
    props: {
        analysis: {
            type: Object
        }
    },
}
</script>

<style>
</style>