//should define a function to login
let $ = require('../lib/jquery');
import DATA from'../data/data';
let loginRequest = (cb, username, password)=>{
    //check session
    //login
    console.log(username + " " + password);
    $.ajax({
        method:'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        crossDomain: true,
        url:'http://104.194.82.160:5000/login',
        data: JSON.stringify({cusname:username, cuspassword: password}),
        success: (data)=>{
            cb(data);
        },
        error: (err)=>{
            console.log("login failed");
        }
    });
}



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
	template:'<div>\
    <div class="modal fade" id="loginModal" role="dialog">\
            <div class="modal-dialog">\
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
                                <input type="text" class="form-control" id="loginusername" placeholder="Enter username" name="cusname" v-model="cusname" >\
                            </div>\
                            <div class="form-group">\
                                <label for="loginpassword"><span class="glyphicon glyphicon-eye-open"></span> Password</label>\
                                <input type="password" class="form-control" id="loginpassword" placeholder="Enter password" name="cuspassword" v-model="cuspassword">\
                            </div>\
                            <div class="checkbox">\
                                <label><input type="checkbox" value="">Remember me</label>\
                                <a href="#" id="index-login-forget-password">Forget Password?</a>\
                            </div>\
                            <button type="button" class="btn btn-success btn-block" id="loginBtnajax" @click="login" ><span class="glyphicon glyphicon-off"></span> Login</button>\
                        </form>\
                    </div>\
                    <div class="modal-footer">\
                    </div>\
                </div>\
                \
            </div>\
        </div>\
        <div class="modal fade" id="notificationModal" role="dialog">\
            <div class="modal-dialog">\
                \
                <!-- Modal content-->\
                <div class="modal-content">\
                    <div class="modal-header" style="padding:35px 50px;">\
                        <h4><span class="glyphicon glyphicon-lock"></span>&nbsp;<span v-text="loginstatus"></span></h4>\
                    </div>\
                </div>\
                \
            </div>\
        </div>\
        </div>',
    data: function(){
        return {
            cusname: 'name',
            cuspassword: 'password',
            loginstatus: ''
        };
    },
    methods:{
        login(){
            var temp = this;
            loginRequest((data)=>{
                console.log(data);
                status = data.status;
                if(status == 200) {
                    console.log("log in successful");
                    temp.loginstatus = 'login successful';
                    console.log($("#loginModal").modal);
                    $("#loginModal").hide();
                    $('#loginModal').toggleClass('in');
                    $('.modal-backdrop').hide();
                    $("#notificationModal").show();
                    $('#notificationModal').toggleClass('in');
                    setTimeout(()=>{
                        $('#notificationModal').toggleClass('in');
                        $("#notificationModal").hide();
                    }, 1000);
                    setCookie("username", this.cusname, 1);
                    DATA.user.userInstance = data.instance;
                    console.log(DATA);

                    //reload page.
                }else if(status == 400) {
                    console.log("username or password not correct");
                    temp.loginstatus = 'login failed';
                    // $("#loginModal").modal("hide");
                    // $("#notificationModal").modal("show");

                }
            }, this.cusname, this.cuspassword);   
        }
    }
}