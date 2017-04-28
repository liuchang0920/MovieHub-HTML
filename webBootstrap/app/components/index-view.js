import navBarComponent   from './nav-bar';
import moviesRow         from './movies-row';
import carouselComponent from './carousel';
import footerComponent   from './footer';
import loginComponent    from './login-modal'
import registerComponent from './register-modal'
import categoryComponent from './category-modal'

let $ = require('../lib/jquery');

let getNewestMovies = (cb)=>{
    // get 10 Newest Movie
    $.ajax({
        method:'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        crossDomain: true,
        url:'http://104.194.82.160:5000/db/getNewestMovies',
        data: JSON.stringify({count: 10}),
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


export default {
    template:'<div class="index-view">\
        <nav-bar></nav-bar>\
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
            <!--popular movies-->\
            <div class="panel-group" id="accordion">\
              <div class="panel panel-default">\
                <div class="panel-heading">\
                  <h4 class="panel-title">\
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">\
                    Collapsible Group 1</a>\
                  </h4>\
                </div>\
                <div id="collapse1" class="panel-collapse collapse in">\
                  <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\
                  commodo consequat.</div>\
                </div>\
              </div>\
              <div class="panel panel-default">\
                <div class="panel-heading">\
                  <h4 class="panel-title">\
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">\
                    Collapsible Group 2</a>\
                  </h4>\
                </div>\
                <div id="collapse2" class="panel-collapse collapse">\
                  <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\
                  commodo consequat.</div>\
                </div>\
              </div>\
              <div class="panel panel-default">\
                <div class="panel-heading">\
                  <h4 class="panel-title">\
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">\
                    Collapsible Group 3</a>\
                  </h4>\
                </div>\
                <div id="collapse3" class="panel-collapse collapse">\
                  <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\
                  commodo consequat.</div>\
                </div>\
              </div>\
            </div>\
        </div>\
        <footer-component></footer-component>\
    </div>',
    components: {
        'nav-bar':navBarComponent,
        'login-modal': loginComponent,
        'register-modal': registerComponent,
        'category-modal' : categoryComponent,
        'carousel': carouselComponent,
        'footer-component': footerComponent,
        // 'recommend-movies-row': new moviesRow(getNewestMovies, {
        //     title: 'Recommend Movies'
        // }),
        'newest-movies-row': new moviesRow(getNewestMovies, {
            title: 'Newest Movies'
        })
    }
};
