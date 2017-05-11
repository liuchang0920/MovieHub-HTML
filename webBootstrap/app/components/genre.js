import navBarComponent   from './nav-bar';
import moviesRow         from './movies-row';
import carouselComponent from './carousel';
import footerComponent   from './footer';
import loginComponent    from './login-modal'
import registerComponent from './register-modal'
import categoryComponent from './category-modal'
import router            from '../router/index';
let $ = require('../lib/jquery');
// sessionStorage.setItem('genreid',-1);
let firstid = -1;
let lastid = 0;
let page = 1;
let movieRowData = {
    title: 'Test'
};
document.getElementById('app').scrollIntoView();

let getGenreMovies = (cb, id=firstid)=> {
    if (page==1){
        id=-1;
    }
    // console.log(page);
    // get 10 Newest Movie
    movieRowData.title = router.app.$route.params.genre;
    $.ajax({
        method:'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        crossDomain: true,
        url:'http://104.194.82.160:5000/db/getMoviesByGenre',
        data: JSON.stringify({movid: id, genre: router.app.$route.params.genre,count: 12}),
        success: (data)=>{
            let newestMovies = data.instances;
            newestMovies.map((movie)=> {
                    movie.movScreenshotUrl = movie.movScreenshotUrl.split('|');
                    movie.genre = movie.genre.split('|');
                    movie.actor = movie.actor.split('|');
                    movie.movScreenshotUrl.pop();
                    movie.genre.pop();
                    movie.actor.pop();
            });
            firstid = newestMovies[0].movid;
            lastid = newestMovies[11].movid;
            cb(newestMovies);
        },
        error: (err)=> {
            console.log('Error: ', err);
        }
    });
}

export default {
        template:'<div class="index-view">\
                <!--login modal-->\
                <login-modal></login-modal>\
                <!--register modal-->\
                <register-modal></register-modal>\
                <!--carousel-->\
                <carousel></carousel>\
                <newest-movies-row></newest-movies-row>\
                <div class="col-md-2" style="padding-top: 40px;">\
                <!-- panel movie category-->\
                        <category-modal></category-modal>\
                </div>\
                <div class="col-md-10" >\
                    <div style="text-align: center">\
                    <nav aria-label="...">\
                        <ul class="pager">\
                            <li><a v-on:click="previousPage()">Previous</a></li>\
                            <li><a v-on:click="nextPage()">Next</a></li>\
                        </ul>\
                    </nav>\
                    </div>\
                </div>\
        </div>',
        data: function() {
            return {
            };
        },
        components: {
                'login-modal': loginComponent,
                'register-modal': registerComponent,
                'category-modal' : categoryComponent,
                'carousel': carouselComponent,
                'newest-movies-row': new moviesRow(getGenreMovies, movieRowData)
        },
        watch:{
                '$route': function(to, from) {
                    location.reload();
                    page=1;
                }
        },
        methods:{

            nextPage() {
                // sessionStorage.setItem('genreid',lastid);
                page=page+1;
                this.$children[4].$data.movies = [];
                getGenreMovies((movies)=> {
                    this.$children[4].$data.movies = movies;
                }, lastid);
                document.getElementById('app').scrollIntoView();
            },
            previousPage() {
                if (page!=1){
                    page=page-1;
                    this.$children[4].$data.movies = [];
                    getGenreMovies((movies)=> {
                        this.$children[4].$data.movies = movies;
                    }, firstid);
                    document.getElementById('app').scrollIntoView();}
            }
        }
};
