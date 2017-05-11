//should define a function to login
let $ = require('../lib/jquery');


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


export default {
	template:'<div class="column col-sm-2 col-xs-1 sidebar-offcanvas" id="sidebar">\
            <ul class="nav" id="menu">\
                <li class="thumbnail"><a href="#" style="pointer-events: none;" ><img src="image/boy-512.png" alt="" style="max-width: 100%"></a></li>\
                <li><a href="" style="pointer-events: none;"><hr /></a></li>\
                <li><a href="#" style="pointer-events: none;">{{ getUsername }}</a></li>\
                <li><a href="#" style="pointer-events: none;">{{ getEmail }}</a></li>\
            </ul>\
        </div>',
    data: function(){
        return {
            cusname: 'name',
            email: '666@gmail.com'
        };
    },
    methods: {

    },
    computed: {
         getUsername: function (){
            let cookieusername = getCookie("username");
            console.log("cookie username:" + cookieusername);
            this.username = cookieusername;
            console.log("username:" + this.username);
            return cookieusername;
        },
        getEmail: function (){
            let cookieemail = getCookie("email");
            console.log("cookie email:" + cookieemail);
            this.email = cookieemail;
            return cookieemail;
        }
    }
}