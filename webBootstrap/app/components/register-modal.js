let $ = require('../lib/jquery');
import DATA from'../data/data';

let registerRequest = (cb, username, email, password) => {
     $.ajax({
        method:'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        crossDomain: true,
        url:'http://104.194.82.160:5000/register',
        data: JSON.stringify({cusname:username, cuspassword: password, cusemail: email, cusPortraitUrl: ""}),
        success: (data)=>{
            cb(data);
        },
        error: (err)=>{
            console.log("register error");
        }
    });
}

let showNotification = ()=> {
    $("#registerModal").hide();
    $('#registerModal').toggleClass('in');
    $('body').toggleClass('modal-open');
    $('.modal-backdrop').hide();
    $("#registerNotificationModal").show();
    $('#registerNotificationModal').toggleClass('in');
    setTimeout(()=>{
        $('#registerNotificationModal').toggleClass('in');
        $("#registerNotificationModal").hide();
    }, 1000);
}

export default {
	template:'<div><div class="modal fade" id="registerModal" role="dialog">\
            <div class="modal-dialog">\
                \
                <!-- Modal content-->\
                <div class="modal-content">\
                    <div class="modal-header" style="padding:35px 50px;">\
                        <button type="button" class="close" data-dismiss="modal">&times;</button>\
                        <h4><span class="glyphicon glyphicon-lock"></span> Register</h4>\
                    </div>\
                    <div class="modal-body" style="padding:40px 50px;">\
                        <div v-if="message != undefined" v-text="message" ></div>\
                        <form role="form">\
                            <div class="form-group">\
                                <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>\
                                <input type="text" class="form-control" id="usrname" placeholder="Enter username" v-model="cusname">\
                            </div>\
                            <div class="form-group">\
                                <label for="email"><span class="glyphicon glyphicon-user"></span> Email</label>\
                                <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="cusemail" >\
                            </div>\
                            <div class="form-group">\
                                <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>\
                                <input type="password" class="form-control" id="psw" placeholder="Enter password" v-model="cuspassword" >\
                            </div>\
                            <div class="form-group">\
                                <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Repeat Password</label>\
                                <input type="password" class="form-control" id="psw" placeholder="Enter password" v-model="cuspasswordR" >\
                            </div>\
                            <button type="button" class="btn btn-success btn-block" @click="register" ><span class="glyphicon glyphicon-off"></span> Register</button>\
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
        <div class="modal fade" id="registerNotificationModal" role="dialog">\
            <div class="modal-dialog">\
                \
                <!-- Modal content-->\
                <div class="modal-content">\
                    <div class="modal-header" style="padding:35px 50px;">\
                        <h4><span class="glyphicon glyphicon-lock"></span>&nbsp;<span v-text="registerstatus"></span></h4>\
                    </div>\
                </div>\
                \
            </div>\
        </div>\
        </div>',
        data: function(){
            return {
                cusname: 'testliuchang',
                cuspassword: 'password',
                cuspasswordR: 'password',
                cusemail: '666@qq.com',
                message: undefined,
                registerstatus: '' 
            }
        },
        methods:{
            register() {
                // check each input field
                if(this.cusname == "" || this.cusemail == "" || this.cuspassword == "" || this.cuspasswordR == "" || this.cuspassword != this.cuspasswordR){
                    this.message = "input field can not be empty, password must be identical.";
                    return;    
                }
                var temp = this;
                registerRequest((data)=>{
                    let status = data.status;
                    if(status == 200){
                        temp.registerstatus = 'register successful';
                       
                        //setCookie("username", this.cusname, 1);
                        showNotification();
                        DATA.user.userInstance.cusname = this.cusname;
                        DATA.user.userInstance.cusemail = this.cusemail;
                        
                    }else{
                        console.log("username or password not correct");
                        temp.registerstatus = 'register failed';
                        temp.message = "username or email has already been used";
                    }
                },this.cusname, this.cusemail, this.cuspassword);
            }
        }

    }