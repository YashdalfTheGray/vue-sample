<template>
    <md-app id="growler" md-waterfall md-mode="fixed" class="growler-app-shell">
        <md-app-toolbar class="md-primary">
            <h3 class="md-title" style="flex: 1">{{ appName }}</h3>
            <md-button class="md-icon-button" @click="searchVisible = !searchVisible">
                <md-icon>search</md-icon>
            </md-button>
        </md-app-toolbar>

        <md-app-content class="md-scrollbar">
            <search-bar v-show="searchVisible"></search-bar>
            <beer-grid :beers="beers"></beer-grid>
        </md-app-content>
    </md-app>
</template>

<script>
import BeerGrid from './components/BeerGrid.vue';
import SearchBar from './components/SearchBar.vue';
import beerService from './beerService.js';

export default {
    name: 'growler',
    data() {
        return {
            appName: 'Growler',
            searchVisible: false,
            query: '',
            isPowerSyntaxEnabled: false,
            beers: []
        }
    },
    async created() {
        const response = await beerService.getBeers();
        this.beers = response.value;
    },
    components: {
        BeerGrid,
        SearchBar
    }
}
</script>

<style>
#growler {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex: 1 1 auto;
}
.md-app {
    flex: 1 1 auto;
}
</style>
