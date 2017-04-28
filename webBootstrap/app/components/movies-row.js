import Vue from './../lib/vue';
import router from './../router/index';

class MovieRow {
    constructor(onCreatedMethod, data={}, methods={}) {
        this.template = '<div class="col-md-10">\
            <h1 v-on:click="goToMovieDetail()">{{ title }}</h1>\
            <div class="row">\
                <div class="col-sm-4 col-md-3 col-lg-3 row-movie" v-for="movie in movies">\
                    <div class="thumbnail">\
                        <img :src="movie.movScreenshotUrl[0]" alt="...">\
                        <div class="caption">\
                            <h3 class="row-movie-title">{{movie.movname}}</h3>\
                            <p class="row-movie-description">{{movie.description}}</p>\
                            <p>\
                                <a v-on:click="goToMovieDetail()" class="btn btn-primary" role="button">Detail</a>\
                                <a href="#" class="btn btn-default" role="button">Button</a>\
                            </p>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>';
        this.data = ()=> {
            data.movies = {};
            return data;
        };
        this.created = function() {
                onCreatedMethod((movies)=>{
                console.log(this, movies);
                this.movies = movies;
            });
        }
        this.methods = {
            goToMovieDetail: function() {
                console.log(this);
                //router.push('movieDetail');
            }
        };
        return this;
    }
}


export default MovieRow;