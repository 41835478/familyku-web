/**
 * Created by 321 on 2016/10/12.
 */
'use strict'
define(["./../../../js/common/render","./../../../js/app/baseFinal"],function (Render,Final) {
    var userData,
        TMPL = {
        tmpl_shuye: '/template/09_tmp_flower/js/tmpl_flower.js'
    }
    var init = function (data) {
        console.log("init");
        userData= data;
        $("head").append(' <link type="text/css" rel="stylesheet" href="/template/09_tmp_flower/css/flower.css?ver=3" />');
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
        var atkname = 'yywm';


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
        var date = 20170117;
        var zan_num = 0;
        var e_bookid = 'Fpx5HcVlzcqzh6tUDccbZ3SWqjo-y2-Y';
        var e_desc = {"de":"\u6211\u5236\u4f5c\u7684\u97f3\u4e50\u76f8\u518c\uff0c\u6253\u5f00\u770b\u770b\u5427"}["de"];
        var e_openid = null;
        var e_scene = 'jixiang';
        var editmode = false;
        var wxid = 'haoyy';
        var shareid = '';
        var guanzhu_url = 'http://mp.weixin.qq.com/s?__biz=MzI2OTE1ODE5Ng==&mid=556186322&idx=1&sn=ba8b09d58e55b73df38fce1d1a90b0f7#rd';
        var words = {"hn_467579161984":"abc\u2006c\u2006c\u2006c","hn_467579172547":"\u5403\u9971\u554a\u554a\u554a\u554a\u554a"};
        var app = '';
        var onmake = '';
        e_openid = 'T_9RB8DEFSjwjwAKSwFa8apdduwrqXjaEAFUoTWfJaU35DqqcCGofuNkU_Vx9Z13QOV1fV6lJlM';editmode = true; e_scene = 'jixiang';var e_music_url = 'http://kawaweika.qiniudn.com/sound/huanhuanxixiguodanian.mp3';
        var e_music_title = '';
        var tbssaveoff = false;
        var isguangchang = '';
        var isshow = '';
        var gotomake = '';
        var istiaozhuan = '';


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
        var timeout7;
        var timeout8;
        var timeout9;
        var img_bili;
        var div1,div1_view,div2,div2_view,view_box,div_box

        var delaytime=4000;

        var begin_titletime;

        var Onload_imgs_url;

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
        function showtitle()
        {
            id('pagetitle').style.webkitAnimation = 'title_in 1s ease-out both';
            if(e_desc.length <11)
            {
                id('line1').innerHTML = '';
                id('line3').innerHTML = '';
                id('line2').innerHTML = e_desc;
            }
            else if(e_desc.length < 21)
            {
                id('line1').innerHTML = e_desc.substring(0,10);
                id('line2').innerHTML = e_desc.substring(10,e_desc.length);
                id('line3').innerHTML = '';
            }
            else
            {
                id('line1').innerHTML = e_desc.substring(0,10);
                id('line2').innerHTML = e_desc.substring(10,20);
                id('line3').innerHTML = e_desc.substring(20,e_desc.length);
            }

            id('line1').style.webkitAnimation = 'wordsup 0.5s linear both';
            id('line2').style.webkitAnimation = 'wordsup 0.5s 0.2s linear both';
            id('line3').style.webkitAnimation = 'wordsup 0.5s 0.4s linear both';
            id('wordscon').style.webkitAnimation = 'wordsmoving 1s linear 1s infinite alternate';
        }

        function liangziyun()
        {
            id('pagetitle').style.webkitAnimation = 'title_out 1s linear both';

            show1();
        }



        function id(name)
        {
            return document.getElementById(name);
        }
        function loading()
        {

            div1 = id('div1');
            div1_view = id('div1_view');
            div2 = id('div2');
            div2_view = id('div2_view');

            view_box = id('view_box');
            div_box = id('div_box');

            load_images();

        }
        //每次执行加载后5张图片
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
            canshow = true;
            showtitle();
            bl_keepload = 'first';
            step_load();
        }

        function image_onerror(event)
        {
            var img = event.target;
            var index = img.index;
            if(index<step_loadnum)
                error_num ++;
            Onload_imgs_url[index] = 'not find';
            // console.log(Onload_imgs_url[index]);
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
                    liangziyun();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout0 = setTimeout(function()
                    {
                        liangziyun();
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
                    liangziyun();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout0 = setTimeout(function()
                    {
                        liangziyun();
                    },dis_titletime);
                }

            }
        }

        var get_pid = function(url){
            var index1 = url.indexOf("?");
            if(index1 != -1)
            {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
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
        function show1()
        {
            setImageindex();

            view_box.style.webkitAnimation = 'moving_left 5s linear both';
            div_box.style.webkitAnimation = 'moving_up 5s linear both';

            div1.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
            div1_view.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';

            var word1 = id('word1');
            var word1_string = words[get_pid(Onload_imgs_url[image_url_index])];
            if(word1_string != undefined)
            {
                word1_string = word1_string.replace(/[\n]/ig,'');

                var word1_length = word1_string.length;
                if(word1_length > 4)
                {
                    word1.style.fontSize = "25px";
                    if(word1_length > 10)
                        word1_string = insertEnter(word1_string, 5);
                }else {

                    word1.style.fontSize = "28px";

                }

                word1.innerText = word1_string;
            }else
            {
                word1.innerText = "";
            }

            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];

            if(img_bili>1)
            {
                var img_width = 440;
            }
            else
            {
                if(img_bili < (500/800))
                    var img_width = 400;
                else
                    var img_width = 420;
            }

            var img_height = img_width/img_bili;
            div1.style.backgroundSize = img_width+'px '+img_height + 'px';
            div1_view.style.backgroundSize = img_width+'px '+img_height + 'px';
            div1.style.width = img_width+'px';
            div1_view.style.width = img_width+'px';
            div1.style.left = (500-img_width)/2+'px';
            div1_view.style.left = (500-img_width)/2+'px';

            if(img_bili < (500/800))//图片过长
            {

                div1.style.backgroundPosition = '0px -'+(img_height-780)/2+'px';
                div1_view.style.backgroundPosition = '0px -'+(img_height-780)/2+'px';
                div1.style.height = '600px';
                div1_view.style.height = '600px';
                div1.style.top = '90px';
                div1_view.style.top = '90px';
            }
            else
            {
                div1.style.backgroundPosition = '0px 0px';
                div1_view.style.backgroundPosition = '0px 0px';
                div1.style.height = img_height + 'px';
                div1_view.style.height = img_height + 'px';
                div1.style.top = (780-img_height)/2+'px';
                div1_view.style.top = (780-img_height)/2+'px';
            }

            div1.style.webkitAnimation = 'div1_in 1.5s ease-in-out both';
            div1_view.style.webkitAnimation = 'div1_view_in 1.5s ease-in-out both';

            timeout1 = setTimeout(show2,6000)
        }

        function show2()
        {
            image_url_index ++;
            setImageindex();

            div1.style.webkitAnimation = 'div1_out 1s linear both';
            div1_view.style.webkitAnimation = 'div1_view_out 1s linear both';

            div2.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
            div2_view.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';

            var word2 = id('word2');
            var word2_string = words[get_pid(Onload_imgs_url[image_url_index])];
            if(word2_string != undefined)
            {
                word2_string = word2_string.replace(/[\n]/ig,'');

                var word2_length = word2_string.length;
                if(word2_length > 4)
                {
                    word2.style.fontSize = "25px";
                    if(word2_length > 10)
                        word2_string = insertEnter(word2_string, 5);
                }else {
                    word2.style.fontSize = "28px";

                }

                word2.innerText = word2_string;
            }else
            {
                word2.innerText = "";
            }

            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];

            if(img_bili>1)
            {
                var img_width = 440;
            }
            else
            {
                if(img_bili < (500/800))
                    var img_width = 400;
                else
                    var img_width = 420;
            }

            var img_height = img_width/img_bili;
            div2.style.backgroundSize = img_width+'px '+img_height + 'px';
            div2_view.style.backgroundSize = img_width+'px '+img_height + 'px';
            div2.style.width = img_width+'px';
            div2_view.style.width = img_width+'px';
            div2.style.left = (500-img_width)/2+'px';
            div2_view.style.left = (500-img_width)/2+'px';

            if(img_bili < (500/800))//图片过长
            {

                div2.style.backgroundPosition = '0px -'+(img_height-780)/2+'px';
                div2_view.style.backgroundPosition = '0px -'+(img_height-780)/2+'px';
                div2.style.height = '600px';
                div2_view.style.height = '600px';
                div2.style.top = '90px';
                div2_view.style.top = '90px';
            }
            else
            {
                div2.style.backgroundPosition = '0px 0px';
                div2_view.style.backgroundPosition = '0px 0px';
                div2.style.height = img_height + 'px';
                div2_view.style.height = img_height + 'px';
                div2.style.top = (780-img_height)/2+'px';
                div2_view.style.top = (780-img_height)/2+'px';
            }

            div2.style.webkitAnimation = 'div2_in 1.5s 1s ease-in-out both';
            div2_view.style.webkitAnimation = 'div2_view_in 1.5s 1s ease-in-out both';

            view_box.style.webkitAnimation = 'moving_right 5s linear both';
            div_box.style.webkitAnimation = 'moving_down 5s linear both';

            timeout2 = setTimeout(show3,6000)
        }

        function show3()
        {

            image_url_index ++;
            setImageindex();

            div2.style.webkitAnimation = 'div2_out 1s linear both';
            div2_view.style.webkitAnimation = 'div2_view_out 1s linear both';

            div1.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
            div1_view.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';

            var word1 = id('word1');
            var word1_string = words[get_pid(Onload_imgs_url[image_url_index])];
            if(word1_string != undefined)
            {
                word1_string = word1_string.replace(/[\n]/ig,'');

                var word1_length = word1_string.length;
                if(word1_length > 4)
                {
                    word1.style.fontSize = "25px";
                    if(word1_length > 10)
                        word1_string = insertEnter(word1_string, 5);
                }else {
                    word1.style.fontSize = "28px";
                }

                word1.innerText = word1_string;

            }else
            {
                word1.innerText = "";
            }

            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];

            if(img_bili>1)
            {
                var img_width = 440;
            }
            else
            {
                if(img_bili < (500/800))
                    var img_width = 400;
                else
                    var img_width = 420;
            }

            var img_height = img_width/img_bili;
            div1.style.backgroundSize = img_width+'px '+img_height + 'px';
            div1_view.style.backgroundSize = img_width+'px '+img_height + 'px';
            div1.style.width = img_width+'px';
            div1_view.style.width = img_width+'px';
            div1.style.left = (500-img_width)/2+'px';
            div1_view.style.left = (500-img_width)/2+'px';

            if(img_bili < (500/800))//图片过长
            {

                div1.style.backgroundPosition = '0px -'+(img_height-780)/2+'px';
                div1_view.style.backgroundPosition = '0px -'+(img_height-780)/2+'px';
                div1.style.height = '600px';
                div1_view.style.height = '600px';
                div1.style.top = '90px';
                div1_view.style.top = '90px';
            }
            else
            {
                div1.style.backgroundPosition = '0px 0px';
                div1_view.style.backgroundPosition = '0px 0px';
                div1.style.height = img_height + 'px';
                div1_view.style.height = img_height + 'px';
                div1.style.top = (760-img_height)/2+'px';
                div1_view.style.top = (760-img_height)/2+'px';
            }

            div1.style.webkitAnimation = 'div3_in 1.5s 1s ease-in-out both';
            div1_view.style.webkitAnimation = 'div3_view_in 1.5s 1s ease-in-out both';


            view_box.style.webkitAnimation = 'moving_left 5s linear both';
            div_box.style.webkitAnimation = 'moving_up 5s linear both';

            timeout3 = setTimeout(show4,6000)
        }

        function show4()
        {
            div1.style.webkitAnimation = 'div3_out 1s linear both';
            div1_view.style.webkitAnimation = 'div3_view_out 1s linear both';

            image_url_index++;
            setImageindex();
            div2.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
            div2_view.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';

            var word2 = id('word2');
            var word2_string = words[get_pid(Onload_imgs_url[image_url_index])];
            if(word2_string != undefined)
            {
                word2_string = word2_string.replace(/[\n]/ig,'');

                var word2_length = word2_string.length;
                if(word2_length > 4)
                {
                    word2.style.fontSize = "25px";
                    if(word2_length > 10)
                        word2_string = insertEnter(word2_string, 5);
                }else {
                    word2.style.fontSize = "28px";
                }

                word2.innerText = word2_string;
            }else
            {
                word2.innerText = "";
            }

            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];

            if(img_bili>1)
            {
                var img_width = 440;
            }
            else
            {
                if(img_bili < (500/800))
                    var img_width = 400;
                else
                    var img_width = 420;
            }

            var img_height = img_width/img_bili;
            div2.style.backgroundSize = img_width+'px '+img_height + 'px';
            div2_view.style.backgroundSize = img_width+'px '+img_height + 'px';
            div2.style.width = img_width+'px';
            div2_view.style.width = img_width+'px';
            div2.style.left = (500-img_width)/2+'px';
            div2_view.style.left = (500-img_width)/2+'px';

            if(img_bili < (500/800))//图片过长
            {

                div2.style.backgroundPosition = '0px -'+(img_height-780)/2+'px';
                div2_view.style.backgroundPosition = '0px -'+(img_height-780)/2+'px';
                div2.style.height = '600px';
                div2_view.style.height = '600px';
                div2.style.top = '90px';
                div2_view.style.top = '90px';
            }
            else
            {
                div2.style.backgroundPosition = '0px 0px';
                div2_view.style.backgroundPosition = '0px 0px';
                div2.style.height = img_height + 'px';
                div2_view.style.height = img_height + 'px';
                div2.style.top = (780-img_height)/2+'px';
                div2_view.style.top = (780-img_height)/2+'px';
            }

            div2.style.webkitAnimation = 'div1_in 1.5s 1s ease-in-out both';
            div2_view.style.webkitAnimation = 'div1_view_in 1.5s 1s ease-in-out both';


            view_box.style.webkitAnimation = 'moving_right 5s linear both';
            div_box.style.webkitAnimation = 'moving_down 5s linear both';

            timeout4 = setTimeout(show5,6000)
        }
        function show5()
        {
            div2.style.webkitAnimation = 'div1_out 1s linear both';
            div2_view.style.webkitAnimation = 'div1_view_out 1s linear both';

            image_url_index++;
            setImageindex();
            div1.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
            div1_view.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';

            var word1 = id('word1');
            var word1_string = words[get_pid(Onload_imgs_url[image_url_index])];
            if(word1_string != undefined)
            {
                word1_string = word1_string.replace(/[\n]/ig,'');

                var word1_length = word1_string.length;
                if(word1_length > 4)
                {
                    word1.style.fontSize = "25px";
                    if(word1_length > 10)
                        word1_string = insertEnter(word1_string, 5);
                }else {
                    word1.style.fontSize = "28px";
                }
                word1.innerText = word1_string;
            }else
            {
                word1.innerText = "";
            }

            img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];

            if(img_bili>1)
            {
                var img_width = 440;
            }
            else
            {
                if(img_bili < (500/800))
                    var img_width = 400;
                else
                    var img_width = 420;
            }

            var img_height = img_width/img_bili;
            div1.style.backgroundSize = img_width+'px '+img_height + 'px';
            div1_view.style.backgroundSize = img_width+'px '+img_height + 'px';
            div1.style.width = img_width+'px';
            div1_view.style.width = img_width+'px';
            div1.style.left = (500-img_width)/2+'px';
            div1_view.style.left = (500-img_width)/2+'px';

            if(img_bili < (500/800))//图片过长
            {

                div1.style.backgroundPosition = '0px -'+(img_height-780)/2+'px';
                div1_view.style.backgroundPosition = '0px -'+(img_height-780)/2+'px';
                div1.style.height = '600px';
                div1_view.style.height = '600px';
                div1.style.top = '90px';
                div1_view.style.top = '90px';
            }
            else
            {
                div1.style.backgroundPosition = '0px 0px';
                div1_view.style.backgroundPosition = '0px 0px';
                div1.style.height = img_height + 'px';
                div1_view.style.height = img_height + 'px';
                div1.style.top = (780-img_height)/2+'px';
                div1_view.style.top = (780-img_height)/2+'px';
            }

            div1.style.webkitAnimation = 'div1_in 1.5s 1s ease-in-out both';
            div1_view.style.webkitAnimation = 'div1_view_in 1.5s 1s ease-in-out both';


            view_box.style.webkitAnimation = 'moving_left 5s linear both';
            div_box.style.webkitAnimation = 'moving_up 5s linear both';

            timeout5 = setTimeout(show2,6000)
        }
        function setImageindex()
        {
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                if(image_url_index % step_loadnum == 0)
                {
                    // alert()
                    step_load();
                    break;
                }
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }
            console.log('setimg:'+Onload_imgs_url[image_url_index]);
            if(image_url_index % step_loadnum == 0)
            {
                // alert()
                step_load();
            }
        }


        function reload_scene()
        {
            clearnode();
            reshow = true;
            setTimeout(load_images,100);
        }

        function clearnode()
        {
            div1.style.webkitAnimation = '';
            div2.style.webkitAnimation = '';
            div1_view.style.webkitAnimation = '';
            div2_view.style.webkitAnimation = '';
            view_box.style.webkitAnimation = '';
            div_box.style.webkitAnimation = '';
            id('wordscon').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('line1').style.webkitAnimation = '';
            id('line2').style.webkitAnimation = '';
            id('line3').style.webkitAnimation = '';


            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);

        }
        call_me(loading);
        load_init_modules();

    }

    return{
        init: init
    }
})