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
        $(document).off('click','.add_img').on('click','.add_img',addphoto);
        $(document).off('click','.deleImg').on('click','.deleImg',deleImg);
        $(document).off('click','.addnote_btn_true_js').on('click','.addnote_btn_true_js',setPhoto);
        $(document).off('click','.addnote_btn_false_js').on('click','.addnote_btn_false_js',backUrl);
        $(document).off('click','.btn_prev').on('click','.btn_prev',thisprev);
        $(document).off('click','.btn_next').on('click','.btn_next',thisnext);
        $(document).off("change","#addImg").on('change','#addImg',function(){
            //alert(123);
            $.ajaxFileUpload({
                url: URL.baseURLForward1 + 'api/images/upload',
                type:"post",
                secureuri: false,
                fileElementId: 'addImg',
                data: {apikey:'flzxsqcysyhljt',prefix:'jiajiaku'},
                //dataType: 'json',
                success: function(data, status){
                    //alert($(data).find("body").html())
                    var thisdata = JSON.parse($(data).find("pre").html()).data[0];
                    var oldlist = localStorage.getItem('phoneList');
                    var oldcommentlist=localStorage.getItem('commentList')
                    if(!oldlist || oldlist.length==0){
                        oldlist=[];
                        oldcommentlist=[];
                    }else {
                        oldlist = oldlist.split('<%%>');
                        oldcommentlist=oldcommentlist.split("<%%>");
                    }
                    oldlist.push(thisdata);
                    oldcommentlist.push("");
                    localStorage.setItem('phoneList',oldlist.join("<%%>"));
                    localStorage.setItem('commentList',oldcommentlist.join("<%%>"));

                    renderContainer(oldlist);
                },
                error : function (){
                    //alert("error");
                }
            })
            //alert(222);
        });

    }
    var addphoto = function(){
        //$('#addImg').trigger('click');
        $("#addImg").triggerFastClick();


    }
    var backUrl = function(){
        var oldlist = localStorage.getItem('phoneList') ? localStorage.getItem('phoneList').split("<%%>") : [] ;
        if($('#photo > div').eq(1).hasClass('active')){
            $('#photoOne').addClass('active');
            $('#photoTwo').removeClass('active');
            renderContainer(oldlist);
        }else{
            window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem(Final.USER_ID) || -1);
        }
    }
    var setPhoto = function(){
        var userid = localStorage.getItem(Final.USER_ID);
        var oldarr = localStorage.getItem('phoneList').split("<%%>");
        var oldComent = localStorage.getItem('commentList').split("<%%>");
        var newArr = [oldarr,oldComent]
       /* var oldComment =
        var randerData = [];
        for(var i = 0; i < oldarr.length; i++){
            var randerObj = {};
                randerObj.img =
        }*/


        if($('#photo div').eq(0).hasClass('active')){
            renderContainertwo(newArr);
        }else{
          var divLength = $(".miaoshu_here textarea");
          var commentArr = [];
          for(var i = 0; i < divLength.length ; i++){
              var val = $(divLength[i]).val();
              commentArr.push(val);
          }
            localStorage.setItem('commentList',commentArr.join("<%%>"));
            var imgArr = [];
            for(var i = 0; i < oldarr.length; i++){
                var thisobj = {}
                thisobj.img = oldarr[i];
                thisobj.title = commentArr[i];
                imgArr.push(thisobj);
            }
            var obj = {
                userid :userid,
                images : imgArr,
                diaryid:0
            }
            if(localStorage.getItem(Final.NOTE_ID)){
                obj.diaryid=localStorage.getItem(Final.NOTE_ID)
            }
            $.ajax({
                url:URL.baseURLForward+"/diary/savetempimg",
                data:JSON.stringify( obj),
                contentType: 'application/json',
                type: 'POST',
                success: function (res){
                    alert(window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem(Final.USER_ID) || -1));
                    window.tmpobj.noteId=-1;
                    window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem(Final.USER_ID) || -1);
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
                // setTimeout(function(){
                //     pubu();
                // },10);
                if(data.length>0){
                    setTimeout(function(){
                        pubu();
                    },10);
                }

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
        var thisdata = localStorage.getItem('phoneList').split("<%%>");
        var thiscomment = localStorage.getItem('commentList').split("<%%>");
            thisdata.splice(index, 1);
            thiscomment.splice(index,1);
            localStorage.setItem('phoneList',thisdata.join("<%%>"));
            localStorage.setItem('commentList',thiscomment.join("<%%>"));
            renderContainer(thisdata)

    }
    var requestPhotoList = function (){

        localStorage.removeItem("phoneList");
        localStorage.removeItem("commentList");
        if(localStorage.getItem("tmp_img_url")){
            localStorage.setItem('phoneList',localStorage.getItem("tmp_img_url"));
            localStorage.setItem('commentList',localStorage.getItem("tmp_img_title"));

        }
        var tmpData=localStorage.getItem("tmp_img_url") ? localStorage.getItem("tmp_img_url").split("<%%>") : [];
        renderContainer(tmpData);

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
        var oldarr = localStorage.getItem('phoneList').split("<%%>");
        var oldcommentarr = localStorage.getItem('commentList').split("<%%>");
        if(index>0){
                var temp1 = oldarr[index];
                var temp2 = oldarr[index-1];
                var temp_1=oldcommentarr[index];
                var temp_2=oldcommentarr[index-1];
                oldarr[index] = temp2;
                oldarr[index-1] = temp1;
                oldcommentarr[index]=temp_2;
                oldcommentarr[index-1]=temp_1;
            localStorage.setItem('phoneList',oldarr.join("<%%>"));
            localStorage.setItem('commentList',oldcommentarr.join("<%%>"));
            renderContainer(oldarr);
            pubu();
        }

    };
    var thisnext = function(){
        var index=parseInt($(this).parents(".photo_here").index())-1;
        var oldarr = localStorage.getItem('phoneList').split("<%%>");
        var oldcommentarr = localStorage.getItem('commentList').split("<%%>");
        if(index<oldarr.length-1){
            var temp1 = oldarr[index];
            var temp2 = oldarr[index+1];
            var temp_1=oldcommentarr[index];
            var temp_2=oldcommentarr[index+1];

            oldarr[index] = temp2;
            oldarr[index+1] = temp1;
            oldcommentarr[index]=temp_2;
            oldcommentarr[index+1]=temp_1;
            localStorage.setItem('phoneList',oldarr.join("<%%>"));
            localStorage.setItem('commentList',oldcommentarr.join("<%%>"));
            renderContainer(oldarr);
            pubu();
        }
    };
    return {
        init:init
    }
});