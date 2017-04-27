import Vue from './../lib/vue';
import router from './../router/index';

class MovieRow {
    constructor(data={}, methods={}) {
        this.template = '<div class="col-md-10">\
            <h1>{{ title }}</h1>\
            <div class="row">\
                <div class="col-sm-5 col-md-3" v-for="todo in movies">\
                    <div class="thumbnail">\
                        <img src="image/movie-pic.svg" alt="...">\
                        <div class="caption">\
                            <h3>Thumbnail label</h3>\
                            <p>{{todo.text}}</p>\
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
            return data;
        }
        this.methods = methods;
        this.methods.goToMovieDetail = ()=> {
            router.push('movieDetail');
        };
        return this;
    }
}


export default MovieRow;