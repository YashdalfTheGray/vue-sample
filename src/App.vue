<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li v-for="e in essentialLinks">
                <a :href="e.link" target="_blank">{{e.name}}</a>
            </li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li v-for="e in ecosystemLinks">
                <a :href="e.link" target="_blank">{{e.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            essentialLinks: [
                { link: 'https://vuejs.org', name: 'Core Docs' },
                { link: 'https://forum.vuejs.org', name: 'Forum' },
                { link: 'https://chat.vuejs.org', name: 'Community Chat' },
                { link: 'https://twitter.com/vuejs', name: 'Twitter' }
            ],
            ecosystemLinks: [
                { link: 'http://router.vuejs.org/', name: 'vue-router' },
                { link: 'http://vuex.vuejs.org/', name: 'vuex' },
                { link: 'http://vue-loader.vuejs.org/', name: 'vue-loader' },
                { link: 'https://github.com/vuejs/awesome-vue', name: 'awesome-vue' }
            ]
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
