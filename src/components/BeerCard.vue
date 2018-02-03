<template>
    <md-card id="beer-card">
        <md-card-header>
            <div class="md-title">{{ title }}</div>
        </md-card-header>
        <md-card-content>This is where information about the card will go.</md-card-content>
        <md-card-actions>
            <md-button>Like</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
export default {
    name: 'beer-card',
    data() {
        return {
            title: 'Some Beer'
        }
    }
}
</script>

<style scoped>

</style>
