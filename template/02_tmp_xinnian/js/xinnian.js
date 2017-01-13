/**
 * Created by 321 on 2016/10/12.
 */
'use strict'
define(["./../../../js/common/render","./../../../js/app/baseFinal"],function (Render,Final) {
    var userData,
        TMPL = {
        tmpl_shuye: '/template/02_tmp_xinnian/js/tmpl_xinnian.js'
    }
    var init = function (data) {
        console.log("init");
        userData= data;
        $("head").append(' <link type="text/css" rel="stylesheet" href="/template/02_tmp_xinnian/css/xinnian.css?ver=3" />');
        renderContainer();
    }
    var renderContainer = function (){
        Render.render({
            wrap: $('#container'),
            tmpl: {
                tmplName: TMPL.tmpl_shuye,
                tmplData: {}
            },
            afterRender: function(){
                //return;
                initContainer();
            }
        })
    }
    var initContainer = function (){

        var module_inits = [];

        var upload_permission = true;
        var atkname = 'huali';
        function load_init_modules()
        {
            for(var i=0; i<module_inits.length; i++)
            {
                module_inits[i]();
            }
        }
        function call_me(fun)
        {
            module_inits.push(fun);
        }

        var slider_images_url = [];slider_images_url.push('userImg/hn_445211448943.jpg');
        slider_images_url.push('userImg/hn_445211448943.jpg');
        var date = 20161228;
        var zan_num = 0;
        var e_bookid = 'Fpx5HcVlzcqzh6tUDccbZ3SWqjo-y2-Y';
        var e_desc = {"de":"\u6211\u5236\u4f5c\u4e86\u76f8\u518c\uff0c\u6253\u5f00\u770b\u770b\u5427"}["de"];
        var e_openid = null;
        var e_scene = 'xinnian';
        var editmode = false;
        var wxid = 'haoyy';
        var shareid = '';
        var guanzhu_url = 'http://mp.weixin.qq.com/s?__biz=MzI2OTE1ODE5Ng==&mid=556186322&idx=1&sn=ba8b09d58e55b73df38fce1d1a90b0f7#rd';
        var words = {"hn_467579161984":"abc\u2006c\u2006c\u2006c","hn_467579172547":"\u5403\u9971\u554a\u554a\u554a\u554a\u554a"};
        var app = '';
        var onmake = '';
        var e_music_url = 'http://sound.kagirl.net/sound/nianjieshijing.mp3';
        var e_music_title = '';
        var tbssaveoff = false;
        var isguangchang = '';
        var isshow = '';
        var gotomake = '';

        var width;
        var height;
        var Onload_imgs_url;
        var begin_titletime;

        if(userData){
            slider_images_url=[];
            var userImg=userData.images;
            for(var i=0;i<userImg.length;i++){
                slider_images_url.push(userImg[i].img);
            }
            console.log(slider_images_url);
            // slider_images_url=[];
            e_music_url=userData.music.linkaddr;
        }

        var image_size_width=[];
        var image_size_height=[];
        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var timeout0;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;
        var timeout6;

        var delaytime=6000;

        var get_pid = function(url)
        {
            var index1 = url.indexOf("?");
            if(index1 != -1)
            {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        function id(name)
        {
            return document.getElementById(name);
        }
        function load_images()
        {
            reshow = false;
            image_size_width=[];
            image_size_height=[];
            Onload_imgs_url=[];
            image_url_index=0;
            have_num = 0;
            error_num = 0;
            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            showtitle();
            canshow = true;

            bl_keepload = 'first';
            step_load();
        }

        //每次执行加载后10张图片
        var bl_keepload = 'first';
        var step_loadnum = 5;
        function step_load()
        {
            var load_num = 0
            //初步加载X张
            if(image_url_index  == 0 && bl_keepload == 'first')
            {
                console.log('loading continue');
                if(slider_images_url.length > step_loadnum)
                {
                    load_num = step_loadnum;
                    bl_keepload = 'next';
                }
                else
                {
                    load_num = slider_images_url.length;
                    bl_keepload = 'end';
                }
                for(var i = 0; i< load_num; i++)
                {
                    var img=new Image();
                    img.index=i;
                    img.src=slider_images_url[i];
                    img.onload=image_onload;
                    img.onerror= image_onerror;
                    Onload_imgs_url[i] = 'loading';
                }
            }
            else if(bl_keepload == 'end')
            {
                return;
            }
            else
            {
                console.log('loading continue');
                if(slider_images_url.length - image_url_index >step_loadnum*2)
                {
                    load_num = step_loadnum;
                }
                else
                {
                    load_num = slider_images_url.length - image_url_index - step_loadnum;
                    bl_keepload = 'end';
                }
                for(var i = image_url_index +step_loadnum; i< image_url_index + step_loadnum + load_num; i++)
                {
                    var img=new Image();
                    img.index=i;
                    img.src=slider_images_url[i];
                    img.onload=image_onload;
                    img.onerror= image_onerror;
                    Onload_imgs_url[i] = 'loading';
                }
            }
        }

        function image_onerror(event)
        {
            var img = event.target;
            var index = img.index;
            if(index<step_loadnum)
                error_num ++;
            Onload_imgs_url[index] = 'not find';
            console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);
            if((have_num+error_num >= step_loadnum || slider_images_url.length == (have_num+error_num)) && canshow == true)
            {
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime-begin_titletime);
                if(dis_titletime>delaytime)
                {
                    distitle();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout0 = setTimeout(function()
                    {
                        distitle();
                    },dis_titletime);
                }
            }
        }

        function image_onload(event)
        {
            if(reshow == true)
                return;

            var img = event.target;
            var index = img.index;

            if(index<step_loadnum)
            {
                have_num++;
            }
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);

            if((have_num + error_num >= step_loadnum ||slider_images_url.length == (have_num+error_num)) && canshow == true)
            {
                reshow = false;
                canshow =false;
                if(have_num == 0)
                    return;
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                var dis_titletime = Math.abs(end_titletime-begin_titletime);
                if(dis_titletime>delaytime)
                {
                    distitle();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout0 = setTimeout(function()
                    {
                        distitle();
                    },dis_titletime);
                }

            }
        }
        function showtitle()
        {
            id('down1').style.webkitAnimation = 'down1_in 1.2s linear both';
            id('down2').style.webkitAnimation = 'down2_in 1.2s ease-out both';

            id('up1').style.webkitAnimation = 'down1_in 1.5s linear both';
            id('denglong1').style.webkitAnimation = 'denglong_in 1.5s 1s ease-out both';
            id('denglong2').style.webkitAnimation = 'denglong_in 1.5s 1.5s ease-out both';

            id('houzi').style.webkitAnimation = 'houzi_in 3s linear both';
            id('zi2').style.webkitAnimation = 'zi_in 0.5s ease-out 0.5s both';
            id('zi0').style.webkitAnimation = 'zi_in 0.5s ease-out 1s both';
            id('zi1').style.webkitAnimation = 'zi_in 0.5s ease-out 1.6s both';
            id('zi6').style.webkitAnimation = 'zi_in 0.5s ease-out 2.2s both';

            id('xin1').style.webkitAnimation = 'xin1 1s 0.8s linear forwards';
            id('xin2').style.webkitAnimation = 'xin2 1s 0.8s linear forwards';
            id('xin3').style.webkitAnimation = 'xin1 1s 1.3s linear forwards';
            id('xin4').style.webkitAnimation = 'xin2 1s 1.3s linear forwards';
            id('xin5').style.webkitAnimation = 'xin1 1s 1.8s linear forwards';
            id('xin6').style.webkitAnimation = 'xin2 1s 1.8s  linear forwards';
            id('xin7').style.webkitAnimation = 'xin1 1s 2.3s linear forwards';
            id('xin8').style.webkitAnimation = 'xin2 1s 2.3s linear forwards';
            id('xin9').style.webkitAnimation = 'xin11 2s 3s linear forwards infinite';
            id('xin10').style.webkitAnimation = 'xin22 2s 3s linear forwards infinite';

            id('zi').style.webkitAnimation = 'zidiv_in 1s ease-out 3s both';
            id('word1').style.webkitAnimation = 'fadein 1s ease-out 3s both';
            id('pagetitle').style.webkitAnimation = 'title_in 1s ease-out 3s both';
            id('upzi').style.webkitAnimation = 'upzi_in 1s ease-out 3s both';
            id('titlecontent').innerHTML = e_desc;

        }

        function distitle()
        {
            // return;
            id('zi').style.webkitAnimation = 'zidiv_out 1.5s linear both';
            id('pagetitle').style.webkitAnimation = 'title_out 1s linear both';
            id('word1').style.webkitAnimation = 'title_out 1s linear both';

            timeout1 = setTimeout(show1,1000);
        }
        function show1 ()
        {
            setImage('1');
            id('div1v').style.webkitAnimation = 'div1_in 1.2s cubic-bezier(.34,.03,.48,.99) both';
            id('div1h').style.webkitAnimation = 'div1_in 1.2s cubic-bezier(.34,.03,.48,.99) both';

            timeout2 = setTimeout(show2,4000)
        }
        function show2 ()
        {
            setImage('2');
            id('div1v').style.webkitAnimation = 'div1_out 1.2s cubic-bezier(.34,.03,.48,.99) both';
            id('div1h').style.webkitAnimation = 'div1_out 1.2s cubic-bezier(.34,.03,.48,.99) both';

            id('div2h').style.webkitAnimation = 'div2_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div2v').style.webkitAnimation = 'div2_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';

            timeout3 = setTimeout(show3,4000)
        }
        function show3 ()
        {
            setImage('3');
            id('div2h').style.webkitAnimation = 'div21_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div2v').style.webkitAnimation = 'div21_out 1s cubic-bezier(.36,.03,.74,.99) both';


            id('div3v').style.webkitAnimation = 'div3_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div3h').style.webkitAnimation = 'div3_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';

            timeout4 = setTimeout(show4,4000)
        }
        function show4 ()
        {
            setImage('4');
            id('div3v').style.webkitAnimation = 'div3_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div3h').style.webkitAnimation = 'div3_out 1s cubic-bezier(.36,.03,.74,.99) both';

            id('div4h').style.webkitAnimation = 'div41_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            id('div4v').style.webkitAnimation = 'div41_in 1.5s 0.4s cubic-bezier(.34,.03,.48,.99) both';
            timeout5 = setTimeout(show1_1,4000)
        }
        function show1_1 ()
        {
            setImage('1');
            id('div4h').style.webkitAnimation = 'div41_out 1s cubic-bezier(.36,.03,.74,.99) both';
            id('div4v').style.webkitAnimation = 'div41_out 1s cubic-bezier(.36,.03,.74,.99) both';

            id('div1v').style.webkitAnimation = 'div1_in 1.5s 0.5s cubic-bezier(.34,.03,.48,.99) both';
            id('div1h').style.webkitAnimation = 'div1_in 1.5s 0.5s cubic-bezier(.34,.03,.48,.99) both';

            timeout6 = setTimeout(show2,4000);
        }

        function setImage(idname)
        {
            if(reshow == true)
                return;

            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                // console.log(Onload_imgs_url[image_url_index]);
                if(image_url_index % step_loadnum == 0)
                {
                    step_load();
                }
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }

            if(image_url_index % step_loadnum == 0)
            {
                step_load();
            }
            console.log('setimg:'+Onload_imgs_url[image_url_index])

            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            var div;
            var div1;
            var divname;

            if(img_bili > 1)
            {
                divname = idname + 'h';
                div = id('div'+idname+'h');
                div1 = id('div'+idname+'v');
                // width = 437;
                // height = 309;
                // width=370;
                // height=230;
            }
            else
            {
                divname = idname + 'v';
                div = id('div'+idname+'v');
                div1 = id('div'+idname+'h');
                // width = 437;
                // height = 580;
                // width=370;
                // height=500;
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var img = id('img'+divname);
            img.src = Onload_imgs_url[image_url_index];
            // console.log(img.src);

            var word = id('word'+divname);
            var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            if(word_string != undefined)
            {
                word_string = word_string.replace(/[\n]/ig,'');

                word.style.top = "83%";
                var word_length = word_string.length;
                if(word_length < 6)
                    word.style.fontSize = "25px";
                else
                {
                    if(word_length > 10)
                    {
                        word_string = insertEnter(word_string, 5);
                        word.style.top = "78%";
                    }
                    word.style.fontSize = "23px";
                }
                word.innerText = word_string;
            }else
                word.innerText = "";

            var screenWidth=window.screen.width;
            var screenHeight=window.screen.height;
            var tmpWidth=screenWidth*0.9;
            var tmpHeight=screenHeight*0.7;
            // if(img_bili > (width/height))
            // {
            //     img.style.top = '0px';
            //     img.style.height = height + 'px';
            //     img.style.width = height*img_bili + 'px';
            //     img.style.left = -((height*img_bili-width)/2)+'px';
            // }
            // else
            // {
            //     img.style.left = '0px';
            //     img.style.width = width+'px';
            //     img.style.height = width/img_bili + 'px';
            //     img.style.top = -((width/img_bili-height)/2) + 'px';
            // }
            // div.style.width = tmpWidth+'px';
            div.style.textAlign="center";

            img.style.maxWidth=tmpWidth+"px";
            div.style.maxWidth = tmpWidth+'px';
            img.style.maxheight=tmpHeight+"px";
            div.style.maxheight=tmpHeight+"px";

            // if(img_bili>1){
            //     if(image_size_width[image_url_index]>tmpWidth){
            //         img.style.maxWidth=tmpWidth+"px";
            //         div.style.maxWidth = tmpWidth+'px';
            //     }else {
            //         img.style.maxWidth=image_size_width[image_url_index]+"px";
            //         div.style.maxWidth = image_size_width[image_url_index]+'px';
            //     }
            //
            // }else {
            //     if(image_size_height[image_url_index]>tmpHeight){
            //         img.style.height=tmpHeight+"px";
            //         div.style.height=tmpHeight+"px";
            //     }else {
            //         img.style.height=image_size_height[image_url_index]+"px";
            //         div.style.height=image_size_height[image_url_index]+"px";
            //     }
            // }
            // if(img_bili > (width/height))
            // {
            //
            //     img.style.top = '0px';
            //     img.style.height = height + 'px';
            //     img.style.width = height*img_bili + 'px';
            //     img.style.left = -((height*img_bili-width)/2)+'px';
            // }
            // else
            // {
            //     img.style.left = '0px';
            //     img.style.width = width+'px';
            //     img.style.height = width/img_bili + 'px';
            //     img.style.top = -((width/img_bili-height)/2) + 'px';
            // }

            image_url_index++;
            if(image_url_index==Onload_imgs_url.length)
                image_url_index = 0;
            // console.log(width,height,img.style.left,img.style.top,img.width,img.height);
        }
        function insertEnter(str,n){
            var len = str.length;
            var strTemp = '';
            if(len > n){
                strTemp = str.substring(0,n);
                str = str.substring(n,len);
                return strTemp+'\n'+str;
            }else{
                return str;
            }
        }
        call_me(load_images);
        function reload_scene()
        {
            clearnode();
            reshow = true;
            setTimeout(load_images,100);

        }
        function clearnode()
        {
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);

            id('div1h').style.display = 'none';
            id('div1v').style.display = 'none';
            id('div2h').style.display = 'none';
            id('div2v').style.display = 'none';
            id('div3h').style.display = 'none';
            id('div3v').style.display = 'none';
            id('div4h').style.display = 'none';
            id('div4v').style.display = 'none';
            id('div1h').style.webkitAnimation = '';
            id('div1v').style.webkitAnimation = '';
            id('div2h').style.webkitAnimation = '';
            id('div2v').style.webkitAnimation = '';
            id('div3h').style.webkitAnimation = '';
            id('div3v').style.webkitAnimation = '';
            id('div4h').style.webkitAnimation = '';
            id('div4v').style.webkitAnimation = '';

            id('down1').style.webkitAnimation = '';
            id('down2').style.webkitAnimation = '';
            id('up1').style.webkitAnimation = '';
            id('denglong1').style.webkitAnimation = '';
            id('denglong2').style.webkitAnimation = '';
            id('houzi').style.webkitAnimation = '';
            id('zi2').style.webkitAnimation = '';
            id('zi0').style.webkitAnimation = '';
            id('zi1').style.webkitAnimation = '';
            id('zi6').style.webkitAnimation = '';
            id('xin1').style.webkitAnimation = '';
            id('xin2').style.webkitAnimation = '';
            id('xin3').style.webkitAnimation = '';
            id('xin4').style.webkitAnimation = '';
            id('xin5').style.webkitAnimation = '';
            id('xin6').style.webkitAnimation = '';
            id('xin7').style.webkitAnimation = '';
            id('xin8').style.webkitAnimation = '';
            id('xin9').style.webkitAnimation = '';
            id('xin10').style.webkitAnimation = '';
            id('zi').style.webkitAnimation = '';
            id('word1').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('upzi').style.webkitAnimation = '';
            id('titlecontent').innerHTML = '';

        }
        load_init_modules();
    }

    return{
        init: init
    }
})