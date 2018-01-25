<template>
    <div id="growler">
        <h1 class="app-title" v-once>{{ appName }}</h1>
        <input v-model="query" placeholder="Search" />
        <label>
            <input type="checkbox" v-model="isPowerSyntaxEnabled" />
            Enable Power Mode
        </label>
        <p></p>
        <div>Searching for: {{ query }}</div>
    </div>
</template>

<script>
export default {
    name: 'growler',
    data() {
        return {
            appName: 'Growler',
            query: '',
            isPowerSyntaxEnabled: false
        }
    }
}
</script>

<style>
#growler {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 8px;
}
.app-title {
    text-align: center;
}
</style>
