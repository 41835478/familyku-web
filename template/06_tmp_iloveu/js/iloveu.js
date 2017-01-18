/**
 * Created by 321 on 2016/10/12.
 */
'use strict'
define(["./../../../js/common/render","./../../../js/app/baseFinal"],function (Render,Final) {
    var userData,
        TMPL = {
        tmpl_shuye: '/template/06_tmp_iloveu/js/tmpl_iloveu.js'
    }
    var init = function (data) {
        console.log("init");
        userData= data;
        $("head").append(' <link type="text/css" rel="stylesheet" href="/template/06_tmp_iloveu/css/iloveu.css?ver=3" />');
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

        function showtitle()
        {
            id('heart1').style.webkitAnimation = 'beat1 0.3s 2 ease-in alternate both';
            id('heart2').style.webkitAnimation = 'beat2 0.3s 2 0.2s ease-in alternate both';
            id('heart3').style.webkitAnimation = 'beat3 0.3s 2 0.4s ease-in alternate both';
            id('heart4').style.webkitAnimation = 'beat4 0.3s 2 0.6s ease-in alternate both';
            id('heart5').style.webkitAnimation = 'beat5 0.3s 2 0.8s ease-in alternate both';

            timeout[1] = setTimeout(function()
            {
                id('heart1').style.webkitAnimation = 'p1_1 2s ease-in-out both';
                id('heart2').style.webkitAnimation = 'p1_2 2s ease-in-out both';
                id('heart3').style.webkitAnimation = 'p1_3 2s ease-in-out both';
                id('heart4').style.webkitAnimation = 'p1_4 2s ease-in-out both';
                id('heart5').style.webkitAnimation = 'p1_5 2s ease-in-out both';
                id('dai1').style.webkitAnimation = 'dai1-in 1.5s 0.5s linear both';

                id('titlecontent').innerHTML = e_desc;
                id('pagetitle').style.webkitAnimation = 'title_in 1s 2s linear both';

                timeout[2] = setTimeout(function()
                {
                    id('dai1').style.webkitClipPath = 'polygon(0px 0px,0px 146px,357px 146px,357px 0px)';
                    id('dai1').style.webkitAnimation = 'title_in1 1s ease-out both';

                },2000)
            },1500)
        }


        function liangziyun_kawa()
        {
            setpage(1);
            setImage('1');
            id('page6').style.display = 'none';
            id('dai1').style.webkitAnimation = 'p1_7 2s ease-out both';
            id('love520').style.webkitAnimation = 'p1_6 2s ease-out both';
            id('pagetitle').style.webkitAnimation = 'title_out 0.5s ease-out both';

            id('page1').style.display = 'block';
            id('page1').style.webkitAnimation = 'div1_in 1s 1s ease-out both';
            timeout[3] = setTimeout(show2, 5000)
        }


        function show2()
        {
            setpage(2);
            setImage('21');
            setImage('22');

            id('heart1').style.webkitAnimation = 'p2_1 2s ease-in-out both';
            id('heart2').style.webkitAnimation = 'p2_2 2s ease-in-out both';
            id('heart3').style.webkitAnimation = 'p2_3 2s ease-in-out both';
            id('heart4').style.webkitAnimation = 'p2_4 2s ease-in-out both';
            id('heart5').style.webkitAnimation = 'p2_5 2s ease-in-out both';

            id('love520').style.webkitAnimation = 'out1_520 1s ease-in-out both';
            id('dai1').style.webkitAnimation = 'out1_dai1 1s ease-in-out both';
            id('page1').style.webkitAnimation = 'div1_out 1s ease-in-out both';

            id('page2').style.display = 'block';
            id('pagetitle').style.display = 'block';

            id('dai2').style.webkitAnimation = 'dai2_in 1.5s 1s ease-out both';
            id('div21h').style.webkitAnimation = 'div21_in 1.5s 1s ease-out both';
            id('div22h').style.webkitAnimation = 'div22_in 1.5s 1s ease-out both';
            id('div21v').style.webkitAnimation = 'div21_in 1.5s 1s ease-out both';
            id('div22v').style.webkitAnimation = 'div22_in 1.5s 1s ease-out both';

            timeout[4] = setTimeout(show3,7000)
        }

        function show3()
        {
            setpage(3);
            setImage('3');

            id('dai2').style.webkitAnimation = 'dai2_out 1s linear both';
            id('div21h').style.webkitAnimation = 'div21_out 1s linear both';
            id('div22h').style.webkitAnimation = 'div22_out 1s linear both';
            id('div21v').style.webkitAnimation = 'div21_out 1s linear both';
            id('div22v').style.webkitAnimation = 'div22_out 1s linear both';

            id('heart1').style.webkitAnimation = 'p3_1 2s ease-in-out both';
            id('heart2').style.webkitAnimation = 'p3_2 2s ease-in-out both';
            id('heart3').style.webkitAnimation = 'p3_3 2s ease-in-out both';
            id('heart4').style.webkitAnimation = 'p3_4 2s ease-in-out both';
            id('heart5').style.webkitAnimation = 'p3_5 2s ease-in-out both';

            id('page3').style.display = 'block';
            id('div3v').style.webkitAnimation = 'aa_in_bounce_center 1.5s 1s ease-out both';
            id('div3h').style.webkitAnimation = 'aa_in_bounce_center 1.5s 1s ease-out both';
            id('love520').style.webkitAnimation = 'in3_520 1.5s 1s ease-out both';
            id('en3').style.webkitAnimation = 'in_en3 1.5s 1s ease-out both';


            timeout[5] = setTimeout(show4,5000)
        }

        function show4()
        {
            setpage(4);
            setImage('41');
            setImage('42');

            id('div3v').style.webkitAnimation = 'aa_out_bounce_center 1s ease-out both';
            id('div3h').style.webkitAnimation = 'aa_out_bounce_center 1s ease-out both';
            id('love520').style.webkitAnimation = 'out3_520 1s ease-out both';
            id('en3').style.webkitAnimation = 'out_en3 1s ease-out both';

            id('heart1').style.webkitAnimation = 'p4_1 2s ease-in-out both';
            id('heart2').style.webkitAnimation = 'p4_2 2s ease-in-out both';
            id('heart3').style.webkitAnimation = 'p4_3 2s ease-in-out both';
            id('heart4').style.webkitAnimation = 'p4_4 2s ease-in-out both';
            id('heart5').style.webkitAnimation = 'p4_5 2s ease-in-out both';

            id('page4').style.display = 'block';
            id('div41v').style.webkitAnimation = 'div41_in 1.5s 1s ease-out both';
            id('div42v').style.webkitAnimation = 'div42_in 1.5s 1s ease-out both';
            id('div41h').style.webkitAnimation = 'div41_in 1.5s 1s ease-out both';
            id('div42h').style.webkitAnimation = 'div42_in 1.5s 1s ease-out both';
            id('en4').style.webkitAnimation = 'in_en3 1.5s 1s ease-out both';
            id('dai4').style.webkitAnimation = 'dai4_in 1.5s 1s ease-out both';


            timeout[6] = setTimeout(show5,7000)
        }

        function show5()
        {
            setpage(5);
            setImage('5');

            id('dai4').style.webkitAnimation = 'dai4_out 1s linear both';
            id('en4').style.webkitAnimation = 'out_en3 1.5s linear both';
            id('div41v').style.webkitAnimation = 'div41_out 1.5s linear both';
            id('div42v').style.webkitAnimation = 'div42_out 1.5s linear both';
            id('div41h').style.webkitAnimation = 'div41_out 1.5s linear both';
            id('div42h').style.webkitAnimation = 'div42_out 1.5s linear both';
            // 本模板及模板代码为深圳量子云科技有限公司版权所有，抄袭必究
            id('heart1').style.webkitAnimation = 'p5_1 2s ease-in-out both';
            id('heart2').style.webkitAnimation = 'p5_2 2s ease-in-out both';
            id('heart3').style.webkitAnimation = 'p5_3 2s ease-in-out both';
            id('heart4').style.webkitAnimation = 'p5_4 2s ease-in-out both';
            id('heart5').style.webkitAnimation = 'p5_5 2s ease-in-out both';

            id('page5').style.display = 'block';
            id('div5h').style.webkitAnimation = 'div5_in 1.5s 1s ease-out both';
            id('div5v').style.webkitAnimation = 'div5_in 1.5s 1s ease-out both';
            id('dai5').style.webkitAnimation = 'dai5_in 1.5s 2s ease both';
            id('en5').style.webkitAnimation = 'in_en3 1.5s 2s ease-out both';

            timeout[7] = setTimeout(show6, 5000)
        }

        function show6()
        {
            setpage(6);
            setImage('61');
            setImage('62');

            id('en5').style.webkitAnimation = 'out_en3 1.5s linear both';
            id('div5h').style.webkitAnimation = 'div5_out 1.5s linear both';
            id('div5v').style.webkitAnimation = 'div5_out 1.5s linear both';
            id('dai5').style.webkitAnimation = 'dai5_out 1.5s linear both';

            id('heart1').style.webkitAnimation = 'p6_1 2s ease-in-out both';
            id('heart2').style.webkitAnimation = 'p6_2 2s ease-in-out both';
            id('heart3').style.webkitAnimation = 'p6_3 2s ease-in-out both';
            id('heart4').style.webkitAnimation = 'p6_4 2s ease-in-out both';
            id('heart5').style.webkitAnimation = 'p6_5 2s ease-in-out both';

            id('page6').style.display = 'block';
            id('div61v').style.webkitAnimation = 'div61_in 1.5s 1s ease-out both';
            id('div62v').style.webkitAnimation = 'div62_in 1.5s 1s ease-out both';
            id('div61h').style.webkitAnimation = 'div61_in 1.5s 1s ease-out both';
            id('div62h').style.webkitAnimation = 'div62_in 1.5s 1s ease-out both';

            id('en61').style.webkitAnimation = 'in_en3 1.5s 2s ease-out both';
            id('en62').style.webkitAnimation = 'left_in 1.5s 2s ease-out both';
            id('love520').style.webkitAnimation = 'love_in 1.5s 3s ease-out both';

            timeout[8] = setTimeout(show1,7000)
        }

        function show1()
        {
            setpage(1);
            setImage('1');

            console.log(id('page6').style.display);

            id('en61').style.webkitAnimation = 'out_en3 1.5s linear both';
            id('en62').style.webkitAnimation = 'left_out 1.5s linear both';
            id('love520').style.webkitAnimation = 'love_out 1.5s linear both';
            id('div61v').style.webkitAnimation = 'div61_out 1.5s linear both';
            id('div62v').style.webkitAnimation = 'div62_out 1.5s linear both';
            id('div61h').style.webkitAnimation = 'div61_out 1.5s linear both';
            id('div62h').style.webkitAnimation = 'div62_out 1.5s linear both';

            id('heart1').style.webkitAnimation = 'p0_1 2s ease-in-out both';
            id('heart2').style.webkitAnimation = 'p0_2 2s ease-in-out both';
            id('heart3').style.webkitAnimation = 'p0_3 2s ease-in-out both';
            id('heart4').style.webkitAnimation = 'p0_4 2s ease-in-out both';
            id('heart5').style.webkitAnimation = 'p0_5 2s ease-in-out both';

            id('page1').style.webkitAnimation = 'show1_3 1.5s 1s linear both';
            id('love520').style.webkitAnimation = 'show1_1 1.5s 1.5s linear both';
            id('dai1').style.webkitAnimation = 'show1_2 1.5s 1s linear both';

            timeout[9] = setTimeout(show2, 5000)
        }


        var divwidth  = {'1h':457,'1v':355,'21h':383,'21v':270,'22h':383,'22v':273,'3h':406,'3v':351,'41h':335,'41v':254,'42h':351,'42v':252,'5h': 414,'5v': 349,'61h':319,'61v':243,'62h':322,'62v': 240};
        var divheight = {'1h':354,'1v':456,'21h':275,'21v':382,'22h':275,'22v':370,'3h':314,'3v':437,'41h':261,'41v':321,'42h':281,'42v':315,'5h': 330,'5v': 439,'61h':221,'61v':318,'62h':232,'62v': 315};

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
            var img;

            if(img_bili > 1)
            {
                div = id('div'+idname + 'h');
                div1 = id('div'+idname + 'v');
                idname = idname + 'h';
            }
            else
            {
                div = id('div'+idname + 'v');
                div1 = id('div'+idname + 'h');
                idname = idname + 'v';
            }

            div.style.display = 'block';
            div1.style.display = 'none';

            var height = divheight[idname];
            var width = divwidth[idname];

            var img = id('img'+idname);
            img.style.backgroundImage = 'url('+Onload_imgs_url[image_url_index]+')';
            // console.log('setimg:'+ img.style.backgroundImage);

            var word = id('word'+idname);
            var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            if(word_string != undefined)
            {
                word_string = word_string.replace(/[\n]/ig,'');
                word.style.top = "85%";
                var word_length = word_string.length;
                if(word_length < 6)
                    word.style.fontSize = "26px";
                else
                {
                    word.style.fontSize = "23px";
                    if(word_length > 10)
                    {
                        word_string = insertEnter(word_string, 5);
                        word.style.top = "80%";
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
                img.style.backgroundSize = height*img_bili + 'px '+ height + 'px';
                img.style.backgroundPosition = -((height*img_bili-width)/2)+'px 0px';
                // img.style.top = '0px';
                // img.style.height = height + 'px';
                // img.style.width = height*img_bili + 'px';
                // img.style.left = -((height*img_bili-width)/2)+'px';
            }
            else
            {
                img.style.backgroundSize = width + 'px '+ width/img_bili + 'px';
                img.style.backgroundPosition = '0px ' +(-((width/img_bili-height)/2)) + 'px';
                // img.style.left = '0px';
                // img.style.width = width+'px';
                // img.style.height = width/img_bili + 'px';
                // img.style.top = -((width/img_bili-height)/2) + 'px';
            }
            image_url_index ++;
            if(image_url_index == Onload_imgs_url.length)
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

        var image_size_width=[];
        var image_size_height=[];
        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime=9000;
        var timeout = [];
        var showfont = false;


        // 本模板及模板代码为深圳量子云科技有限公司版权所有 抄袭必究
        function id (name)
        {
            return document.getElementById(name);
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
            // loading_first();
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

        function setpage(pageindex)
        {
            for(var i =1 ; i< 7;i++)
            {
                if(i != pageindex)
                {
                    id('page' + i).style.display = 'none';
                    if(pageindex == 1)
                    {
                        id('page6').style.display = 'block';
                    }
                    else
                        id('page'+(pageindex-1)).style.display = 'block';
                }
                else
                {
                    id('page' + i).style.display = 'block';

                }

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
            for(var i=0; i<timeout.length;i++)
            {
                clearTimeout(timeout[i])
            }

            for(var i = 1;i<7;i++)
            {
                id('page'+i).style.display = 'none';
            }

            id('pagetitle').style.display = 'block';
            id('pagetitle').style.webkitAnimation = '';
            id('dai1').style.webkitAnimation = '';
            id('love520').style.webkitAnimation = '';
            id('heart1').style.webkitAnimation = '';
            id('heart2').style.webkitAnimation = '';
            id('heart3').style.webkitAnimation = '';
            id('heart4').style.webkitAnimation = '';
            id('heart5').style.webkitAnimation = '';
            id('dai1').style.webkitClipPath = 'polygon(180px 0px,180px 146px,180px 146px,180px 0px)';

        }

        load_init_modules();

    }

    return{
        init: init
    }
})