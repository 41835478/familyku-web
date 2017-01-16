/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal','common/util'], function (Render, URL, BaseCookie, Final,Util) {
    var token=localStorage.getItem("token") || "";
    var TMPL = {
        tmpl_saveNote: 'app/saveNote/tmpl_saveNote'
    }
    var init=function (){
        Util.getDefaultAddress();
        initEvent();
        checkuser();
        renderContainer();
    };
    var initEvent = function(){
        $(document).off('click','#postNote').on('click','#postNote',postNote);
        $(document).off('click','#backUrl').on('click','#backUrl',backUrl);
    };
    var requestDiaryInfo = function (){
        if(localStorage.getItem(Final.NOTE_ID)){
            var param={};
            param.id=localStorage.getItem(Final.NOTE_ID);
            param.token=token;
            $.ajax({
                url:URL.baseURLForward+"/diary/info", // URL.baseURL9 + 'jijing_answers/web_mark',
                data: param,
                dataType:"json",
                type: 'get',
                //headers: {
                //    token:token
                //},
                success: function (response){
                    if(response.code==Final.RESPONSE_STATUS.success){
                        var data=response.data;
                        $('#myPhotoT').val(data.diary.title);
                        $('#myPhoneC').val(data.diary.info);

                    }
                }
            });
        }
    }
    var renderContainer = function (){
        Render.render({
            wrap: $('#main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_saveNote,
                tmplData: ''
            },
            afterRender: function () {
                requestDiaryInfo()
            }
        });
    };
    var backUrl = function(){
        window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem(Final.USER_ID) || -1);
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
      var photoCom = $('#myPhoneC').val();
      var obj = {
          "userid": userid,
          "diary": {
              "id":0,
              "cover": cover,
              "title": photoTitle,
              "templateid": templateid,
              "musicid": musicid,
              "info":photoCom,
              "city": localStorage.getItem(Final.ADDRESS_USER) || ""
          }
      }
      if(localStorage.getItem(Final.NOTE_ID)){
          obj.diary.id=localStorage.getItem(Final.NOTE_ID);
      }
        obj.token=token;
        $.ajax({
            url:URL.baseURLForward+"/diary/save",
            data:JSON.stringify( obj),
            contentType: 'application/json',
            type: 'POST',
            success: function (res){
                if(res.code==Final.RESPONSE_STATUS.success){
                    localStorage.removeItem(Final.NOTE_ID);
                    window.location.href=window.location.href.split("#")[0]+"#notelist"+"/"+localStorage.getItem(Final.USER_ID)+"/"+localStorage.getItem("token");
                }
                //backUrl();
            }
        });
    };
    return {
        init:init
    }
});