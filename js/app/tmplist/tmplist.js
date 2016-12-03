/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal',"common/util"], function (Render, URL, BaseCookie, Final,Util) {
    var TMPL = {
        tmpl_tmp: 'app/tmplist/tmpl_tmp',
        tmpl_tmp_item:'app/tmplist/tmpl_tmp_item'
    }
    var init=function (){
        initEvent();
        requestHeaderList();
    };
    var initEvent = function (){
        $(document).off("click",".tmplist_header_js").on("click",".tmplist_header_js",checkNavFn);
        $(document).off("click",".tmplist_ul_js li").on("click",".tmplist_ul_js li",tmpliClickFn);
        $(document).off("clcik",".tmp_btn_false_js").on("click",".tmp_btn_false_js",btnFalseClickFn);
    };
    var btnFalseClickFn = function (){
        window.location.href=window.location.href.split("#")[0]+"#/preview/"+(localStorage.getItem("userId") || -1);
    };
    var tmpliClickFn = function (){
        var tmpId= $(this).attr("data-tmpId");
        if(tmpId){
            localStorage.setItem("familyku_tmpId",tmpId);
            console.log(tmpId);
            window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem("userId") || -1);;
        }
    };
    var checkNavFn= function (){
        var tmpId = $(this).attr("data-id");
        if(tmpId){
            $(".tmplist_header_js").removeClass("active");
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
                tmplName: TMPL.tmpl_tmp,
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
            wrap: $('.big_box'),
            tmpl: {
                tmplName: TMPL.tmpl_tmp_item,
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
    var requestTmpList = function (param){
        if(param.cateId){
            var data={}
            data.cateid=param.cateId;
            data.pageno=1;
            $.ajax({
                url:URL.baseURLForward+"/template/list", // URL.baseURL9 + 'jijing_answers/web_mark',
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
    //var renderDefaultTmpl = function (data){
    //    require(["./../template/01_tmp_shuye/js/shuye"],function(ShuYe) {
    //        //var ShuYe = require();
    //        Util.clearTimerTmp();
    //        ShuYe.init(data);
    //    })
    //}
    return {
        init:init
    }
});