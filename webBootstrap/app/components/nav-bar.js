let user = {
};

export default {
    template: '<!--navbar-->\
        <nav class="navbar navbar-default">\
            <div class="container-fluid">\
                <!-- Brand and toggle get grouped for better mobile display -->\
                <div class="navbar-header">\
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\
                    <span class="sr-only">Toggle navigation</span>\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                    </button>\
                    <a class="navbar-brand" href="#">Movie Hub</a>\
                </div>\
                <!-- Collect the nav links, forms, and other content for toggling -->\
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
                    <ul class="nav navbar-nav">\
                        <li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>\
                        <!--         <li><a href="#">Link</a></li> -->\
                        <li class="dropdown">\
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Genre <span class="caret"></span></a>\
                            <ul class="dropdown-menu">\
                                <li><a href="#">Action</a></li>\
                                <li><a href="#">Comedy</a></li>\
                                <li><a href="#">Documentary</a></li>\
                                <!-- <li role="separator" class="divider"></li> -->\
                                <!--  <li><a href="#">Separated link</a></li>\
                                <li role="separator" class="divider"></li> -->\
                                <li><a href="#">Horror</a></li>\
                                <li><a href="#">Sport</a></li>\
                            </ul>\
                        </li>\
                    </ul>\
                    <form class="nav navbar-nav navbar-form">\
                        <div class="form-group">\
                            <input type="text" class="form-control" placeholder="Search a movie" size="20">\
                        </div>\
                        <button type="submit" class="btn btn-default">Search</button>\
                    </form>\
                    <ul class="nav navbar-nav navbar-right">\
                        <li><a id="loginbtn">Login</a></li>\
                        <li><a id="registerbtn">Register</a></li>\
                    </ul>\
                    </div>\
                    </div>\
    </nav>',
    data: ()=> {
        console.log(user);
        return {
            user: user
        }
    }
};