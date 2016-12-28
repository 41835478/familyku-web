/**
 * Created by 321 on 2016/10/12.
 */
'use strict'
define(["./../../../js/common/render","./../../../js/app/baseFinal"],function (Render,Final) {
    var userData,
        TMPL = {
        tmpl_shuye: '/template/03_tmp_sinian/js/tmpl_sinian.js'
    }
    var init = function (data) {
        console.log("init");
        userData= data;
        $("head").append(' <link type="text/css" rel="stylesheet" href="/template/03_tmp_sinian/css/sinian.css?ver=3" />');
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
        var date = 20161228;
        var zan_num = 0;
        var e_bookid = 'Fpx5HcVlzcqzh6tUDccbZ3SWqjo-y2-Y';
        var e_desc = {"de":"\u6211\u5236\u4f5c\u4e86\u76f8\u518c\uff0c\u6253\u5f00\u770b\u770b\u5427"}["de"];
        var e_openid = null;
        var e_scene = 'jiniance';
        var editmode = false;
        var wxid = 'haoyy';
        var shareid = '';
        var guanzhu_url = 'http://mp.weixin.qq.com/s?__biz=MzI2OTE1ODE5Ng==&mid=556186322&idx=1&sn=ba8b09d58e55b73df38fce1d1a90b0f7#rd';
        var words = {"hn_467579161984":"abc\u2006c\u2006c\u2006c","hn_467579172547":"\u5403\u9971\u554a\u554a\u554a\u554a\u554a"};
        var app = '';
        var onmake = '';
        var e_music_url = 'http://sound.kagirl.net/sound/downbythesalleygardens.mp3';
        var e_music_title = '';
        var tbssaveoff = false;
        var isguangchang = '';
        var isshow = '';
        var gotomake = '';

        function id(name)
        {
            return document.getElementById(name);
        }
        var image_size_width=[];
        var image_size_height=[];
        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
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


        function loadimages()
        {
            id('pagetitle').style.display = 'none';
            id('pageword1').style.display = 'none';
            id('pageword2').style.display = 'none';
            id('pagewordin1').style.display = 'none';
            id('pagewordin2').style.display = 'none';
            id('title1').style.display = 'none';
            id('title11').style.display = 'none';
            id('pagetitle').style.webkitAnimation = '';
            id('pageword1').style.webkitAnimation = '';
            id('pageword2').style.webkitAnimation = '';
            id('pagewordin1').style.webkitAnimation = '';
            id('pagewordin2').style.webkitAnimation = '';
            id('title1').style.webkitAnimation = '';
            id('title11').style.webkitAnimation = '';
            showtitle();
            reshow = false;
            image_size_width=[];
            image_size_height=[];
            Onload_imgs_url=[];
            image_url_index=0;
            have_num = 0;
            error_num = 0;

            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);
            clearTimeout(timeout7);
            // clearTimeout(timeout8);

            id('page11h').style.display = 'none';
            id('page11s').style.display = 'none';
            id('page12h').style.display = 'none';
            id('page12s').style.display = 'none';
            id('page2h').style.display = 'none';
            id('page2s').style.display = 'none';
            id('page31h').style.display = 'none';
            id('page32h').style.display = 'none';
            id('page31s').style.display = 'none';
            id('page32s').style.display = 'none';
            id('page4h').style.display = 'none';
            id('page4s').style.display = 'none';
            id('page4s').style.display = 'none';
            id('cafe').style.display = 'none';
            id('dou1').style.display = 'none';
            id('dou2').style.display = 'none';
            id('pan').style.display = 'none';
            id('paper').style.display = 'none';
            id('hudie').style.display = 'none';
            id('yezi').style.display = 'none';
            id('word1').style.display = 'none';
            id('word2').style.display = 'none';
            canshow = true;

            bl_keepload = 'first';
            step_load();
        }

        //每次执行加载后6张图片
        var bl_keepload = 'first';
        var step_loadnum = 6;
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
            if((have_num+error_num >= step_loadnum || slider_images_url.length == (have_num+error_num)) && canshow == true)
            {
                canshow = false;
                if(have_num == 0)
                    return;
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                if(end_titletime-begin_titletime>7000)
                {
                    show1();
                }
                else
                {
                    var dis_titletime = end_titletime-begin_titletime;
                    dis_titletime = 7000- dis_titletime;
                    timeout5 = setTimeout(show1,dis_titletime);
                }

            }
        }
        function image_onload(event)
        {
            // console.log(this.complete);
            if(reshow == true)
                return;
            var img = event.target;
            var index = img.index;
            if(index <step_loadnum)
                have_num ++ ;
            Onload_imgs_url[index] = img.src;
            image_size_height[index] = img.height;
            image_size_width[index] = img.width;

            console.log(Onload_imgs_url[index]);
            // console.log(have_num + '-' + error_num);
            if((have_num + error_num >= step_loadnum || slider_images_url.length == (have_num+error_num)) && canshow == true)
            {
                canshow = false;
                if(have_num == 0)
                    return;
                var end_titletime = new Date();
                end_titletime = end_titletime.getTime();
                if(end_titletime-begin_titletime>7000)
                {
                    show1();
                }
                else
                {
                    var dis_titletime = end_titletime-begin_titletime;
                    dis_titletime = 7000- dis_titletime;
                    timeout5 = setTimeout(show1,dis_titletime);
                }

            }
        }
        function showtitle()
        {

            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
            setword();
            id('pagetitle').style.display = 'block';
            id('pageword1').style.display = 'block';
            id('pageword2').style.display = 'block';
            id('pagewordin1').style.display = 'block';
            id('pagewordin2').style.display = 'block';
            id('title1').style.display = 'block';
            id('title11').style.display = 'block';

        }

        function setword()
        {
            // if(reshow == true)
            //     return;
            var line = id('titleline');
            id('titleword1').innerHTML = e_desc;
            id('titleword2').innerHTML = e_desc;

            line.style.webkitAnimation = 'titleline1 1s linear both';

            timeout8 = setTimeout(time6,1200);

        }

        function time6()
        {
            id('titleline').style.webkitAnimation = 'titleline2 5s linear both';
            id('pageword1').style.webkitAnimation = 'pageword1 1s linear 0s both';
            id('pagewordin1').style.webkitAnimation = 'pagewordin1 1s linear 0s both';
            id('pageword2').style.webkitAnimation = 'pagewordin1 1s linear 2s both';
            id('pagewordin2').style.webkitAnimation = 'pageword1 1s linear 2s both';
            timeout7 = setTimeout(time7,4000)
        }
        function time7()
        {
            id('titleline').style.webkitAnimation = 'titleline3 1.2s linear both';
            id('title1').style.webkitAnimation = 'title1 1.2s linear both';
            id('title11').style.webkitAnimation = 'title11 1.2s linear both';
            id('pagetitle').style.webkitAnimation  = 'titlefadeout 0.5s 1.5s linear both';
        }
        function show1()
        {
            if(reshow == true)
                return;
            id('page4s').style.webkitAnimation = 'page4hout 1s ease-in both';
            id('page4h').style.webkitAnimation = 'page4hout 1s ease-in both';
            id('cafe').style.webkitAnimation = 'cafeout 1s ease-in both';
            id('dou1').style.webkitAnimation = 'dou1out 1s ease-in both';
            id('dou2').style.webkitAnimation = 'dou2out 1s ease-in both';
            id('word2').style.webkitAnimation = 'word2move 1s linear both';

            id('yezi').style.display = 'block';
            id('word1').style.display = 'block';

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('11');
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('12');
            image_url_index++;

            id('yezi').style.webkitAnimation = 'yeziin 1.5s ease-out both';
            id('word1').style.webkitAnimation = 'word1move 1.5s linear both';
            id('page11s').style.webkitTransformOrigin = '50% 50%';
            id('page12s').style.webkitTransformOrigin = '50% 50%';
            id('page11s').style.webkitAnimation = 'page11hin 1.5s ease-out both';
            id('page12s').style.webkitAnimation = 'page12hin 1.5s ease-out both';
            id('page11h').style.webkitTransformOrigin = '50% 50%';
            id('page12h').style.webkitTransformOrigin = '50% 50%';
            id('page11h').style.webkitAnimation = 'page11hin 1.5s ease-out both';
            id('page12h').style.webkitAnimation = 'page12hin 1.5s ease-out both';

            timeout1 = setTimeout(show2,4000)
        }

        function show2()
        {
            if(reshow == true)
                return;
            id('yezi').style.webkitAnimation = 'yeziout 1s linear both';
            id('page11s').style.webkitAnimation = 'page11hout 1.2s ease-in both';
            id('page12s').style.webkitAnimation = 'page12hout 0.8s ease-in both';
            id('page11h').style.webkitAnimation = 'page11hout 1.2s ease-in both';
            id('page12h').style.webkitAnimation = 'page12hout 0.8s ease-in both';
            id('hudie').style.display = 'block';

            id('qi').style.webkitAnimation = '';

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('2');
            image_url_index++;

            id('page2h').style.webkitAnimation = 'page2sin 1.5s ease-out both';
            id('page2s').style.webkitAnimation = 'page2sin 1.5s ease-out both';
            id('hudie').style.webkitAnimation = 'hudie 6s linear both';
            id('chishang').style.webkitAnimation = 'chibang 6s linear infinite';
            id('chixia').style.webkitAnimation = 'chibang 6s linear infinite';
            id('chishangying').style.webkitAnimation = 'chibang 6s linear infinite';
            id('chixiaying').style.webkitAnimation = 'chibang 6s linear infinite';

            timeout2 = setTimeout(show3,4000);
        }

        function show3()
        {
            if(reshow == true)
                return;
            id('page2h').style.webkitAnimation = 'page2sout 1.2s ease-in both';
            id('page2s').style.webkitAnimation = 'page2sout 1.2s ease-in both';
            id('word1').style.webkitAnimation = 'word2move 1s linear both';
            id('word2').style.webkitAnimation = 'word3move 1s 1s linear both';

            id('paper').style.display = 'block';
            id('pan').style.display = 'block';

            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('31');
            image_url_index++;
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('32');
            image_url_index++;

            id('page31s').style.webkitAnimation = 'page31hin 1.5s 0.2s ease-out both';
            id('page32s').style.webkitAnimation = 'page32hin 1.5s 0.2s ease-out both';
            id('page31h').style.webkitAnimation = 'page31hin 1.5s 0.2s ease-out both';
            id('page32h').style.webkitAnimation = 'page32hin 1.5s 0.2s ease-out both';
            id('paper').style.webkitAnimation = 'paperin 1.5s 0.8s ease-out both';
            id('pan').style.webkitAnimation = 'panin 1.5s 1.2s ease-out both';

            timeout3 = setTimeout(show4,4000);
        }
        function show4 ()
        {
            if(reshow == true)
                return;
            id('pan').style.webkitAnimation = 'panout 1.5s ease-in both';
            id('paper').style.webkitAnimation = 'paperout 1.5s ease-in both';
            id('page31s').style.webkitAnimation = 'page31hout 1.6s ease-in both';
            id('page32s').style.webkitAnimation = 'page32hout 2s ease-in both';
            id('page31h').style.webkitAnimation = 'page31hout 1.6s ease-in both';
            id('page32h').style.webkitAnimation = 'page32hout 2s ease-in both';

            // id('page4s').style.display = 'block';
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;
            setImage('4');
            image_url_index++;

            id('cafe').style.display = 'block';
            id('dou1').style.display = 'block';
            id('dou2').style.display = 'block';
            id('hudie').style.webkitAnimation = '';

            id('page4s').style.webkitAnimation = 'page4hin 1.9s 0.2s ease-out both';
            id('page4h').style.webkitAnimation = 'page4hin 1.9s 0.2s ease-out both';
            id('dou11').style.webkitAnimation = 'douzhuan 1.3s linear 1 0.5s both';
            id('dou22').style.webkitAnimation = 'douzhuan 1s linear 1 0.7s both';
            id('cafe').style.webkitAnimation = 'cafein 1.3s 0.5s ease-out both';
            id('dou1').style.webkitAnimation = 'dou1in 1s 0.7s ease-out both';
            id('dou2').style.webkitAnimation = 'dou2in 1.3s 0.5s ease-out both';
            id('qi').style.webkitAnimation = 'qi 2.5s 1s linear both';

            timeout4 = setTimeout(show1,4000);

        }
        var divwidth = {'11h':368,'11s':256,'12h':383,'12s':262,'2h':446,'2s':397,'31h':354,'31s':249,'32h':354,'32s':247,'4h':446,'4s':322};
        var divheight = {'11h':256,'11s':368,'12h':262,'12s':383,'2h':286,'2s':561,'31h':249,'31s':354,'32h':249,'32s':333,'4h':322,'4s':495};

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
            console.log('setimg:' + Onload_imgs_url[image_url_index]);

            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];
            var div;
            var div1;
            var divname;

            if(img_bili > 1)
            {
                divname = idname + 'h';
                div = id('page'+idname+'h');
                div1 = id('page'+idname+'s');
                var word = id('word' + divname);
            }
            else  //竖
            {
                divname = idname + 's';
                div = id('page'+idname+'s');
                div1 = id('page'+idname+'h');
                var word = id('word' + divname);
            }

            div.style.display = 'block';
            div1.style.display = 'none';


            var height = divheight[divname];
            var width = divwidth[divname];

            var img = id('img'+divname);


            var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            if(word_string != undefined)
            {
                word_string = word_string.replace(/[\n]/ig,'');

                var word_length = word_string.length;
                if(word_length <= 4)
                {
                    word.style.fontSize = "24px";
                }else {
                    if(img_bili > 1)
                        word.style.fontSize = "24px";
                    else
                        word.style.fontSize = "19px";
                    if(word_length > 10)
                        word_string = insertEnter(word_string, 5);
                }
                word.innerText = word_string;
            }
            else
            {
                word.innerText = "";
            }

            img.src = Onload_imgs_url[image_url_index];
            // console.log(img.src);

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
        }
        call_me(loadimages);
        function reload_scene()
        {
            reshow = true;
            loadimages();
        }

        load_init_modules();

    }

    return{
        init: init
    }
})