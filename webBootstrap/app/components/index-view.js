import navBarComponent   from './nav-bar';
import moviesRow from './movies-row';
import carouselComponent from './carousel';
import footerComponent   from './footer';

export default {
    template:'<div class="index-view">\
        <nav-bar></nav-bar>\
        <!--login modal-->\
        <div class="modal fade" id="loginModal" role="dialog">\
            <div class="modal-dialog">\
                \
                <!-- Modal content-->\
                <div class="modal-content">\
                    <div class="modal-header" style="padding:35px 50px;">\
                        <button type="button" class="close" data-dismiss="modal">&times;</button>\
                        <h4><span class="glyphicon glyphicon-lock"></span> Login</h4>\
                    </div>\
                    <div class="modal-body" style="padding:40px 50px;">\
                        <form role="form">\
                            <div class="form-group">\
                                <label for="loginusername"><span class="glyphicon glyphicon-user"></span> Username</label>\
                                <input type="text" class="form-control" id="loginusername" placeholder="Enter email" name="cusname">\
                            </div>\
                            <div class="form-group">\
                                <label for="loginpassword"><span class="glyphicon glyphicon-eye-open"></span> Password</label>\
                                <input type="password" class="form-control" id="loginpassword" placeholder="Enter password" name="cuspassword">\
                            </div>\
                            <div class="checkbox">\
                                <label><input type="checkbox" value="">Remember me</label>\
                                <a href="#" id="index-login-forget-password">Forget Password?</a>\
                            </div>\
                            <button type="submit" class="btn btn-success btn-block" id="loginBtnajax"><span class="glyphicon glyphicon-off"></span> Login</button>\
                        </form>\
                    </div>\
                    <div class="modal-footer">\
                    </div>\
                </div>\
                \
            </div>\
        </div>\
        <!--register modal-->\
        <div class="modal fade" id="registerModal" role="dialog">\
            <div class="modal-dialog">\
                \
                <!-- Modal content-->\
                <div class="modal-content">\
                    <div class="modal-header" style="padding:35px 50px;">\
                        <button type="button" class="close" data-dismiss="modal">&times;</button>\
                        <h4><span class="glyphicon glyphicon-lock"></span> Register</h4>\
                    </div>\
                    <div class="modal-body" style="padding:40px 50px;">\
                        <form role="form">\
                            <div class="form-group">\
                                <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>\
                                <input type="text" class="form-control" id="usrname" placeholder="Enter email">\
                            </div>\
                            <div class="form-group">\
                                <label for="usrname"><span class="glyphicon glyphicon-user"></span> Email</label>\
                                <input type="email" class="form-control" id="usrname" placeholder="Enter email">\
                            </div>\
                            <div class="form-group">\
                                <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>\
                                <input type="text" class="form-control" id="psw" placeholder="Enter password">\
                            </div>\
                            <div class="form-group">\
                                <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Repeat Password</label>\
                                <input type="text" class="form-control" id="psw" placeholder="Enter password">\
                            </div>\
                            <button type="submit" class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span> Register</button>\
                        </form>\
                    </div>\
                    <div class="modal-footer">\
                        <!--  <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Cancel</button>\
                        <p>Not a member? <a href="#">Sign Up</a></p>\
                        <p>Forgot <a href="#">Password?</a></p> -->\
                    </div>\
                </div>\
                \
            </div>\
        </div>\
        <!--carousel-->\
        <carousel></carousel>\
        <recommend-movies-row></recommend-movies-row>\
        <newest-movies-row></newest-movies-row>\
        <div class="col-md-2" style="padding-top: 40px;">\
        <!-- panel movie category-->\
            <div class="panel panel-default" >\
              <div class="panel-heading">\
                <h3 class="panel-title">Category</h3>\
              </div>\
              <div class="panel-body">\
                <ul class="list-group">\
                    <li class="list-group-item">Action</li>\
                    <li class="list-group-item">Comedy</li>\
                    <li class="list-group-item">Documentary</li>\
                    <li class="list-group-item">Horror</li>\
                    <li class="list-group-item">Sport</li>\
                </ul>\
              </div>\
            </div>\
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