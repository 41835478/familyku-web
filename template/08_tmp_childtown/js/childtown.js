/**
 * Created by 321 on 2016/10/12.
 */
'use strict'
define(["./../../../js/common/render","./../../../js/app/baseFinal"],function (Render,Final) {
    var userData,
        TMPL = {
        tmpl_shuye: '/template/08_tmp_childtown/js/tmpl_childtown.js'
    }
    var init = function (data) {
        console.log("init");
        userData= data;
        $("head").append(' <link type="text/css" rel="stylesheet" href="/template/08_tmp_childtown/css/childtown.css?ver=3" />');
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
        var width;
        var height;

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
        function id(name)
        {
            return document.getElementById(name);
        }



        var get_pid = function(url){
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
                    liangziyun_fromkawa();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout0 = setTimeout(function()
                    {
                        liangziyun_fromkawa();
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
                    liangziyun_fromkawa();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout0 = setTimeout(function()
                    {
                        liangziyun_fromkawa();
                    },dis_titletime);
                }

            }
        }
        function id(name)
        {
            return document.getElementById(name);
        }


        function showtitle()
        {
            id('pagetitle').style.webkitAnimation = 'title_in 0.5s ease-in both';
            id('titlecontent').innerHTML = e_desc;
            id('titlecontent').style.webkitAnimation = 'title_in 0.5s 0.2s ease-in both';
        }

        function liangziyun_fromkawa()
        {
            setImage('1');
            id('pagetitle').style.webkitAnimation = 'title_out 4s cubic-bezier(.26,.01,.7,.7) both';
            id('div1').style.webkitAnimation = 'div1_in 4s cubic-bezier(.24,.2,.64,.99) both';

            timeout1 = setTimeout(show2,5000)
        }

        function show2()
        {
            setImage('2')
            id('div1').style.webkitAnimation = 'div1_out 4s 1s cubic-bezier(.26,.01,.7,.7) both';
            id('div2').style.webkitAnimation = 'div2_in 4s ease-out both';

            timeout2 = setTimeout(show3, 6000)
        }
        function show3()
        {
            setImage('3')
            id('div2').style.webkitAnimation = 'div2_out 4s ease-in both';
            id('div3').style.webkitAnimation = 'div3_in 4s ease-out both';

            timeout3 = setTimeout(show4,5000)
        }
        function show4()
        {
            setImage('4')
            id('div3').style.webkitAnimation = 'div3_out 4s ease-in both';
            id('div4').style.webkitAnimation = 'div4_in 4s ease-out both';

            timeout4 = setTimeout(show1,5000)
        }
        function show1()
        {
            setImage('1')
            id('div4').style.webkitAnimation = 'div4_out 4s ease-in both';
            id('div1').style.webkitAnimation = 'div1_in 4s ease-out both';

            timeout5 = setTimeout(show2,5000);
        }

        function setImage(idname)
        {
            if(reshow == true)
                return;

            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
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
            console.log('setimg:' + Onload_imgs_url[image_url_index]);


            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            var div;
            var div1;
            var divname;

            if(img_bili > 1)
            {
                divname = idname + 'h';
                div = id('div'+idname+'h');
                div1 = id('div'+idname+'v');
                width = 320;
                height = 207;
            }
            else
            {
                divname = idname + 'v';
                div = id('div'+idname+'v');
                div1 = id('div'+idname+'h');
                width = 223;
                height = 327;
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
                word.style.top = "90%";
                var word_length = word_string.length;
                if(word_length < 6)
                {
                    word.style.fontSize = "23px";
                }
                else
                {
                    word.style.fontSize = "20px";
                    if(word_length > 10)
                    {
                        word_string = insertEnter(word_string, 5);
                        word.style.top = "82%";
                    }
                }
                word.innerText = word_string;
            }
            else
            {
                word.innerText = "";
            }

            if(img_bili > (width/height))
            {
                img.style.top = '0px';
                img.style.height = height + 'px';
                img.style.width = height*img_bili + 'px';
                img.style.left = -((height*img_bili-width)/2)+'px';
            }
            else
            {
                img.style.left = '0px';
                img.style.width = width+'px';
                img.style.height = width/img_bili + 'px';
                img.style.top = -((width/img_bili-height)/2) + 'px';
            }

            image_url_index++;
            if(image_url_index==Onload_imgs_url.length)
                image_url_index = 0;
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
            id('div1').style.webkitAnimation = '';
            id('div2').style.webkitAnimation = '';
            id('div3').style.webkitAnimation = '';
            id('div4').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';
            id('titlecontent').style.webkitAnimation = '';
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
        }

        load_init_modules();

    }

    return{
        init: init
    }
})