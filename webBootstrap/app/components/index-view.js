import navBarComponent   from './nav-bar';
import moviesRow         from './movies-row';
import carouselComponent from './carousel';
import footerComponent   from './footer';
import loginComponent    from './login-modal'
import registerComponent from './register-modal'
import categoryComponent from './category-modal'
import DATA              from '../data/data';

let $ = require('../lib/jquery');

let getNewestMovies = (cb)=>{
    // get 10 Newest Movie
    $.ajax({
        method:'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        crossDomain: true,
        url:'http://104.194.82.160:5000/db/getNewestMovies',
        data: JSON.stringify({count: 12}),
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
            cb(newestMovies);
        },
        error: (err)=> {
            console.log('Error: ', err);
        }
    });
};

let getRecommandMovie = (cb)=>{
    // get  Recommend Movie
    $.ajax({
        method:'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        crossDomain: true,
        url:'http://104.194.82.160:5000/db/getRecommendMovies',
        data: JSON.stringify({userId: DATA.user.cusid}),
        success: (data)=>{
            console.log("recommend size:" + data.instances.length);
            let recommendMovies = data.instances;
            recommendMovies.map((movie)=> {
                movie.movScreenshotUrl = movie.movScreenshotUrl.split('|');
                movie.genre = movie.genre.split('|');
                //movie.actor = movie.actor.split('|');
                movie.movScreenshotUrl.pop();
                movie.genre.pop();
                //movie.actor.pop();
            });
            cb(recommendMovies);
        },
        error: (err)=> {
            console.log('Error: ', err);
        }
    });
};


export default {
    template:'<div class="index-view">\
        <!--login modal-->\
        <login-modal></login-modal>\
        <!--register modal-->\
        <register-modal></register-modal>\
        <!--carousel-->\
        <carousel></carousel>\
        <recommend-movies-row  v-if="user.userInstance.cusname != undefined" ></recommend-movies-row>\
        <div  v-if="user.userInstance.cusname != undefined" class="col-md-2" style="padding-top: 40px;">\
            <category-modal></category-modal>\
        </div>\
        <newest-movies-row></newest-movies-row>\
        <div  v-if="user.userInstance.cusname == undefined" class="col-md-2" style="padding-top: 40px;">\
            <category-modal></category-modal>\
        </div>\
    </div>',
    components: {
        'login-modal': loginComponent,
        'register-modal': registerComponent,
        'category-modal' : categoryComponent,
        'carousel': carouselComponent,
        'recommend-movies-row': new moviesRow(getRecommandMovie, {
            title: 'Recommend Movies'
        }),
        'newest-movies-row': new moviesRow(getNewestMovies, {
            title: 'Newest Movies'
        })
    },
    data: function(){
      return {
        user: DATA.user
      }
    }
};
