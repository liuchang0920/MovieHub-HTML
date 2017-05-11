import Vue               from './../lib/vue';
import VueRouter         from './../lib/vue-router';
import movieDetail       from './../components/movie-detail';
import indexComponent    from './../components/index-view';
import genre   			 from './../components/genre';
import searchPage        from './../components/search-page';
import userView 		 from './../components/user-view';
import ElementUI from 'element-ui'
Vue.use(ElementUI);

Vue.use(VueRouter);
const routes = [
    {path: '/', component: indexComponent},
    {path:'/movieDetail', component: movieDetail},
    {path:'/genre/:genre', component: genre},
    {path:'/search/:searchText', component: searchPage},
    {path:'/user', component: userView},
];

const router = new VueRouter({
    routes
});

export default router;