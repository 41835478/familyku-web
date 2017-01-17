/**
 * Created by 321 on 2016/10/12.
 */
'use strict'
define(["./../../../js/common/render","./../../../js/app/baseFinal"],function (Render,Final) {
    var userData,
        TMPL = {
        tmpl_shuye: '/template/04_tmp_daji/js/tmpl_daji.js'
    }
    var init = function (data) {
        console.log("init");
        userData= data;
        $("head").append(' <link type="text/css" rel="stylesheet" href="/template/04_tmp_daji/css/daji.css?ver=3" />');
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
        function id(name)
        {
            return document.getElementById(name);
        }

        function showtitle()
        {
            id('ji').style.webkitAnimation = 'ji_in 3s linear both';
            id('pagetitle').style.webkitAnimation = 'title_in 2s 1.8s ease-out both';
            id('shang').style.webkitAnimation = 'shang_in 1s 2s linear both';
            id('titlecontent').innerHTML = e_desc;

            // setTimeout(distitle, 4000)
        }

        function liangziyun_kawa()
        {
            id('pagetitle').style.webkitAnimation = 'title_out 2s ease-in both';
            id('deng1').style.webkitAnimation = 'deng_in 1s 1.7s ease-out both';
            id('deng2').style.webkitAnimation = 'deng_in 1s 1.6s ease-out both';
            id('deng3').style.webkitAnimation = 'deng_in 1s 1.5s ease-out both';
            id('deng4').style.webkitAnimation = 'deng_in 1s 1.8s ease-out both';
            id('xinnian').style.webkitAnimation = 'fadein 1s 1.5s linear both';

            timeout[1] = setTimeout(show1, 2000)
        }

        function show1()
        {
            setImageindex();
            setImage();
            img_type = 0;
            if(image_size_width[image_url_index]/image_size_height[image_url_index] > 1)
            {
                id('zhou1').style.webkitAnimation = 'zhou1_in_heng 2s linear both';
                id('zhou2').style.webkitAnimation = 'zhou2_in_heng 2s linear both';
                id('divh').style.webkitAnimation = 'scaleh_in 1.7s 0.3s linear both';
                img_type = 0;
            }
            else
            {
                id('divv').style.webkitAnimation = 'scale_in 1.7s 0.3s linear both';
                id('zhou1').style.webkitAnimation = 'zhou1_in_shu 2s linear both';
                id('zhou2').style.webkitAnimation = 'zhou2_in_shu 2s linear both';
                img_type = 1;
            }

            image_url_index ++;
            timeout[2] = setTimeout(show2, 5000)
        }

        function show2()
        {

            setImageindex();
            // alert(Onload_imgs_url[image_url_index]);
            var my_type = 0;
            // setImage();
            if(image_size_width[image_url_index]/image_size_height[image_url_index]> 1)
            {
                my_type = 0;
                if(img_type == 0)
                {
                    id('divh').style.webkitAnimation = 'scaleh_out 1.2s linear both';
                    id('zhou1').style.webkitAnimation = 'zhou1_h2h 1.2s linear both';
                    id('zhou2').style.webkitAnimation = 'zhou2_h2h 1.2s linear both';

                    timeout[3] = setTimeout(function()
                    {
                        setImage();
                        id('divh').style.webkitAnimation = 'scaleh_in 1.1s linear both';
                        id('zhou1').style.webkitAnimation = 'zhou1_hh 1.2s linear both';
                        id('zhou2').style.webkitAnimation = 'zhou2_hh 1.2s linear both';
                        image_url_index ++;
                    },1300)
                }
                else
                {
                    id('divv').style.webkitAnimation = 'scale_out 1s linear both';
                    id('zhou1').style.webkitAnimation = 'zhou1_v2h 1.6s linear both';
                    id('zhou2').style.webkitAnimation = 'zhou2_v2h 1.6s linear both';

                    timeout[4] = setTimeout(function()
                    {
                        setImage();
                        id('divh').style.webkitAnimation = 'scaleh_in 1.1s linear both';
                        id('zhou1').style.webkitAnimation = 'zhou1_hh 1.2s linear both';
                        id('zhou2').style.webkitAnimation = 'zhou2_hh 1.2s linear both';
                        image_url_index ++;
                    }, 1800)
                }
            }
            else
            {
                my_type = 1;
                if(img_type == 0)
                {
                    id('divh').style.webkitAnimation = 'scaleh_out 1s linear both';
                    id('zhou1').style.webkitAnimation = 'zhou1_h2v 1.6s linear both';
                    id('zhou2').style.webkitAnimation = 'zhou2_h2v 1.6s linear both';

                    timeout[5] = setTimeout(function()
                    {
                        setImage();
                        id('divv').style.webkitAnimation = 'scale_in 1.2s linear both';
                        id('zhou1').style.webkitAnimation = 'zhou1_vv 1.2s linear both';
                        id('zhou2').style.webkitAnimation = 'zhou2_vv 1.2s linear both';
                        image_url_index ++;
                    }, 1800)
                }
                else
                {
                    id('divv').style.webkitAnimation = 'scale_out 1.2s linear both';
                    id('zhou1').style.webkitAnimation = 'zhou1_s2s 1.2s linear both';
                    id('zhou2').style.webkitAnimation = 'zhou2_s2s 1.2s linear both';

                    timeout[6] = setTimeout(function()
                    {
                        setImage();
                        id('divv').style.webkitAnimation = 'scale_in 1.2s linear both';
                        id('zhou1').style.webkitAnimation = 'zhou1_vv 1.2s linear both';
                        id('zhou2').style.webkitAnimation = 'zhou2_vv 1.2s linear both';
                        image_url_index ++;
                    },1300)

                }
            }
            // alert(image_url_index);
            img_type = my_type;


            timeout[7] = setTimeout(show2, 6000)
        }

        function setImage()
        {
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            if( img_bili > 1)
            {
                var img = id('imgh');
                var word = id('wordh');
                if(img_bili < 454/303)
                {
                    imgheight = 303;
                    imgwidth = 303 * img_bili;
                    imgtop = 0;
                    imgleft = (454-imgwidth)/2;
                }
                else
                {
                    imgwidth = 454;
                    imgheight = 454 / img_bili;
                    imgleft = 0;
                    imgtop = (303-imgheight)/2;
                }
            }
            else
            {
                var img = id('imgv');
                var word = id('wordv');
                if(img_bili < 370/556)
                {
                    imgheight = 556;
                    imgwidth = 556 * img_bili;
                    imgtop = 0;
                    imgleft = (370-imgwidth)/2;
                }
                else
                {
                    imgwidth = 370;
                    imgheight = 370 / img_bili;
                    imgleft = 0;
                    imgtop = (556-imgheight)/2;
                }
            }

            var str = words[get_pid(Onload_imgs_url[image_url_index])];
            if(str != undefined)
            {
                word.innerHTML = str;
            }
            else
            {
                word.innerHTML = '';
            }
            img.style.backgroundImage = 'url(' + Onload_imgs_url[image_url_index] + ')';
            img.style.backgroundSize = imgwidth + 'px '+ imgheight + 'px';
            img.style.backgroundPosition = imgleft + 'px '+ imgtop + 'px';
            console.log( Onload_imgs_url[image_url_index]+imgleft + 'px '+ imgtop + 'px')
        }
        function setImageindex()
        {
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

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
        }

        call_me(load_images)


        //本模板为深圳量子云科技有限公司版权所有，已申请版权保护，侵权必究。


        var get_pid = function(url)
        {
            var index1 = url.indexOf("?");
            if(index1 != -1)
            {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
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
        var image_size_width=[];
        var image_size_height=[];
        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime=5000;
        var timeout = [];

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
                clearTimeout(timeout[i]);
            }

            var itemlist = ['zhou1','zhou2','divv','divh','ji','shang','pagetitle','deng1','deng2','deng3','deng4','xinnian'];

            for(var i =0; i<itemlist.length;i++)
            {
                id(itemlist[i]).style.webkitAnimation = '';
            }

        }

        load_init_modules();

    }

    return{
        init: init
    }
})