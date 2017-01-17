/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal','common/util'], function (Render, URL, BaseCookie, Final,Util) {
    var token=localStorage.getItem("token") || "";
    var diaryId;
    var TMPL = {
        tmpl_share: 'app/share/tmpl_share'
    };
    var init=function (param){
        initEvent();
        if(param && param.diaryId){
            diaryId=param.diaryId;
            renderContainer();
        }else {
            renderShowMa();
        }

    };
    var initEvent = function (){
        $(document).off("click",".share_menu_js").on("click",".share_menu_js",showShareCover);
        $(document).off("click","#cover").on("click","#cover",showShareCover);
        $(document).off("click",".createAgain_js").on("click",".createAgain_js",createAgainFn);
        $(document).off("click",".showMyList_js").on("click",".showMyList_js",showMyListFn)
    }
    var clearLocalStorage = function (){
        localStorage.removeItem(Final.TMP_ID);
        localStorage.removeItem(Final.PIC_LIST);
    }
    var createAgainFn = function (){
        clearLocalStorage();
        window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem(Final.USER_ID) || -1)+"/"+localStorage.getItem("token");
    }
    var showMyListFn = function (){
        window.location.href=window.location.href.split("#")[0]+"#notelist/"+(localStorage.getItem(Final.USER_ID) || -1)+"/"+localStorage.getItem("token");
    }
    var  showShareCover= function (){
        if($("#cover").is(":hidden")){
            $("#cover").show();
            $("#guide").show();
        }else {
            $("#cover").hide();
            $("#guide").hide();
        }

    }
    var renderShowMa = function (){

    }
    var renderContainer = function (){
        Render.render({
            wrap: $('#main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_share,
                tmplData: ''
            },
            afterRender: function () {

                requestPhotos();
            }
        });
    };
    var requestPhotos = function (){
        var param ={};
        var url=URL.baseURLForward+"/diary/info";
        param.id=diaryId;
        // param.token='o9hRev2hVBGsWusIU9gXEIpr9J4c';
        // param.token=token || "人渣";
        // param.userid=localStorage.getItem(Final.USER_ID) || -1 ;
        // //debugger;
        // if(localStorage.getItem(Final.NOTE_ID) && window.tmpobj && window.tmpobj.noteId==-1){
        //     param.diaryid=localStorage.getItem(Final.NOTE_ID);
        //     //url=URL.baseURLForward+"/diary/info"
        // }else if(localStorage.getItem(Final.NOTE_ID) && window.tmpobj && window.tmpobj.noteId){
        //     param.id=localStorage.getItem(Final.NOTE_ID);
        //     url=URL.baseURLForward+"/diary/info"
        // }else {
        //     localStorage.removeItem(Final.NOTE_ID);
        // }
        $.ajax({
            url:url, // URL.baseURL9 + 'jijing_answers/web_mark',
            data: param,
            dataType:"json",
            type: 'get',
            //headers: {
            //    token:token
            //},
            success: function (response){
               if(response.code==Final.RESPONSE_STATUS.success){
                   var data=response.data;
                   if(data){
                       if(data.diary.userid == localStorage.getItem(Final.USER_ID)){
                           $("#mySelfDiv").show();
                           $("#thirdDiv").hide();
                       }else{
                           $("#mySelfDiv").hide();
                           $("#thirdDiv").show();
                       }
                       renderDefaultTmpl(data);
                       // tmpSaveImgData(data.images);
                       // setDefaultPhoneList(data.images);
                       // localStorage.setItem(Final.MUSIC_ID,data.music.id);
                       // localStorage.setItem(Final.TMP_ID,data.template.id);
                   }
               }
            }
        });
    };
    var setDefaultPhoneList = function (data){
        if(data && data.length>0){
            var tmpArray=[];
            for(var i=0;i<data.length;i++){
                tmpArray.push(data[i].img);
            }
            if(tmpArray.length>0){
                localStorage.setItem(Final.PIC_LIST,tmpArray.join("<%%>"));
            }
        }
    }
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
        if(data.music){
            Util.musicPlay("tmpAudio",data.music.linkaddr,"loop");
        }
    }
    var renderDefaultTmpl = function (data){
        var tmpSrc=Final.TMPL_ID_MAPPING[data.diary.templateid] || "./../template/03_tmp_sinian/js/sinian"
        require([tmpSrc],function(TMPLOBJ) {
            //var ShuYe = require();
            Util.clearTimerTmp();
            TMPLOBJ.init(data);
            loadMusic(data);
        })
    }
    return {
        init:init
    }
});