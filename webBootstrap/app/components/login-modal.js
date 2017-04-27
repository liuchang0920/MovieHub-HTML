export default {
	template:'<div class="modal fade" id="loginModal" role="dialog">\
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
        </div>'
}