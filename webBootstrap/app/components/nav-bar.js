import Vue               from '../lib/vue';
import DATA from'../data/data';
let setCookie = function (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

let getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


setTimeout(()=>{
    console.log(DATA);
}, 6000);

Vue.component('nav-bar', {
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
                        <li class="dropdown">\
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Genre <span class="caret"></span></a>\
                            <ul class="dropdown-menu">\
                                <li><router-link to="/genre/Action" exact>Action</router-link></li>\
                                <li><router-link to="/genre/Comedy">Comedy</router-link></li>\
                                <li><router-link to="/genre/Documentary">Documentary</router-link></li>\
                                <li><router-link to="/genre/Horror">Horror</router-link></li>\
                                <li><router-link to="/genre/Romance">Romance</router-link></li>\
                            </ul>\
                        </li>\
                    </ul>\
                    <form class="nav navbar-nav navbar-form">\
                        <div class="form-group">\
                            <input type="text" class="form-control" placeholder="Search a movie" size="20">\
                        </div>\
                        <button type="submit" class="btn btn-default">Search</button>\
                    </form>\
                    <ul v-if="user.userInstance.cusname === undefined" class="nav navbar-nav navbar-right">\
                        <li><a id="loginbtn" href="#">Login</a></li>\
                        <li><a id="registerbtn" href="#">Register</a></li>\
                    </ul>\
                    <ul v-else class="nav navbar-nav navbar-right">\
                    <li> <router-link to="/user" exact>{{ user.userInstance.cusname }}</router-link></li>\
                    <li ><a @click="logout" class="active" >Log out</a></li>\
                    </ul>\
                </div>\
            </div>\
    </nav>',
    data: ()=> {
        return {
            user: DATA.user,
            category:'test',
            username:''
        }
    },
    methods: {
        isLogin(){
            var username = getCookie("username");
            if (username != "") {
                console.log("login username" + username);
                return true;
            }else return false;
        },
        logout(){
            console.log("logout");
            location.reload();
            setCookie("username", "", 1);
        }
    },
    computed: {
        getUsername(){
            let cookieusername = getCookie("username");
            console.log("cookie username:" + cookieusername);
            this.username = cookieusername;
            console.log("username:" + this.username);
            return cookieusername;
        }
    }
});