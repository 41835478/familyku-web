define(['jquery','app/baseURL', 'baseCookie', 'app/baseFinal'], function($, URL, BaseCookie, Final) {
    var token=BaseCookie.getToken();
    if(!token){
      window.location.href="login.html";
    }else{
        $.ajax({
            url:URL.baseURLForward+"group/user/verifyToken.action", // URL.baseURL9 + 'jijing_answers/web_mark',
            data: {
                token:token
            },
            type: 'get',
            headers: {
                token:token
            },
            success: function (response){
                if(response.status!=1){
                    window.location.href="login.html";
                }else{
                    //$("#UseName").attr("title",checkLogin)
                    $("#userName").html(BaseCookie.getUserName());
                }
            }
        });
    }
})