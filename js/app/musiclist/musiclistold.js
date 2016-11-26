/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal'], function (Render, URL, BaseCookie, Final) {
    var TMPL = {
        tmpl_musiclist: 'app/musiclist/tmpl_musiclist'
    }
    var init=function (){
        requestTmpList();
    };
    var renderContainer = function (data){
        Render.render({
            wrap: $('#main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_musiclist,
                tmplData: data
            },
            afterRender: function () {
                $("header ul li[data-id="+data[0].id+"]").show().addClass("active");
                $("#musiclist_"+data[0].id).show();
                //requestPhotos();
            }
        });
    };
    var requestTmpList = function (){
        $.ajax({
            url:URL.baseURLForward+"/music/cate/list", // URL.baseURL9 + 'jijing_answers/web_mark',
            data: {
                token:"人渣"
            },
            dataType:"json",
            type: 'get',
            //headers: {
            //    token:token
            //},
            success: function (response){
                if(response.code==Final.RESPONSE_STATUS.success){
                    var data=response.data;
                    if(data){
                        renderContainer(data);
                    }
                }
            }
        });
    };
    return {
        init:init
    }
});