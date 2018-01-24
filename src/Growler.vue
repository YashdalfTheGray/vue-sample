<template>
    <div id="growler">
        <h1 class="app-title">{{ appName }}</h1>
    </div>
</template>

<script>
export default {
    name: 'growler',
    data() {
        return {
            appName: 'Growler'
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
