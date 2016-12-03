/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal'], function (Render, URL, BaseCookie, Final) {
    var TMPL = {
        tmpl_notelist: 'app/notelist/tmpl_notelist',
        //tmpl_musiclist_item:'app/musiclist/tmpl_musiclist_item'
    }
    var init=function (){
        initEvent();
        requestNoteList();
    };
    var initEvent = function (){
        //$(document).off("click",".musiclist_header_js").on("click",".musiclist_header_js",checkNavFn);
        //$(document).off("click",".tmplist_ul_js li").on("click",".musiclist_ul_js li",musiclistClickFn);
        //$(document).off("click",".musiclist_item_js").on("click",".musiclist_item_js",musiclistItemClickFn);
        //$(document).off("click",".audition_btn_js").on("click",".audition_btn_js",auditionFn);
        //$(document).off("click",".musiclist_btn_true_js").on("click",".musiclist_btn_true_js",btnTrueClickFn);
        //$(document).off("click",".musiclist_btn_false_js").on("click",".musiclist_btn_false_js",btnFalseClickFn);
    };
    var btnFalseClickFn = function (){
        window.location.href=window.location.href.split("#")[0]+"#preview";
    }
    var renderContainer = function (data){
        //debugger;
        Render.render({
            wrap: $('.main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_notelist,
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
    var requestNoteList = function (){
        $.ajax({
            url:URL.baseURLForward+"diary/list", // URL.baseURL9 + 'jijing_answers/web_mark',
            data: {
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
                        console.log("guani ")
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