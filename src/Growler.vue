<template>
    <md-app id="growler" md-waterfall md-mode="fixed" class="growler-app-shell">
        <md-app-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                <md-icon>menu</md-icon>
            </md-button>
            <h3 class="md-title" style="flex: 1">{{ appName }}</h3>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-transparent" md-elevation="0">
                Navigation
            </md-toolbar>

            <md-list>
                <md-list-item>
                    <md-icon>move_to_inbox</md-icon>
                    <span class="md-list-item-text">Inbox</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>send</md-icon>
                    <span class="md-list-item-text">Sent Mail</span>
                </md-list-item>
            </md-list>
        </md-app-drawer>

        <md-app-content class="md-scrollbar">
            <search-bar></search-bar>
            <beer-grid></beer-grid>
        </md-app-content>
    </md-app>
</template>

<script>
import BeerGrid from './components/BeerGrid.vue';
import SearchBar from './components/SearchBar.vue';

export default {
    name: 'growler',
    data() {
        return {
            appName: 'Growler',
            menuVisible: false,
            query: '',
            isPowerSyntaxEnabled: false
        }
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
