$(function () {
    $('#register-btn').click(function () {
        $('.login-form').hide();
        $('.register-form').show();
    });

    $('#register-back-btn').click(function () {
        $('.login-form').show();
        $('.register-form').hide();
    });

    $('#forget-password').click(function () {
        $('.login-form').hide();
        $('.forget-form').show();
    });

    $('#back-btn').click(function () {
        $('.login-form').show();
        $('.forget-form').hide();
    });

    $('#identify-back-btn').click(function () {
        $('.login-form').show();
        $('.identify-form').hide();
    });

})


//忘记密码，获取验证码
function getForgetIden() {
    if ($.trim($("#forgetPhone").val()) != '') {
        var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
        if (reg.test($.trim($("#forgetPhone").val()))) {
            $.postAntiForgery("/Login/SendCode/", { phone: $("#forgetPhone").val(), usmodel: "密码重置验证" }, function (json) {
                if (json) {
                    var count = 60;
                    var countdown = setInterval(CountDown, 1000);
                    function CountDown() {
                        $("#send_Ident").attr("disabled", true);
                        $("#send_Ident").text("剩余 " + count + " 秒");
                        if (count == 0) {
                            $("#send_Ident").text("获取验证码").removeAttr("disabled");
                            clearInterval(countdown);
                        }
                        count--;
                    }
                }
                else
                    alert("验证码发送失败，请稍后再试。");
            });
        }
        else
            alert("请输入正确的手机号码！");
    }
    else
        alert("请先输入手机号码！");
}

function postForget() {
    //要使用以下的 .ajaxSubmit 异步提交方法，必须引用 jquery.form.js 文件
    if ($.trim($("#forgetPhone").val()) != '' && $.trim($("#forgetPhone_iden").val()) != '') {
        var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
        if (reg.test($.trim($("#forgetPhone").val()))) {
            $("#FormForget").ajaxSubmit({
                url: "/Login/ForgetPassword",
                type: "post",
                success: function (data) {
                    forgetCallBack(data);
                },
                error: function (aa) {
                    alert(aa);
                }
            });
        }
        else
            alert("请输入正确的手机号码！");
    }
    else
        alert("请先输入手机号码和验证码！");
}

function forgetCallBack(e) {
    if (e.Success) {
        location.href = "/Login/ResetPassword?id=" + e.Msg;
    }
    else {
        alert("寻回密码操作失败，请检查您的手机号和验证码是否正确！");
    }
}


//用户注册
function postRegister() {
    //要使用以下的 .ajaxSubmit 异步提交方法，必须引用 jquery.form.js 文件
    if ($.trim($("#phone").val()) != '' && $.trim($("#password").val()) != '' && $.trim($("#rpassword").val()) != '' && $.trim($("#fullname").val()) != '' && $.trim($("#cardnumber").val()) != '') {
        if ($.trim($("#password").val()) == $.trim($("#rpassword").val())) {
            var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
            if (reg.test($.trim($("#phone").val()))) {
                var regidnumber = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                if (regidnumber.test($.trim($("#cardnumber").val()))) {
                    if ($('#tnc').prop('checked')) {
                        $("#FormRegister").ajaxSubmit({
                            url: "/Login/Register",
                            type: "post",
                            success: function (data) {
                                registerCallBack(data);
                            },
                            error: function (aa) {
                                alert(aa);
                            }
                        });
                    }
                    else
                        alert("请先阅读并同意协定！");
                }
                else
                    alert("请输入正确的身份证号！");
            }
            else
                alert("请输入正确的手机号！");
        }
        else
            alert("密码和重复密码不一致！");
    }
    else
        alert("必须输入完整的信息！");
}

function registerCallBack(e) {
    if (e.Success) {
        $("#phoneNumber").val(e.Msg);
        $('.register-form').hide();
        $('.identify-form').show();
    }
    else {
        alert(e.Msg);
    }
}


//发送验证码
function getIdentify() {
    $.postAntiForgery("/Login/SendCode/", { phone: $("#phoneNumber").val(), usmodel: "注册验证" }, function (json) {
        if (json){
            var count = 60;
            var countdown = setInterval(CountDown, 1000);
            function CountDown() {
                $("#sendIdent").attr("disabled", true);
                $("#sendIdent").text("剩余 " + count + " 秒");
                if (count == 0) {
                    $("#sendIdent").text("获取验证码").removeAttr("disabled");
                    clearInterval(countdown);
                }
                count--;
            }
        }
        else
            alert("验证码发送失败，请稍后再试。");
    });
}

//激活用户
function postIdentify() {
    //要使用以下的 .ajaxSubmit 异步提交方法，必须引用 jquery.form.js 文件
    if ($.trim($("#forPhone").val()) != '') {
        $("#FormIdentify").ajaxSubmit({
            url: "/Login/Activation",
            type: "post",
            success: function (data) {
                identifyCallBack(data);
            },
            error: function (aa) {
                alert(aa);
            }
        });
    }
    else
        alert("请先输入验证码！");
}

function identifyCallBack(e) {
    if (e) {
        alert("用户已激活，欢迎登陆使用！");
        $('.login-form').show();
        $('.identify-form').hide();
    }
    else {
        alert("用户激活失败，请检查验证码是否正确！");
    }
}

