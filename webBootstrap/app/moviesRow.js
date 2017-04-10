import Vue from './vue';

export default function(option) {
    Vue.component('movies-row', {
        template: '<div>\
            <h1>{{ title }}</h1>\
            <div class="row">\
                <div class="col-sm-5 col-md-3" v-for="todo in movies">\
                    <div class="thumbnail">\
                        <img src="image/movie-pic.svg" alt="...">\
                        <div class="caption">\
                            <h3>Thumbnail label</h3>\
                            <p>{{todo.text}}</p>\
                            <p>\
                                <a href="#" class="btn btn-primary" role="button">Button</a>\
                                <a href="#" class="btn btn-default" role="button">Button</a>\
                            </p>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>',
        data: function() {
            return option.data
        }
    });

    return new Vue({
        el: option.el
    });
};

