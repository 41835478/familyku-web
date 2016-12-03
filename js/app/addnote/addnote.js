/**
 * Created by jxy on 16/11/26.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal','common/ajaxfileupload'], function (Render, URL, BaseCookie, Final) {
    var TMPL = {
        tmpl_addnote: 'app/addnote/tmpl_addnote'
    }
    var init=function (){
        initEvent();
        requestPhotoList();
    };
    var initEvent = function(){
        $(document).off('click','.iadd_img').on('click','.add_img',addphoto);
        $(document).off('click','.deleImg').on('click','.deleImg',deleImg);
        $(document).off('click','.btn_true').on('click','.btn_true',setPhoto);
        $(document).off('click','.btn_false').on('click','.btn_false',backUrl);
        $(document).off('click','.btn_prev').on('click','.btn_prev',thisprev);
        $(document).off('click','.btn_next').on('click','.btn_next',thisnext);
        $(document).on('change','#addImg',function(){
            $.ajaxFileUpload({
                url: URL.baseURLForward1 + 'api/images/upload',
                type:"post",
                secureuri: false,
                fileElementId: 'addImg',
                data: {apikey:'flzxsqcysyhljt',prefix:'jiajiaku'},
                //dataType: 'json',
                success: function(data, status){
                    var thisdata = JSON.parse($(data).find("pre").html()).data[0];
                    var oldlist = localStorage.getItem('phoneList');
                    if(!oldlist || oldlist.length==0){
                        oldlist=[];
                    }else {
                        oldlist = oldlist.split(',');
                    }
                    oldlist.push(thisdata);
                    localStorage.setItem('phoneList',oldlist);
                    renderContainer(oldlist);
                }
            })
        })
    }
    var addphoto = function(){
        $('#addImg').trigger('click');

    }
    var backUrl = function(){
        var oldlist = localStorage.getItem('phoneList').split(',');
        if($('#photo > div').eq(1).hasClass('active')){
            $('#photoOne').addClass('active');
            $('#photoTwo').removeClass('active');
            renderContainer(oldlist);
        }else{
            window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem("userId") || -1);
        }
    }
    var setPhoto = function(){
        var userid = 57 || localStorage.getItem('userId');
        var oldarr = localStorage.getItem('phoneList').split(',');
        if($('#photo div').eq(0).hasClass('active')){
            renderContainertwo(oldarr);
        }else{
          var divLength = $(".miaoshu_here textarea");
          var commentArr = [];
          for(var i = 0; i < divLength.length ; i++){
              var val = $(divLength[i]).val();
              commentArr.push(val);
          }
            localStorage.setItem('commentList',commentArr);
            var imgArr = [];
            for(var i = 0; i < oldarr.length; i++){
                var thisobj = {}
                thisobj.img = oldarr[i];
                thisobj.title = commentArr[i];
                imgArr.push(thisobj);
            }
            var obj = {
                userid :userid,
                images : imgArr
            }
            $.ajax({
                url:URL.baseURLForward+"/diary/savetempimg",
                data:JSON.stringify( obj),
                contentType: 'application/json',
                type: 'POST',
                success: function (res){
                    window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem("userId") || -1);
                }
            });
        }



    }
    var renderContainer = function (data){
        Render.render({
            wrap: $('#main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_addnote,
                tmplData: data
            },
            afterRender: function () {
                setTimeout(function(){
                    pubu();
                },10);
            },

        });
    };
    var renderContainertwo = function (data){
        Render.render({
            wrap: $('#main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_addnote,
                tmplData: data
            },
            afterRender: function () {
                $('#photoOne').removeClass('active');
                $('#photoTwo').addClass('active');
            },

        });
    };
    var deleImg = function(){
        var index = $('.deleImg').attr('data-index');
        var thisdata = localStorage.getItem('phoneList').split(',');
            thisdata.splice(index, 1);
            localStorage.setItem('phoneList',thisdata);
            renderContainer(thisdata)

    }
    var requestPhotoList = function (){
        $.ajax({
            url:URL.baseURLForward+"diary/tempinfo?userid=1 ",
            dataType:"json",
            type: 'get',
            success: function (res){
                var thisdata = [];
                $.each(res.data.images,function(i,v){
                    thisdata.push(v.img);
                })
                renderContainer(thisdata);
                localStorage.setItem('phoneList',thisdata);
            }
        });
    };
    var pubu = function (){
        var width=$("#photo").width()*.04;
        var left=width;
        var right=width;
        var lengtha=$("#photo .photo_here").length;
        for(var i=0;i<lengtha;i++){
            var _this=$(".photo_here:eq("+i+")");
            var heighta=_this.height();
            if( left-right>0){
                _this.css({"top":right});
                right+=heighta+width;
                _this.css({"left":"52%"});
            }else{
                _this.css({"top":left});
                left+=heighta+width;
                _this.css({"left":"4%"});
            };
        };
    }
    var thisprev = function(){
        var index=parseInt($(this).parents(".photo_here").index())-1;
        var oldarr = localStorage.getItem('phoneList').split(',');
        if(index>0){
                var temp1 = oldarr[index];
                var temp2 = oldarr[index-1];

                oldarr[index] = temp2;
                oldarr[index-1] = temp1;
            localStorage.setItem('phoneList',oldarr);
            renderContainer(oldarr);
            pubu();
        }

    };
    var thisnext = function(){
        var index=parseInt($(this).parents(".photo_here").index())-1;
        var oldarr = localStorage.getItem('phoneList').split(',');
        if(index<oldarr.length-1){
            var temp1 = oldarr[index];
            var temp2 = oldarr[index+1];

            oldarr[index] = temp2;
            oldarr[index+1] = temp1;
            localStorage.setItem('phoneList',oldarr);
            renderContainer(oldarr);
            pubu();
        }
    };
    return {
        init:init
    }
});