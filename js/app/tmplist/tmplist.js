/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal'], function (Render, URL, BaseCookie, Final) {
    var TMPL = {
        tmpl_tmp: 'app/tmplist/tmpl_tmp'
    }
    var init=function (){
        requestTmpList();
    };
    var renderContainer = function (data){
        Render.render({
            wrap: $('#main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_tmp,
                tmplData: data
            },
            afterRender: function () {
                $("header ul li[data-id="+data[0].id+"]").show().addClass("active");
                $("#tmplist_"+data[0].id).show();
                //requestPhotos();
            }
        });
    };
    var requestTmpList = function (){
        $.ajax({
            url:URL.baseURLForward+"/template/cate/list", // URL.baseURL9 + 'jijing_answers/web_mark',
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
    var renderDefaultTmpl = function (data){
        require(["./../template/01_tmp_shuye/js/shuye"],function(ShuYe) {
            //var ShuYe = require();
            ShuYe.init(data);
        })
    }
    return {
        init:init
    }
});