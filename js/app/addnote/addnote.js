/**
 * Created by jxy on 16/11/26.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal','common/ajaxfileupload'], function (Render, URL, BaseCookie, Final) {
    var token = localStorage.getItem("token") || "";
    var TMPL = {
        tmpl_addnote: 'app/addnote/tmpl_addnote'
    };
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext('2d');
    //    瓦片canvas
    var tCanvas = document.createElement("canvas");
    var tctx = tCanvas.getContext("2d");
    var maxsize = 100 * 1024;

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
        $(document).off("change","#addImg").on('change','#addImg',compressFn);

    };
    var compressFn = function (){
        //alert(123);
        if (!this.files.length) return;
        var files = Array.prototype.slice.call(this.files);
        if (files.length > 9) {
            alert("最多同时只可上传9张图片");
            return;
        }
        files.forEach(function(file, i) {
            if (!/\/(?:jpeg|png|gif)/i.test(file.type)) return;
            var reader = new FileReader();
            // var li = document.createElement("li");
//          获取图片大小
            var size = file.size / 1024 > 1024 ? (~~(10 * file.size / 1024 / 1024)) / 10 + "MB" : ~~(file.size / 1024) + "KB";
            //li.innerHTML = '<div class="progress"><span></span></div><div class="size">' + size + '</div>';
            //$(".img-list").append($(li));
            reader.onload = function() {
                var result = this.result;
                var img = new Image();
                img.src = result;
                //$(li).css("background-image", "url(" + result + ")");
                //如果图片大小小于100kb，则直接上传
                if (result.length <= maxsize) {
                    img = null;
                    upload(result, file.type);
                    return;
                }
//      图片加载完毕之后进行压缩，然后上传
                if (img.complete) {
                    callback();
                } else {
                    img.onload = callback;
                }
                function callback() {
                    var data = compress(img);
                    upload(data, file.type);
                    img = null;
                }
            };
            reader.readAsDataURL(file);
        })
    }
    //    图片上传，将base64的图片转成二进制对象，塞进formdata上传
    // function upload(basestr, type, $li) {
    //     var text = window.atob(basestr.split(",")[1]);
    //     var buffer = new Uint8Array(text.length);
    //     var pecent = 0, loop = null;
    //     for (var i = 0; i < text.length; i++) {
    //         buffer[i] = text.charCodeAt(i);
    //     }
    //     var blob = getBlob([buffer], type);
    //     var xhr = new XMLHttpRequest();
    //     var formdata = getFormData();
    //     formdata.append('file', blob);
    //     formdata.append('apikey','flzxsqcysyhljt');
    //     formdata.append('prefix','jiajiaku');
    //     xhr.open('post', '/action1/api/images/upload');
    //     xhr.setRequestHeader("Content-Type", "multipart/form-data;boundary=----WebKitFormBoundaryxqUFQPZ9nNIVJ1be");
    //     //xhr.setRequestHeader("Connection", "keep-alive;");
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState == 4 && xhr.status == 200) {
    //             var jsonData = JSON.parse(xhr.responseText);
    //             var imagedata = jsonData[0] || {};
    //             var text = imagedata.path ? '上传成功' : '上传失败';
    //             console.log(text + '：' + imagedata.path);
    //             clearInterval(loop);
    //             //当收到该消息时上传完毕
    //             $li.find(".progress span").animate({'width': "100%"}, pecent < 95 ? 200 : 0, function() {
    //                 $(this).html(text);
    //             });
    //             if (!imagedata.path) return;
    //             $(".pic-list").append('<a href="' + imagedata.path + '">' + imagedata.name + '（' + imagedata.size + '）<img src="' + imagedata.path + '" /></a>');
    //         }
    //     };
    //     //数据发送进度，前50%展示该进度
    //     xhr.upload.addEventListener('progress', function(e) {
    //         if (loop) return;
    //         pecent = ~~(100 * e.loaded / e.total) / 2;
    //         $li.find(".progress span").css('width', pecent + "%");
    //         if (pecent == 50) {
    //             mockProgress();
    //         }
    //     }, false);
    //     //数据后50%用模拟进度
    //     function mockProgress() {
    //         if (loop) return;
    //         loop = setInterval(function() {
    //             pecent++;
    //             $li.find(".progress span").css('width', pecent + "%");
    //             if (pecent == 99) {
    //                 clearInterval(loop);
    //             }
    //         }, 100)
    //     }
    //     xhr.send(formdata);
    // }
    var upload = function (){
        $.ajaxFileUpload({
            url: URL.baseURLForward1 + 'api/images/upload',
            type:"post",
            secureuri: false,
            fileElementId: 'addImg',
            data: {apikey:'flzxsqcysyhljt',prefix:'jiajiaku',token:token},
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
    }
    var compress = function (img){
        var initSize = img.src.length;
        var width = img.width;
        var height = img.height;
        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
        var ratio;
        if ((ratio = width * height / 4000000) > 1) {
            ratio = Math.sqrt(ratio);
            width /= ratio;
            height /= ratio;
        } else {
            ratio = 1;
        }
        canvas.width = width;
        canvas.height = height;
//        铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //如果图片像素大于100万则使用瓦片绘制
        var count;
        if ((count = width * height / 1000000) > 1) {
            count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
//            计算每块瓦片的宽和高
            var nw = ~~(width / count);
            var nh = ~~(height / count);
            tCanvas.width = nw;
            tCanvas.height = nh;
            for (var i = 0; i < count; i++) {
                for (var j = 0; j < count; j++) {
                    tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                    ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                }
            }
        } else {
            ctx.drawImage(img, 0, 0, width, height);
        }
        //进行最小压缩
        var ndata = canvas.toDataURL('image/jpeg', 0.1);
        console.log('压缩前：' + initSize);
        console.log('压缩后：' + ndata.length);
        console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
        return ndata;
    }
    /**
     * 获取blob对象的兼容性写法
     * @param buffer
     * @param format
     * @returns {*}
     */
    var  getBlob = function (buffer, format) {
        try {
            return new Blob(buffer, {type: format});
        } catch (e) {
            var bb = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder);
            buffer.forEach(function(buf) {
                bb.append(buf);
            });
            return bb.getBlob(format);
        }
    }
    /**
     * 获取formdata
     */
    var  getFormData = function() {
        var isNeedShim = ~navigator.userAgent.indexOf('Android')
            && ~navigator.vendor.indexOf('Google')
            && !~navigator.userAgent.indexOf('Chrome')
            && navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() <= 534;
        return isNeedShim ? new FormDataShim() : new FormData()
    }
    /**
     * formdata 补丁, 给不支持formdata上传blob的android机打补丁
     * @constructor
     */
    var  FormDataShim = function () {
        console.warn('using formdata shim');
        var o = this,
            parts = [],
            boundary = Array(21).join('-') + (+new Date() * (1e16 * Math.random())).toString(36),
            oldSend = XMLHttpRequest.prototype.send;
        this.append = function(name, value, filename) {
            parts.push('--' + boundary + '\r\nContent-Disposition: form-data; name="' + name + '"');
            if (value instanceof Blob) {
                parts.push('; filename="' + (filename || 'blob') + '"\r\nContent-Type: ' + value.type + '\r\n\r\n');
                parts.push(value);
            }
            else {
                parts.push('\r\n\r\n' + value);
            }
            parts.push('\r\n');
        };
        // Override XHR send()
        XMLHttpRequest.prototype.send = function(val) {
            var fr,
                data,
                oXHR = this;
            if (val === o) {
                // Append the final boundary string
                parts.push('--' + boundary + '--\r\n');
                // Create the blob
                data = getBlob(parts);
                // Set up and read the blob into an array to be sent
                fr = new FileReader();
                fr.onload = function() {
                    oldSend.call(oXHR, fr.result);
                };
                fr.onerror = function(err) {
                    throw err;
                };
                fr.readAsArrayBuffer(data);
                // Set the multipart content type and boudary
                this.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
                XMLHttpRequest.prototype.send = oldSend;
            }
            else {
                oldSend.call(this, val);
            }
        };
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
            window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem(Final.USER_ID) || -1)+"/"+localStorage.getItem("token");
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
            if(localStorage.getItem(Final.NOTE_ID)){
                obj.diaryid=localStorage.getItem(Final.NOTE_ID)
            }
            obj.token=token || "";
            $.ajax({
                url:URL.baseURLForward+"/diary/savetempimg",
                data:JSON.stringify( obj),
                contentType: 'application/json',
                type: 'POST',
                success: function (res){
                    //alert(window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem(Final.USER_ID) || -1));
                    window.tmpobj.noteId=-1;
                    window.location.href=window.location.href.split("#")[0]+"#preview/"+(localStorage.getItem(Final.USER_ID) || -1)+"/"+localStorage.getItem("token");
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
        var index = $(this).attr('data-index');
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