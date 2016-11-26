/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal'], function (Render, URL, BaseCookie, Final) {
    var TMPL = {
        tmpl_preview: 'app/preview/tmpl_preview'
    }
    var init=function (){
        renderContainer();
    };
    var renderContainer = function (){
        Render.render({
            wrap: $('#main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_preview,
                tmplData: ''
            },
            afterRender: function () {

                requestPhotos();
            }
        });
    };
    var requestPhotos = function (){
        $.ajax({
            url:URL.baseURLForward+"/diary/tempinfo", // URL.baseURL9 + 'jijing_answers/web_mark',
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
                       renderDefaultTmpl(data);
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