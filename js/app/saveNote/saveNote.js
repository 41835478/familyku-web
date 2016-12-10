/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal','common/util'], function (Render, URL, BaseCookie, Final,Util) {
    var TMPL = {
        tmpl_saveNote: 'app/saveNote/tmpl_saveNote'
    }
    var init=function (){
        initEvent();
        checkuser();
        renderContainer();
    };
    var initEvent = function(){
        $(document).off('click','#postNote').on('click','#postNote',postNote);
        $(document).off('click','#backUrl').on('click','#backUrl',backUrl);
    }
    var renderContainer = function (){
        Render.render({
            wrap: $('#main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_saveNote,
                tmplData: ''
            },
            afterRender: function () {


            }
        });
    };
    var backUrl = function(){
        window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem("userId") || -1);
    }
    var checkuser = function(){
        var userid = localStorage.getItem(Final.USER_ID);
        var musicid = localStorage.getItem(Final.MUSIC_ID);
        var templateid = localStorage.getItem(Final.TMP_ID);
        if(!userid || !musicid || !templateid){
            backUrl();
        }
    }
    var postNote = function(){
      var userid = localStorage.getItem(Final.USER_ID);
      var musicid = localStorage.getItem(Final.MUSIC_ID);
      var templateid = localStorage.getItem(Final.TMP_ID);
      var cover = localStorage.getItem('phoneList').split("<%%>")[0];
      var photoTitle = $('#myPhotoT').val();
      var photoCom = $('#myPhotoC').val();
      var obj = {
          "userid": userid,
          "diary": {
              "cover": cover,
              "title": photoTitle,
              "templateid": templateid,
              "musicid": musicid,
              "city": "北京"
          }
      }
        $.ajax({
            url:URL.baseURLForward+"/diary/save",
            data:JSON.stringify( obj),
            contentType: 'application/json',
            type: 'POST',
            success: function (res){
                backUrl();
            }
        });
    };
    return {
        init:init
    }
});