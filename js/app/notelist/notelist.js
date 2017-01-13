/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal'], function (Render, URL, BaseCookie, Final) {
    var tmpNoteId;
<<<<<<< HEAD
=======
    var token='o3uXYvzwVYfJC4b1RhoZGkCSMI3w';
>>>>>>> 14628d7194b36db9b69f1aa20e872bd698168588
    var TMPL = {
        tmpl_notelist: 'app/notelist/tmpl_notelist',
        //tmpl_musiclist_item:'app/musiclist/tmpl_musiclist_item'
    };
<<<<<<< HEAD
    var init=function (){
=======
    var init=function (param){
        if(param&& param.userId&&param.token){
            localStorage.setItem("userId",param.userId);
            localStorage.setItem("token",param.token);
            token=param.token;
        }
>>>>>>> 14628d7194b36db9b69f1aa20e872bd698168588
        initEvent();
        //initWXShare();
        requestNoteList();
    };
    var initWXShare = function (){
        $.ajax({
            url:"/action2/connect/oauth2/authorize?appid=wx7c03766dfc8fa1d3&redirect_uri=http://angangjonny.eicp.net/oauth&response_type=code&scope=snsapi_base&state=1#wechat_redirect",
            type:'get',
            success:function (response){
                alert(response);
                alert($(response).find("body").html());
                console.log(arguments);
            }

        })
        return;
        $("#oauthIframe").on("load",function (){
            //debugger;
                console.log($(document.getElementById('oauthIframe').contentWindow.document.body).html());
        });
        $("#oauthIframe").get(0).src="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7c03766dfc8fa1d3&redirect_uri=http://angangjonny.eicp.net/oauth&response_type=code&scope=snsapi_base&state=1#wechat_redirect";
        //$("#oauthIframe").get(0).load();
        //$("#oauthIframe").load();
    }
    var initEvent = function (){
        $(document).off("click",".btn_edit_js").on("click",".btn_edit_js",noteEditClikFn);
        $(document).off("click",".btn_delete_js").on("click",".btn_delete_js",deleteNoteFn);
        $(document).off("click","#noteDeleteSure").on("click","#noteDeleteSure",deleteNoteRequest);

    };
    var deleteNoteRequest = function (){
        if(tmpNoteId){
            // $("#sureDeleteModal").modal("hide");
            // return;
            $.ajax({
                url:URL.baseURLForward+"diary/delete", // URL.baseURL9 + 'jijing_answers/web_mark',
                data: {
<<<<<<< HEAD
                    id:tmpNoteId
                },
                dataType:"json",
                type: 'get',
                //headers: {
                //    token:token
                //},
=======
                    id:tmpNoteId,
                    token:token,
                },
                dataType:"json",
                type: 'get',
                // headers: {
                //    token:token
                // },
>>>>>>> 14628d7194b36db9b69f1aa20e872bd698168588
                success: function (response){
                    if(response.code==Final.RESPONSE_STATUS.success){
                        $("#noteDeleteSure").modal("hide");
                        // window.setTimeout(function (){
                        //     requestNoteList()
                        // },150);
                    }
                }
            });
        }
    }
    var deleteNoteFn = function (){
        var noteid=$(this).attr("data-id");
        if(noteid){
            tmpNoteId=noteid;
            $("#sureDeleteModal").modal("show");
        }
    }
    var noteEditClikFn = function (){
        var userId=localStorage.getItem(Final.USER_ID);
        var noteId=$(this).attr("data-id");
        if(userId&& noteId){
            window.tmpobj.noteId=noteId;
            localStorage.setItem(Final.NOTE_ID,noteId);
<<<<<<< HEAD
            window.location.href=window.location.href.split("#")[0]+"#preview/"+userId;
=======
            window.location.href=window.location.href.split("#")[0]+"#preview/"+userId+"/"+localStorage.getItem("token");
>>>>>>> 14628d7194b36db9b69f1aa20e872bd698168588
        }
    };
    var btnFalseClickFn = function (){

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
                $(".xc_img_js img").load(function (){
                    var width=$(".xc_img_js").width();
                    var height=$(".xc_img_js").height();
                    var imgWidth=$(this).get(0).naturalWidth;
                    var imgHeight=$(this).get(0).naturalHeight;
                    debugger;
                    if(width/height>imgWidth/imgHeight){
                        $(this).css("height",height);
                    }else{
                        $(this).css("width",width);
                    }
                    //$(this).width();
                });
                $('#sureDeleteModal').on('hidden.bs.modal', function () {
                    tmpNoteId=null;
                    requestNoteList();
                })
            }
        });
    }
    var requestNoteList = function (){
        $.ajax({
            url:URL.baseURLForward+"diary/list", // URL.baseURL9 + 'jijing_answers/web_mark',
            data: {
<<<<<<< HEAD
                userid:localStorage.getItem(Final.USER_ID) || -1
=======
                userid:localStorage.getItem(Final.USER_ID) || -1,
                token:token,
>>>>>>> 14628d7194b36db9b69f1aa20e872bd698168588
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