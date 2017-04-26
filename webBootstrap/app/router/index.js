import Vue               from './../vue';
import VueRouter         from './../vue-router';
import movieDetail       from './../components/movie-detail';
import indexComponent    from './../components/index-view';

Vue.use(VueRouter);
const routes = [
    {path: '/', component: indexComponent},
    {path:'/movieDetail', component: movieDetail}
];

const router = new VueRouter({
    routes
});

export default router;