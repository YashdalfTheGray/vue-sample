<template>
    <md-content id="beer-grid" class="beer-list" v-cloak>
        <beer-card></beer-card>
        <beer-card></beer-card>
        <pre>
            {{beers}}
        </pre>
    </md-content>
</template>

<script>
import BeerCard from './BeerCard.vue';

export default {
    name: 'beer-grid',
    props: ['beers'],
    components: {
        BeerCard
    }
};
</script>

<style scoped>
    .beer-list > * + * {
        margin-top: 8px;
    }
    [v-cloak] {
        display: none;
    }
</style>
