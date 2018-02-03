<template>
    <md-content id="beer-grid" class="beer-list">
        <beer-card></beer-card>
        <beer-card></beer-card>
        <beer-card></beer-card>
        <beer-card></beer-card>
        <beer-card></beer-card>
    </md-content>
</template>

<script>
import BeerCard from './BeerCard.vue';

export default {
    name: 'beer-grid',
    data() {
        return {};
    },
    components: {
        BeerCard
    }
};
</script>

<style scoped>
    .beer-list > * + * {
        margin-top: 8px;
    }
</style>
