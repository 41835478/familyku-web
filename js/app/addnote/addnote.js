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
                    oldlist = oldlist.split(',');
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
    var renderContainer = function (data){
        Render.render({
            wrap: $('#main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_addnote,
                tmplData: data
            },
            afterRender: function () {
                //$("#musiclist_"+data[0].id).show();
                //requestPhotos();
                setTimeout(function(){
                    pubu();
                },10);
            },

        });
    };
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
    return {
        init:init
    }
});