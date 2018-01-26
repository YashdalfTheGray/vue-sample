import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

import App from './Growler.vue';

Vue.use(VueMaterial);

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    render: h => h(App)
});
