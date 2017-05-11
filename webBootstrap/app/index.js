require('./../style/scss/style.scss');
import Vue               from './lib/vue';
import router            from './router/index';

const app = new Vue({
    router
}).$mount('#app');

let getGenre = ()=>{
    $.ajax({
        method:'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        crossDomain: true,
        url:'http://104.194.82.160:5000/db/MovieGenres',
        data: JSON.stringify(),
        success:(data)=>{
            app.genre = data.instance;
            console.log(app);
        }
    })
};

getGenre();

require('./components/nav-bar');
require('./components/footer');
