/**
 * Created by 321 on 2016/10/12.
 */
'use strict'
define(["./../../../js/common/render","./../../../js/app/baseFinal"],function (Render,Final) {
    var userData,
        TMPL = {
        tmpl_shuye: '/template/05_tmp_birthday/js/tmpl_birthday.js'
    }
    var init = function (data) {
        console.log("init");
        userData= data;
        $("head").append(' <link type="text/css" rel="stylesheet" href="/template/05_tmp_birthday/css/birthday.css?ver=3" />');
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


        var width;
        var height;
        var image_size_width=[];
        var image_size_height=[];
        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var imgheight;
        var imgwidth;
        var imgtop;
        var imgleft;
        var img_type;

        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;
        var timeout6;
        var timeout7;
        var timeout8;

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
        function id (name)
        {
            return document.getElementById(name)
        }

        var get_pid = function(url){
            var index1 = url.indexOf("?");
            if(index1 != -1)
            {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        function showtitle ()
        {
            id('heng1').style.webkitAnimation = 'changeline 2s linear both';
            id('heng2').style.webkitAnimation = 'changeline 2s linear both';
            id('heng3').style.webkitAnimation = 'changeline 2s linear both';
            id('heng4').style.webkitAnimation = 'changeline 2s linear both';
            id('titlebg').style.webkitAnimation = 'titlebg 2s linear both';
            id('titlecontent').innerHTML = e_desc;
            id('titlecontent').style.webkitAnimation = 'fadein 1.5s 0.5s linear both';

            // setTimeout(liangziyun_kawa,2000)
        }

        function liangziyun_kawa ()
        {
            setImage('1');
            id('pagetitle').style.webkitAnimation = 'fadeout 1s linear both';
            id('page1').style.webkitAnimation = 'rotate_in_flip_x 1s 1s ease both';

            id('ying1h').style.webkitAnimation = 'ying_x_in 1s 1s ease both';
            id('ying1v').style.webkitAnimation = 'ying_y_in 1s 1s ease both';

            timeout[1] = setTimeout(show2,4000)
        }

        function show2 ()
        {
            setImage('2');
            id('page1').style.webkitAnimation = 'rotate_out_flip_x 1s ease both';
            id('ying1h').style.webkitAnimation = 'ying_x_out 1s ease both';
            id('ying1v').style.webkitAnimation = 'ying_x_out 1s ease both';

            id('page2').style.webkitAnimation = 'rotate_in_flip_y 1s 0.8s ease both';
            id('ying2v').style.webkitAnimation = 'ying_y_in 1s 0.8s ease both';
            id('ying2h').style.webkitAnimation = 'ying_y_in 1s 0.8s ease both';

            timeout[2] = setTimeout(show3,4000)
        }

        function show3()
        {
            setImage('1');
            id('page2').style.webkitAnimation = 'rotate_out_flip_y 1s ease both';
            id('ying2h').style.webkitAnimation = 'ying_y_out 1s ease both';
            id('ying2v').style.webkitAnimation = 'ying_y_out 1s ease both';

            id('page1').style.webkitAnimation = 'rotate_in_flip_x 1s 0.8s ease both';
            id('ying1h').style.webkitAnimation = 'ying_x_in 1s 0.8s ease both';
            id('ying1v').style.webkitAnimation = 'ying_x_in 1s 0.8s ease both';

            timeout[3] = setTimeout(show2,4000)
        }

        var image_size_width=[];
        var image_size_height=[];
        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var timeout = [];


        var delaytime=4000;
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

        function image_onerror(event)
        {
            var img = event.target;
            var index = img.index;
            if(index<step_loadnum)
                error_num ++;
            Onload_imgs_url[index] = 'not find';
            console.log(Onload_imgs_url[index]);
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
                    liangziyun_kawa();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout[0] = setTimeout(function()
                    {
                        liangziyun_kawa();
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
                    liangziyun_kawa();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout[0] = setTimeout(function()
                    {
                        liangziyun_kawa();
                    },dis_titletime);
                }

            }
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

            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            var div;
            var div1;
            var divname;

            if(img_bili > 1)
            {
                divname = idname + 'h';
                div = id('div'+idname+'h');
                div1 = id('div'+idname+'v');
                width = 480;
                height = 320;
                id('ying'+idname + 'v').style.display = 'none';
                id('ying'+idname + 'h').style.display = 'block';

                var word = id('word'+divname);
                // word.style.color = "red";
                word.style.top = "95%";
            }
            else
            {
                divname = idname + 'v';
                div = id('div'+idname+'v');
                div1 = id('div'+idname+'h');
                width = 420;
                height = 600;
                id('ying'+idname + 'h').style.display = 'none';
                id('ying'+idname + 'v').style.display = 'block';

                var word = id('word'+divname);  //竖
                // word.style.color = "green";
                word.style.top = "88%";
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var img = id('img'+divname);
            img.src = Onload_imgs_url[image_url_index];
            console.log(img.src);

            // var word = id('word'+divname);
            var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            if(word_string != undefined)
            {
                word_string = word_string.replace(/[\n]/ig,'');
                word.style.top = "85%";
                var word_length = word_string.length;
                if(word_length <= 5)
                {
                    word.style.fontSize = "31px";
                }else {
                    word.style.fontSize = "28px";
                    if(word_length > 10)
                    {
                        word_string = insertEnter(word_string, 5);
                        word.style.top = "80%";
                    }
                }
                word.innerText = word_string;
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
        call_me(load_images)

        function reload_scene()
        {
            clearnode();
            reshow = true;
            setTimeout(load_images,100);
        }

        function clearnode()
        {

            for(var i = 0; i<timeout.length; i++)
            {
                clearTimeout(timeout[i])
            }

            id('page1').style.webkitAnimation = '';
            id('page2').style.webkitAnimation = '';

            var items = ['div1h','div1v','div2h','div2v','ying1h','ying1v','ying2h','ying2v'];
            for(var i = 0;i<items.length;i++)
            {
                id(items[i]).style.display = 'none';
                id(items[i]).style.webkitAnimation = '';
            }
            id('heng1').style.webkitAnimation = '';
            id('heng2').style.webkitAnimation = '';
            id('heng3').style.webkitAnimation = '';
            id('heng4').style.webkitAnimation = '';
            id('titlebg').style.webkitAnimation = '';
            id('titlecontent').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';

        }

        load_init_modules();

    }

    return{
        init: init
    }
})