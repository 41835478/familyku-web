/**
 * Created by 321 on 2016/10/12.
 */
'use strict'
define(["./../../../js/common/render","./../../../js/app/baseFinal"],function (Render,Final) {
    var userData,
        TMPL = {
        tmpl_shuye: '/template/10_tmp_students/js/tmpl_students.js'
    }
    var init = function (data) {
        console.log("init");
        userData= data;
        $("head").append(' <link type="text/css" rel="stylesheet" href="/template/10_tmp_students/css/students.css?ver=3" />');
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
        var delaytime=5000;

        var timeout = [];
        var div1,div1_view,div2,div2_view,view_box,div_box,width,height;

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
            return document.getElementById(name)
        }

        function showtitle()
        {
            id('leaf1').style.webkitAnimation = 'leaf1_in 1s ease-out both';
            id('camara').style.webkitAnimation = 'camara_in 5s linear both';
            id('pagetitle').style.webkitAnimation = 'title_in 1s linear both';
            id('titlecontent').innerHTML = e_desc;

            id('yezi1').style.webkitAnimation = 'leafing 10s 1s linear both';
            id('yezi2').style.webkitAnimation = 'leafing 9s linear both';

            // timeout[1] = setTimeout(distitle,5000)
        }

        function distitle()
        {
            id('leaf1').style.webkitAnimation = 'leaf1_out 1s linear both';
            id('pagetitle').style.webkitAnimation = 'title_out 1s linear both';

            id('xian').style.webkitAnimation = 'linein 1s linear both';
            id('letter1').style.webkitAnimation = 'letter 4s linear infinite';
            id('letter2').style.webkitAnimation = 'letter 4s 0.4s linear infinite';
            id('letter3').style.webkitAnimation = 'letter 4s 0.8s linear infinite';
            id('letter4').style.webkitAnimation = 'letter 4s 1.2s linear infinite';

            timeout[1] = setTimeout(show1,1000)
        }

        function show1()
        {
            setImage('1')
            id('leaf2').style.webkitAnimation = 'leaf2_in 1.5s ease-out both';
            id('div1v').style.webkitAnimation = 'div1v_in 1.5s 0.5s ease-out both';
            id('div1h').style.webkitAnimation = 'div1h_in 1.5s 0.5s ease-out both';

            id('yezi3').style.webkitAnimation = 'yezi3 6s linear both';
            id('yezi4').style.webkitAnimation = 'yezi4 6s linear both';

            timeout[2] = setTimeout(show2,6000)
        }

        function show2()
        {
            setImage('2')
            id('leaf2').style.webkitAnimation = 'leaf2_out 1.5s linear both';
            id('div1v').style.webkitAnimation = 'div1v_out 1s ease-in both';
            id('div1h').style.webkitAnimation = 'div1h_out 1s ease-in both';

            id('leaf3').style.webkitAnimation = 'leaf3_in 1.5s 1.5s linear both';
            id('div2v').style.webkitAnimation = 'div2v_in 1.5s 1.5s ease-out both';
            id('div2h').style.webkitAnimation = 'div2h_in 1.5s 1.5s ease-out both';

            id('yezi5').style.webkitAnimation = '';
            id('yezi6').style.webkitAnimation = '';
            id('yezi7').style.webkitAnimation = '';
            id('yezi8').style.webkitAnimation = '';


            id('leaf31').style.webkitAnimation = 'leaf31_in 3s 2s linear both';

            timeout[3] = setTimeout(show3,6000)
        }

        function show3()
        {
            setImage('3')
            id('leaf3').style.webkitAnimation = 'leaf3_out 1.5s linear both';
            id('div2v').style.webkitAnimation = 'div2v_out 1.5s linear both';
            id('div2h').style.webkitAnimation = 'div2h_out 1.5s linear both';

            id('leaf4').style.webkitAnimation = 'leaf4_in 1.5s 1.5s linear both';
            id('div3v').style.webkitAnimation = 'div3v_in 1.5s 1.5s ease-out both';
            id('div3h').style.webkitAnimation = 'div3h_in 1.5s 1.5s ease-out both';

            id('yezi5').style.webkitAnimation = 'leafs 14s 3s linear both';
            id('yezi6').style.webkitAnimation = 'leafs 12s 2s linear both';
            id('yezi7').style.webkitAnimation = 'leafs 13s 4s linear both';

            timeout[4] = setTimeout(show4,6000)
        }

        function show4()
        {
            setImage('4')
            id('leaf4').style.webkitAnimation = 'leaf4_out 1.5s linear both';
            id('div3v').style.webkitAnimation = 'div3v_out 1.5s linear both';
            id('div3h').style.webkitAnimation = 'div3h_out 1.5s linear both';

            id('leaf5').style.webkitAnimation = 'leaf5_in 1.5s 1.5s linear both';
            id('div4h').style.webkitAnimation = 'div4h_in 1.5s 1.5s ease-out both';
            id('div4v').style.webkitAnimation = 'div4v_in 1.5s 1.5s ease-out both';

            timeout[5] = setTimeout(show5,6000)
        }

        function show5()
        {
            setImage('5')
            id('leaf5').style.webkitAnimation = 'leaf5_out 1.5s linear both';
            id('div4h').style.webkitAnimation = 'div4h_out 1.5s linear both';
            id('div4v').style.webkitAnimation = 'div4v_out 1.5s linear both';

            id('leaf6').style.webkitAnimation = 'leaf6_in 1.5s 1.5s linear both';
            id('div5h').style.webkitTransformOrigin = '50% 50%';
            id('div5h').style.webkitAnimation = 'div5h_in 1.5s 1.5s ease-out both';
            id('div5v').style.webkitAnimation = 'div5v_in 1.5s 1.5s ease-out both';


            id('leaf31').style.webkitAnimation = '';
            id('yezi3').style.webkitAnimation = '';
            id('yezi4').style.webkitAnimation = '';
            id('yezi8').style.webkitAnimation = 'fengye 6s 1s linear both';

            timeout[6] = setTimeout(show6,6000)
        }

        function show6()
        {
            setImage('1')
            id('leaf6').style.webkitAnimation = 'leaf6_out 1.5s linear both';
            id('div5h').style.webkitAnimation = 'div5h_out 2s ease-out both';
            id('div5v').style.webkitAnimation = 'div5v_out 2s ease-out both';

            id('leaf2').style.webkitAnimation = 'leaf2_in 1.5s 2s ease-out both';
            id('div1v').style.webkitAnimation = 'div1v_in 1.5s 2s ease-out both';
            id('div1h').style.webkitAnimation = 'div1h_in 1.5s 2s ease-out both';

            timeout[7] = setTimeout(show2,6000)
        }

        call_me(load_images)



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
                // 本模板为深圳量子云科技有限公司版权所有，抄袭必究
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
                    distitle();
                }
                else
                {
                    dis_titletime = delaytime- dis_titletime;
                    timeout[0] = setTimeout(function()
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
                    timeout[0] = setTimeout(function()
                    {
                        distitle();
                    },dis_titletime);
                }

            }

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
        function setImage(idname)
        {
            if(reshow == true)
                return;

            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                console.log(Onload_imgs_url[image_url_index]);
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
                width = 480;
                height = 350;
            }
            else
            {
                divname = idname + 'v';
                div = id('div'+idname+'v');
                div1 = id('div'+idname+'h');
                width = 400;
                height = 584;
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var img = id('img'+divname);
            img.src = Onload_imgs_url[image_url_index];

            var word = id('word'+divname);
            var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            if(word_string != undefined)
            {
                word_string = word_string.replace(/[\n]/ig,'');
                word.style.top = "94%";
                var word_length = word_string.length;

                if(word_length < 5)
                {
                    word.style.fontSize = "25px";
                }else {
                    word.style.fontSize = "23px";
                    if(word_length > 10)
                    {
                        word_string = insertEnter(word_string, 5);
                        word.style.top = "86%";
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


        function reload_scene()
        {
            clearnode();
            reshow = true;
            setTimeout(load_images,100);
        }

        function clearnode()
        {
            id('pagetitle').style.webkitAnimation = '';

            for(var i = 0; i<timeout.length; i++)
            {
                clearTimeout(timeout[i])
            }

            var elements = ['div1h','div1v','div2h','div2v','div3v','div3h','div4v','div4h','div5h','div5v','leaf1','camara','leaf2','leaf3','leaf31','leaf4','leaf5','leaf6','yezi1','yezi2','yezi3','yezi4','yezi5','yezi6','yezi7','yezi8','xian','letter1','letter2','letter3','letter4'];
            for(var i=0;i<elements.length;i++)
            {
                if(i <10)
                    id(elements[i]).style.display = 'none';
                id(elements[i]).style.webkitAnimation = '';
            }


        }
        load_init_modules();

    }

    return{
        init: init
    }
})