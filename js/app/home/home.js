'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal'], function (Render, URL, BaseCookie, Final) {
    var init=function (){
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