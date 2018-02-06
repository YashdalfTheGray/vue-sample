<template>
    <md-content id="beer-search">
        <md-field md-clearable>
            <label>Search...</label>
            <md-input v-model="query"></md-input>
        </md-field>
    </md-content>
</template>

<script>
export default {
    name: 'beer-search',
    data() {
        return {
            query: ''
        };
    }
}
</script>

<style scoped>

</style>
