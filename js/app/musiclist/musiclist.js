/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal'], function (Render, URL, BaseCookie, Final) {
    var token =localStorage.getItem("token") || "";
    var TMPL = {
        tmpl_musiclist: 'app/musiclist/tmpl_musiclist',
        tmpl_musiclist_item:'app/musiclist/tmpl_musiclist_item'
    }
    var init=function (){
        initEvent();
        requestHeaderList();
    };
    var initEvent = function (){
        $(document).off("click",".musiclist_header_js").on("click",".musiclist_header_js",checkNavFn);
        //$(document).off("click",".tmplist_ul_js li").on("click",".musiclist_ul_js li",musiclistClickFn);
        $(document).off("click",".musiclist_item_js").on("click",".musiclist_item_js",musiclistItemClickFn);
        $(document).off("click",".audition_btn_js").on("click",".audition_btn_js",auditionFn);
        $(document).off("click",".musiclist_btn_true_js").on("click",".musiclist_btn_true_js",btnTrueClickFn);
        $(document).off("click",".musiclist_btn_false_js").on("click",".musiclist_btn_false_js",btnFalseClickFn);
    };
    var btnFalseClickFn = function (){
<<<<<<< HEAD
        window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem(Final.USER_ID) || -1);
=======
        window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem(Final.USER_ID) || -1)+"/"+localStorage.getItem("token");
>>>>>>> 14628d7194b36db9b69f1aa20e872bd698168588
    }
    var btnTrueClickFn = function (){
        var musicItem= $(".musiclist_box>.active");
        if(musicItem.length>0){
            var musicSrc=musicItem.find(".audition_btn_js").attr("data-src");
            var musicId=musicItem.attr("data-musicId");
            if(musicSrc && musicId){
                localStorage.setItem(Final.MUSIC_SRC,musicSrc);
                localStorage.setItem(Final.MUSIC_ID,musicId);
                btnFalseClickFn();
            }
        }
    }
    var auditionFn = function (){
        if($(this).hasClass("icon-zanting")){
            $("#musicListAudio").get(0).pause();
            $(".audition_btn_js").removeClass("icon-zanting").addClass("icon-bofang");
        }else {
            var src=$(this).attr("data-src");
            $(".audition_btn_js").removeClass("icon-zanting").addClass("icon-bofang")
            $(this).removeClass("icon-bofang").addClass("icon-zanting");
            $("#musicListAudio").get(0).src=src;
            $("#musicListAudio").get(0).play();
        }
    }
    var musiclistItemClickFn = function (){
        var musicId= $(this).attr("data-musicId");
        // console.log(musicId);
        $(".musiclist_item_js").removeClass("active");
        $(this).addClass("active");
        // if(musicId){
        //     localStorage.setItem("familyku_tmpId",tmpId);
        //     console.log(tmpId);
        //     window.location.href=window.location.href.split("#")[0]+"#preview";
        // }
    };
    var checkNavFn= function (){
        var tmpId = $(this).attr("data-id");
        if(tmpId){
            $(".musiclist_header_js").removeClass("active");
            $(this).addClass("active");
            requestTmpList({cateId:tmpId});
            // $(".big_box ul").hide();
            // $("#tmplist_"+tmpId).show();
        }

    }
    var renderContainer = function (data){
        Render.render({
            wrap: $('#main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_musiclist,
                tmplData: data
            },
            afterRender: function () {
                $("header ul li[data-id="+data[0].id+"]").show().addClass("active");
                //$("#tmplist_"+data[0].id).show();
                //requestPhotos();
                var tmpId=$("header ul li").attr("data-id");
                if(tmpId){
                    var param={cateId:tmpId}
                    requestTmpList(param);
                }

            }
        });
    };
    var renderTmpItem = function (data){
        //debugger;
        Render.render({
            wrap: $('.musiclist_box'),
            tmpl: {
                tmplName: TMPL.tmpl_musiclist_item,
                tmplData: data
            },
            afterRender: function () {
                //$("header ul li[data-id="+data[0].id+"]").show().addClass("active");
                //$("#tmplist_"+data[0].id).show();
                //requestPhotos();
                //requestTmpList();
            }
        });
    }
    var requestHeaderList = function (){
        $.ajax({
            url:URL.baseURLForward+"/music/cate/list", // URL.baseURL9 + 'jijing_answers/web_mark',
            data: {
                token:token || "人渣"
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
    var requestTmpList = function (param){
        if(param.cateId){
            var data={}
            data.cateid=param.cateId;
            data.pageno=1;
            data.token=token || "";
            $.ajax({
                url:URL.baseURLForward+"/music/list", // URL.baseURL9 + 'jijing_answers/web_mark',
                data: data,
                dataType:"json",
                type: 'get',
                //headers: {
                //    token:token
                //},
                success: function (response){
                    if(response.code==Final.RESPONSE_STATUS.success){
                        var data=response.data;
                        if(data){
                            renderTmpItem(data);
                        }
                    }
                }
            });
        }

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