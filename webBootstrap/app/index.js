require('./../style/scss/style.scss');
import Vue               from './lib/vue';
import router            from './router/index';

const app = new Vue({
    router
}).$mount('#app');

require('./components/nav-bar');
require('./components/footer');
