/**
 * Created by 321 on 2016/10/12.
 */
'use strict'
define(["./../../../js/common/render"],function (Render) {
    var userData,
        TMPL = {
        tmpl_shuye: '/template/01_tmp_shuye/js/tmpl_shuye.js'
    }
    var init = function (data) {
        userData= data;
        console.log("abc");
        $("head").append(' <link type="text/css" rel="stylesheet" href="/template/01_tmp_shuye/css/shuye.css?ver=3" />');
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
        var atkname = 'youmei';



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

        var ua = navigator.userAgent.toLowerCase();

        //if(ua.match(/MicroMessenger/i) == 'micromessenger')
        //{
        //    wx.ready(load_init_modules);
        //}
        //else
        //{
        //    onload = load_init_modules;
        //}

        var slider_images_url = [];
        slider_images_url.push('../../../demo/green/userImg/hn_445211448943.jpg');
        var date = 20161103;
        var zan_num = 0;
        var e_bookid = 'Fpx5HcVlzcptiKiQwQ9VHULpFle0vk3f';
        var e_desc = '我是模版'+localStorage.getItem("familyku_tmpId");
        var e_openid = null;
        var e_scene = 'rose';
        var editmode = false;
        var wxid = 'haoyy';
        var shareid = '';
        var guanzhu_url = 'http://haoyy0.kagirl.cn/kphoto/more1.php?wxid=haoyy';
        var words = {};
        var app = '';
        e_openid = 'T_9RB8DEFShzyGSkhTLVbY3-f6SEc_PQEAFUoTWfJaU35DqqcCGofuNkU_Vx9Z13QOV1fV6lJlM';editmode = true; e_scene = 'faya';
        var e_music_url = '../../../demo/music/menglishuixiang.mp3';
        var e_music_title = '';
        var tbssaveoff = false;
        var isguangchang = '';
        if(userData){
            slider_images_url=[];
            var userImg=userData.images;
            for(var i=0;i<userImg.length;i++){
                slider_images_url.push(userImg[i].img);
            }
            console.log(slider_images_url);
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

            id('pagetitle').style.webkitAnimation = 'title_in 1.5s ease-out both';
            id('titlecontent').innerHTML = e_desc;
        }

        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'title_out 2.5s ease-in both';
            timeout1 = setTimeout(show1,2000)

        }

        function show1()
        {
            setImageindex();
            set_items_position('1');

            id('div1con').style.webkitAnimation = 'div1_in 2s ease-out both';

            timeout2 = setTimeout(show2,6000)
        }

        function show2()
        {
            setImageindex();
            set_items_position('2');

            id('div1con').style.webkitAnimation = 'div1_out 1.5s ease-in both'
            id('div2con').style.webkitAnimation = 'div2_in 2s ease-out 1s both';

            timeout3 = setTimeout(show3,6000)
        }

        function show3()
        {
            setImageindex();
            set_items_position('3');

            id('div2con').style.webkitAnimation = 'div2_out 1.5s ease-in both'
            id('div3con').style.webkitAnimation = 'div3_in 2s ease-out 1s both';

            timeout4 = setTimeout(show4,6000)
        }

        function show4()
        {
            setImageindex();
            set_items_position('4');

            id('div3con').style.webkitAnimation = 'div3_out 1.5s ease-in both'
            id('div4con').style.webkitAnimation = 'div4_in 2s ease-out 1s both';

            timeout5 = setTimeout(show1_1,6000)

        }

        function show1_1()
        {
            setImageindex();
            set_items_position('1');

            id('div4con').style.webkitAnimation = 'div4_out 1.5s ease-in both'
            id('div1con').style.webkitAnimation = 'div1_in 2s ease-out 1s both';

            timeout6 = setTimeout(show2,6000)
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

        function set_items_position(pageid)
        {
            var screenWidth=window.screen.width;
            var img_bili = image_size_width[image_url_index]/image_size_height[image_url_index];

            console.log(img_bili);
            var div = id('div'+pageid);
            var img = id('img'+pageid);

            img.src = Onload_imgs_url[image_url_index];

            var word = id("word" + pageid);
            var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
            if(word_string != undefined)

            {
                word_string = word_string.replace(/[\n]/ig,'');

                var word_length = word_string.length;
                if(word_length >= 5)
                {
                    word.style.fontSize = "25px";
                    if(word_length > 10)
                        word_string = insertEnter(word_string, 5);
                }else {
                    word.style.fontSize = "28px";
                }
                word.innerText = word_string;
            }
            else
            {
                word.innerText = "";
            }

            //if(img_bili >= 1)
            //{
            //    id('wenzi'+pageid+'_1').style.top = '158px';
            //    id('wenzi'+pageid+'_2').style.top = '158px';
            //
            //
            //    div.style.width = '460px';
            //    if(img_bili > (460/300))
            //    {
            //        div.style.height = '300px';
            //
            //        img.style.height = '300px';
            //        img.style.width = 300 * img_bili + 'px';
            //        img.style.left = (460 - 300 * img_bili)/2 + 'px';
            //        img.style.top = '0px';
            //    }
            //    else
            //    {
            //        div.style.height = 460 / img_bili + 'px';
            //
            //        img.style.width = '460px';
            //        img.style.height = 460/img_bili+'px';
            //        img.style.left = '0px';
            //        img.style.top = '0px';
            //    }
            //
            //    div.style.left = '20px';
            //    div.style.top = '220px';
            //
            //}
            //else
            //{
            //    id('wenzi'+pageid+'_1').style.top = '38px';
            //    id('wenzi'+pageid+'_2').style.top = '38px';
            //
            //    div.style.width = '380px';
            //    if(img_bili < (380/600))
            //    {
            //        div.style.height = '600px';
            //
            //        img.style.width = '380px';
            //        img.style.height = 380 / img_bili + 'px';
            //        img.style.left = '0px';
            //        img.style.top = (600-380/img_bili)/2 + 'px';
            //    }
            //    else
            //    {
            //        div.style.height = 380 / img_bili+ 'px';
            //
            //        img.style.width = '380px';
            //        img.style.height = 380 / img_bili + 'px';
            //        img.style.left = '0px';
            //        img.style.top = '0px';
            //    }
            //
            //    div.style.left = '60px';
            //    div.style.top = '100px';
            //}

            var tmpWidth=screenWidth*0.9;
            if(img_bili >= 1)
            {
                id('wenzi'+pageid+'_1').style.top = '158px';
                id('wenzi'+pageid+'_2').style.top = '158px';


                div.style.width = tmpWidth+'px';
                if(img_bili > (tmpWidth/300))
                {
                    div.style.height = '300px';

                    img.style.height = '300px';
                    img.style.width = 300 * img_bili + 'px';
                    img.style.left = (tmpWidth - 300 * img_bili)/2 + 'px';
                    img.style.top = '0px';
                }
                else
                {
                    div.style.height = tmpWidth / img_bili + 'px';

                    img.style.width = tmpWidth+'px';
                    img.style.height = tmpWidth/img_bili+'px';
                    img.style.left = '0px';
                    img.style.top = '0px';
                }

                div.style.left = '20px';
                div.style.top = '220px';

            }
            else
            {
                id('wenzi'+pageid+'_1').style.top = '38px';
                id('wenzi'+pageid+'_2').style.top = '38px';


                div.style.width = tmpWidth+'px';
                if(img_bili < (tmpWidth/600))
                {
                    div.style.height = '600px';

                    img.style.width = tmpWidth+'px';
                    img.style.height = tmpWidth / img_bili + 'px';
                    img.style.left = '0px';
                    img.style.top = (600-tmpWidth/img_bili)/2 + 'px';
                }
                else
                {
                    div.style.height = tmpWidth / img_bili+ 'px';

                    img.style.width = tmpWidth+'px';
                    img.style.height = tmpWidth / img_bili + 'px';
                    img.style.left = '0px';
                    img.style.top = '0px';
                }

                div.style.left = '25px';
                div.style.top = '100px';
            }

            image_url_index++;

        }


        call_me(load_images);
        var image_size_width=[];
        var image_size_height=[];
        var image_url_index=0;
        var have_num = 0;
        var error_num = 0;
        var canshow = true;
        var reshow = false;
        var delaytime=5000;
        var Onload_imgs_url;
        var begin_titletime;

        var timeout0;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;
        var timeout6;

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
        function setImageindex()
        {
            if(image_url_index == Onload_imgs_url.length)
                image_url_index = 0;

            while(Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading')
            {
                // console.log('setimg:' + Onload_imgs_url[image_url_index]);
                if(image_url_index % step_loadnum == 0)
                {
                    step_load();
                }
                image_url_index++;
                if(image_url_index == Onload_imgs_url.length)
                    image_url_index = 0;
            }



            console.log('setimg:' + Onload_imgs_url[image_url_index]);
            if(image_url_index % step_loadnum == 0)
            {
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
            id('div1con').style.webkitAnimation = '';
            id('div2con').style.webkitAnimation = '';
            id('div3con').style.webkitAnimation = '';
            id('div4con').style.webkitAnimation = '';
            id('pagetitle').style.webkitAnimation = '';

            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);
            clearTimeout(timeout6);

        }



        if(typeof(objid) === "undefined")
        {
            var objid = function(id)
            {
                return document.getElementById(id);
            }
        }

        function on_wx_music_init()
        {
            if(e_desc != "")
            {
                document.title = e_desc.replace("<br>", "\n").replace("<br/>", "\n");;
            }
            else
            {
                document.title = "音乐相册";
            }
            loadingdiv_out();
            create_music();
            on_weixin_share();
            setTimeout(get_address, 500);

            if(wxid == 'zuiquan' || wxid == 'youran')
                read_localstorage();
            var locationurl = window.location.href;
            // if(locationurl.indexOf('debug')!=-1)
            // {
            check_cookie();
            // }

            if(editmode == false)
            {
                var obj = document.getElementById("guanzhu_container");
                obj.style.visibility = 'visible';
                if(navigator.userAgent.match(/MicroMessenger/) == null)
                {
                    obj.innerHTML = "点我更多精彩";
                    obj.style.display = 'none';
                }

                objid("jubao-click").style.display = "block";
                //var obj = document.getElementById("kawa-youli");
                //obj.style.visibility = 'visible';
            }
            var locationurl = window.location.href;
            if(locationurl.indexOf('hidden')!=-1)
            {
                objid('guanzhu_container').style.display = 'none';
            }


            if(locationurl.indexOf('noshow')!=-1)
            {
                objid('guanzhu_container').style.display = 'none';
            }

            if(editmode == false && app == "xdxj")
            {
                objid('guanzhu_container').style.display = 'block';
            }

            checkletter();

            if(tbssaveoff && isguangchang == "guangchang")
            {
                objid("saveoff").style.display = "block";
            }
        }

        call_me(on_wx_music_init);

        //音乐播放

        var music_header   = 'http://kawaweika.qiniudn.com/sound/';
        var e_music_player = new Audio();
        var mymusic;

        function play_music()
        {
            if(e_music_url == '')
            {
                return ;
            }

            if(e_music_url.indexOf('qqmusic') != -1)
            {
                mymusic = 'https://qnphoto.kagirl.cn/music/688042.m4a';
            }
            else
            {
                mymusic = e_music_url;
            }

            e_music_player.src  = mymusic;
            e_music_player.loop = 'loop';

            console.log(e_music_player.src);
            e_music_player.onerror = function(){
                if(e_music_url.indexOf("http://sound.kagirl.net") != -1)
                {
                    var url = e_music_url.replace("http://sound.kagirl.net", "https://music.kagirl.cn");
                }
                else
                {
                    var url = e_music_url.replace("https://music.kagirl.cn", "http://sound.kagirl.net");
                }

                e_music_player.src = url;
                e_music_player.play();
                e_music_player.onerror = null;
            }

            e_music_player.play();

            //检查音乐是否缓冲成功
            setTimeout(function()
            {
                var timeRanges = e_music_player.buffered;
                var timeBuffered = timeRanges.end(timeRanges.length - 1);
                var bufferPercent = timeBuffered /e_music_player.duration;
                console.log('music:'+bufferPercent);

                if(isNaN(bufferPercent) || bufferPercent == 0)
                {
                    if(e_music_url.indexOf("http://sound.kagirl.net") != -1)
                    {
                        var url = e_music_url.replace("http://sound.kagirl.net", "http://kawaweika.qiniudn.com");
                    }
                    else
                    {
                        var url = e_music_url.replace("https://music.kagirl.cn", "http://sound.kagirl.net");
                    }
                    e_music_player.src = url;
                    e_music_player.play();
                }
            },5000);


            if(objid('sound_image'))
            {
                objid('sound_image').style.webkitAnimation     = "zhuan 1s linear infinite";
            }

            bplay = 1;
        }

        function create_music()
        {
            if(e_music_url == '')
            {
                return ;
            }

            play_music();

            var sound_div = document.createElement("div");
            sound_div.setAttribute("ID", "cardsound");
            sound_div.style.cssText = "position:fixed;right:20px;top:25px;z-index:50;visibility:visible;";
            sound_div.onclick = switchsound;

            var bg_htm  = "<img id='sound_image' src='img/music_note_big.png' style='-webkit-animation:zhuan 1s linear infinite'>";
            var txt_htm = "<div id='music_txt' style='color:white;position:absolute;left:-40px;top:30px;width:60px'></div>"

            sound_div.innerHTML = bg_htm  + txt_htm;

            document.body.appendChild(sound_div);
        }

        function loadingdiv_out()
        {
            objid('loadingdiv').style.webkitAnimation = 'fadeout 0.3s linear both';
            if(navigator.userAgent.indexOf('Windows Phone')!=1)
            {
                objid('loadingdiv').style.display = 'none';
            }

            setTimeout(function()
            {
                objid('loadingdiv').style.display = 'none';
            },400)
        }
        load_init_modules();
    }

    return{
        init: init
    }
})