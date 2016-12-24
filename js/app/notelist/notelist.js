/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal'], function (Render, URL, BaseCookie, Final) {
    var tmpNoteId;
    var TMPL = {
        tmpl_notelist: 'app/notelist/tmpl_notelist',
        //tmpl_musiclist_item:'app/musiclist/tmpl_musiclist_item'
    };
    var init=function (){
        initEvent();
        requestNoteList();
    };
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
                    id:tmpNoteId
                },
                dataType:"json",
                type: 'get',
                //headers: {
                //    token:token
                //},
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
            window.location.href=window.location.href.split("#")[0]+"#preview/"+userId;
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