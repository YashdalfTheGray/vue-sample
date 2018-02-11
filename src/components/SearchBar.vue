<template>
    <md-content id="beer-search">
        <md-field md-clearable>
            <label>Search...</label>
            <md-input v-model="query" @input="inputChanged"></md-input>
        </md-field>
    </md-content>
</template>

<script>
export default {
    name: 'beer-search',
    data() {
        return { query: '' };
    },
    methods: {
        inputChanged(input) {
            this.$emit('query-changed', input);
        }
    }
}
</script>

<style scoped>

</style>
