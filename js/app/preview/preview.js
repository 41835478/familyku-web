/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal','common/util'], function (Render, URL, BaseCookie, Final,Util) {
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
                token:"人渣",
                userid:localStorage.getItem("userId") || -1
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
                       tmpSaveImgData(data.images);
                       localStorage.setItem(Final.MUSIC_ID,data.music.id);
                       localStorage.setItem(Final.TMP_ID,data.template.id);
                   }
               }
            }
        });
    };
    var tmpSaveImgData = function (images){
        if(images.length>0){
            var tmp_img_url_array=[];
            var tmp_img_title_array=[];
            for(var i=0;i<images.length;i++){
                tmp_img_url_array.push(images[i].img);
                tmp_img_title_array.push(images[i].title);
            };
            localStorage.setItem("tmp_img_url",tmp_img_url_array.join("<%%>"));
            localStorage.setItem("tmp_img_title",tmp_img_title_array.join("<%%>"));

        }else{
            localStorage.removeItem("tmp_img_url");
            localStorage.removeItem("tmp_img_title");
        }

    }
    var loadMusic = function (data){
        var locationMusicSrc = localStorage.getItem("musicSrc");
        if(locationMusicSrc){
            Util.musicPlay("tmpAudio",locationMusicSrc,"loop");
        }else if(data.music){
            Util.musicPlay("tmpAudio",data.music.linkaddr,"loop");
        }
    }
    var renderDefaultTmpl = function (data){
        require(["./../template/01_tmp_shuye/js/shuye"],function(ShuYe) {
            //var ShuYe = require();
            Util.clearTimerTmp();
            ShuYe.init(data);
            loadMusic(data);
        })
    }
    return {
        init:init
    }
});