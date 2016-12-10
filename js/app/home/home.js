'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal','common/util'], function (Render, URL, BaseCookie, Final,Util) {
    var init=function (){
        Util.getDefaultAddress()
        initEvent();
    };
    var initEvent = function (){
        $(document).on("click",".menu_js",function (e){
            var routerStr=$(this).attr("data-router");
            if(routerStr){
                window.location.href=window.location.href.split("#")[0]+"#"+routerStr;
            }
        });
    }
    return {
        init:init
    }
});