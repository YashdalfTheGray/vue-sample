<template>
    <md-card id="beer-card" v-cloak>
        <md-card-header>
            <div class="md-title">{{ beer.name }}</div>
        </md-card-header>
        <md-card-content>
            <div>{{ beer }}</div>
        </md-card-content>
        <md-card-actions>
            <md-button>Like</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
import beerService from '../beerService';

export default {
    name: 'beer-card',
    data() {
        return {
            beer: {}
        }
    },
    async created() {
        const response = await beerService.getBeers();
        console.log(response);
        this.beer = response.value[0];
    }
}
</script>

<style scoped>
[v-cloak] {
    display: none;
}
</style>
