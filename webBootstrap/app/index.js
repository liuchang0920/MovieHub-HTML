require('./../style/scss/style.scss');
import Vue               from './vue';
import VueRouter         from './vue-router';
import movieDetail       from './components/movie-detail';
import indexComponent    from './components/index-view';
Vue.use(VueRouter);
const routes = [
    {path:'/movieDetail', component: movieDetail},
    {path: '/', component: indexComponent}
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');
