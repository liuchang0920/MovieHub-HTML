import navBarComponent   from './nav-bar';
import moviesRow         from './movies-row';
import carouselComponent from './carousel';
import footerComponent   from './footer';
import loginComponent    from './login-modal'
import registerComponent from './register-modal'
import categoryComponent from './category-modal'

export default {
    template:'<div class="index-view">\
        <nav-bar></nav-bar>\
        <!--login modal-->\
        <login-modal></login-modal>\
        <!--register modal-->\
        <register-modal></register-modal>\
        <!--carousel-->\
        <carousel></carousel>\
        <recommend-movies-row></recommend-movies-row>\
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
        'recommend-movies-row': moviesRow({
            title: 'Recommend Movies',
            movies: [
            {text: 'test'},
            {text: 'test'},
            {text: 'test'},
            {text: 'test'}
            ]
        }),
        'newest-movies-row': moviesRow({
            title: 'Newest Movies',
            movies: [
            {text: 'test'},
            {text: 'test'},
            {text: 'test'},
            {text: 'test'}
            ]
        })
    }
};
