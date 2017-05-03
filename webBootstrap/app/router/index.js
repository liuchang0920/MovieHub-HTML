import Vue               from './../lib/vue';
import VueRouter         from './../lib/vue-router';
import movieDetail       from './../components/movie-detail';
import indexComponent    from './../components/index-view';
import genre    from './../components/genre';


Vue.use(VueRouter);
const routes = [
    {path: '/', component: indexComponent},
    {path:'/movieDetail', component: movieDetail},
    {path:'/genre/:genre', component: genre}
];

const router = new VueRouter({
    routes
});

export default router;