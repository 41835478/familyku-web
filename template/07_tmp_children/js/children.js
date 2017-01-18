/**
 * Created by 321 on 2016/10/12.
 */
'use strict'
define(["./../../../js/common/render","./../../../js/app/baseFinal"],function (Render,Final) {
    var userData,
        TMPL = {
        tmpl_shuye: '/template/07_tmp_children/js/tmpl_children.js'
    }
    var init = function (data) {
        console.log("init");
        userData= data;
        $("head").append(' <link type="text/css" rel="stylesheet" href="/template/07_tmp_children/css/children.css?ver=3" />');
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
        var timeout8
        var moshi;

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

        var images_url_index=0;
        var have_num = 0;
        var error_num = 0;

        var image_size=[];

        var Onload_imgs = new Array();
        var canshow = true;
        var reshow = false;

        var timeout0;
        var timeout1;
        var timeout2;
        var timeout3;
        var timeout4;
        var timeout5;

        var delaytime = 4000;

        var get_pid = function(url){
            var index1 = url.indexOf("?");
            if(index1 != -1)
            {
                url = url.substr(0, index1);
            }
            return url.toString().substr(url.lastIndexOf("/") + 1);
        }

        function reset_all()
        {
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
            clearTimeout(timeout4);
            clearTimeout(timeout5);

            images_url_index=0;
            have_num = 0;
            error_num = 0;

            image_size=[];

            Onload_imgs = [];

            canshow = true;

            id('baby_page_1_0').style.webkitAnimation='';
            id('baby_page_1_1').style.webkitAnimation='';
            id('vertical_baby_page_1_0').style.webkitAnimation='';
            id('vertical_baby_page_1_1').style.webkitAnimation='';
            id('baby_page_2_0').style.webkitAnimation='';
            id('baby_page_2_1').style.webkitAnimation='';
            id('vertical_baby_page_2_0').style.webkitAnimation='';
            id('vertical_baby_page_2_1').style.webkitAnimation='';
            id('baby_page_3_0').style.webkitAnimation='';
            id('baby_page_3_1').style.webkitAnimation='';
            id('baby_page_3_2').style.webkitAnimation='';
            id('vertical_baby_page_3_0').style.webkitAnimation='';
            id('vertical_baby_page_3_1').style.webkitAnimation='';
            id('vertical_baby_page_3_2').style.webkitAnimation='';
            id('baby_page_4_0').style.webkitAnimation='';
            id('baby_page_4_1').style.webkitAnimation='';
            id('baby_page_4_2').style.webkitAnimation='';
            id('vertical_baby_page_4_0').style.webkitAnimation='';
            id('vertical_baby_page_4_1').style.webkitAnimation='';
            id('vertical_baby_page_4_2').style.webkitAnimation='';
            id('baby_page_5_0').style.webkitAnimation='';
            id('vertical_baby_page_5_0').style.webkitAnimation='';
            id('baby_page_0_0').style.webkitAnimation='';
            id('baby_page_0_1').style.webkitAnimation='';
            id('vertical_baby_page_0_0').style.webkitAnimation='';
            id('vertical_baby_page_0_1').style.webkitAnimation='';

            id('baby_page_1_0').style.display = 'none';
            id('baby_page_1_1').style.display = 'none';
            id('vertical_baby_page_1_0').style.display = 'none';
            id('vertical_baby_page_1_1').style.display = 'none';
            id('baby_page_2_0').style.display = 'none';
            id('baby_page_2_1').style.display = 'none';
            id('vertical_baby_page_2_0').style.display = 'none';
            id('vertical_baby_page_2_1').style.display = 'none';
            id('baby_page_3_0').style.display = 'none';
            id('baby_page_3_1').style.display = 'none';
            id('baby_page_3_2').style.display = 'none';
            id('vertical_baby_page_3_0').style.display = 'none';
            id('vertical_baby_page_3_1').style.display = 'none';
            id('vertical_baby_page_3_2').style.display = 'none';
            id('baby_page_4_0').style.display = 'none';
            id('baby_page_4_1').style.display = 'none';
            id('baby_page_4_2').style.display = 'none';
            id('vertical_baby_page_4_0').style.display = 'none';
            id('vertical_baby_page_4_1').style.display = 'none';
            id('vertical_baby_page_4_2').style.display = 'none';
            id('baby_page_5_0').style.display = 'none';
            id('vertical_baby_page_5_0').style.display = 'none';
            id('baby_page_0_0').style.display = 'none';
            id('baby_page_0_1').style.display = 'none';
            id('vertical_baby_page_0_0').style.display = 'none';
            id('vertical_baby_page_0_1').style.display = 'none';

            reshow = false;
            baby_loadimage();
        }
        function baby_show_page_0 ()
        {
            if(reshow == true)
                return;
            var moshi=[0,0];
            for(var i=0;i<2;i++)
            {
                if(images_url_index>=Onload_imgs.length)
                    images_url_index=0;

                var id_img=id('baby_img_0_'+i);

                baby_cut_image(0,i);
                if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>1)
                    moshi[i] = 0;
                else
                    moshi[i] = 1;

                images_url_index++;
            }

            if (moshi[0]==1)
            {
                id('vertical_baby_page_0_0').style.display='block';
                id('vertical_baby_page_0_0').style.webkitAnimation='ani_0_0 5s ease forwards';
            }
            else
            {
                id('baby_page_0_0').style.display='block';
                id('baby_page_0_0').style.webkitAnimation='ani_0_0 5s ease forwards';
            }

            if (moshi[1]==1)
            {
                id('vertical_baby_page_0_1').style.display='block';
                id('vertical_baby_page_0_1').style.webkitAnimation='ani_0_1 5s ease forwards';
            }
            else
            {
                id('baby_page_0_1').style.display='block';
                id('baby_page_0_1').style.webkitAnimation='ani_0_1 5s ease forwards';
            }

            id('baby_page_1_0').style.display='none';
            id('baby_page_1_1').style.display='none';
            id('baby_page_1_0').style.webkitAnimation='';
            id('baby_page_1_1').style.webkitAnimation='';

            id('vertical_baby_page_1_0').style.display='none';
            id('vertical_baby_page_1_1').style.display='none';
            id('vertical_baby_page_1_0').style.webkitAnimation='';
            id('vertical_baby_page_1_1').style.webkitAnimation='';

            timeout0 = setTimeout(baby_show_page_1,5000)

        }

        function baby_show_page_1 ()
        {
            if(reshow == true)
                return;

            var moshi=[0,0];
            for(var i=0;i<2;i++)
            {
                if(images_url_index>=Onload_imgs.length)
                    images_url_index=0;

                var id_img=id('baby_img_1_'+i);

                baby_cut_image(1,i);

                if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>=1)
                    moshi[i] = 0;
                else
                    moshi[i] = 1;

                images_url_index++;
            }

            if (moshi[0]==1)
            {
                id('vertical_baby_page_1_0').style.display='block';
                id('vertical_baby_page_1_0').style.webkitAnimation='ani_1_0 5s ease forwards';
            }
            else
            {
                id('baby_page_1_0').style.display='block';
                id('baby_page_1_0').style.webkitAnimation='ani_1_0 5s ease forwards';
            }

            if (moshi[1]==1)
            {
                id('vertical_baby_page_1_1').style.display='block';
                id('vertical_baby_page_1_1').style.webkitAnimation='ani_1_1 5s ease forwards';
            }
            else
            {
                id('baby_page_1_1').style.display='block';
                id('baby_page_1_1').style.webkitAnimation='ani_1_1 5s ease forwards';
            }

            id('baby_page_2_0').style.display='none';
            id('baby_page_2_1').style.display='none';
            id('baby_page_2_0').style.webkitAnimation='';
            id('baby_page_2_1').style.webkitAnimation='';
            id('vertical_baby_page_2_0').style.display='none';
            id('vertical_baby_page_2_1').style.display='none';
            id('vertical_baby_page_2_0').style.webkitAnimation='';
            id('vertical_baby_page_2_1').style.webkitAnimation='';

            timeout1 = setTimeout(baby_show_page_2,5000)

        }

        function baby_show_page_2 ()
        {
            if(reshow == true)
                return;

            var moshi=[0,0];
            for(var i=0;i<2;i++)
            {
                if(images_url_index>=Onload_imgs.length)
                    images_url_index=0;

                var id_img=id('baby_img_2_'+i);

                baby_cut_image(2,i);
                if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>=1)
                    moshi[i] = 0;
                else
                    moshi[i] = 1;

                images_url_index++;
            }

            if (moshi[0]==1)
            {
                id('vertical_baby_page_2_0').style.display='block';
                id('vertical_baby_page_2_0').style.webkitAnimation='ani_2_0 5s ease forwards';
            }
            else
            {
                id('baby_page_2_0').style.display='block';
                id('baby_page_2_0').style.webkitAnimation='ani_2_0 5s ease forwards';
            }

            if (moshi[1]==1)
            {
                id('vertical_baby_page_2_1').style.display='block';
                id('vertical_baby_page_2_1').style.webkitAnimation='ani_2_1 5s ease forwards';
            }
            else
            {
                id('baby_page_2_1').style.display='block';
                id('baby_page_2_1').style.webkitAnimation='ani_2_1 5s ease forwards';
            }

            id('baby_page_3_0').style.display='none';
            id('baby_page_3_1').style.display='none';
            id('baby_page_3_2').style.display='none';
            id('baby_page_3_0').style.webkitAnimation='';
            id('baby_page_3_1').style.webkitAnimation='';
            id('baby_page_3_2').style.webkitAnimation='';
            id('vertical_baby_page_3_0').style.display='none';
            id('vertical_baby_page_3_1').style.display='none';
            id('vertical_baby_page_3_2').style.display='none';
            id('vertical_baby_page_3_0').style.webkitAnimation='';
            id('vertical_baby_page_3_1').style.webkitAnimation='';
            id('vertical_baby_page_3_2').style.webkitAnimation='';

            timeout2 = setTimeout(baby_show_page_3,5000)
        }

        function baby_show_page_3 ()
        {
            if(reshow == true)
                return;

            var moshi=[0,0,0];
            for(var i=0;i<3;i++)
            {
                if(images_url_index>=Onload_imgs.length)
                    images_url_index=0;

                var id_img=id('baby_img_3_'+i);

                baby_cut_image(3,i);
                if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>=1)
                    moshi[i] = 0;
                else
                    moshi[i] = 1;

                images_url_index++;
            }

            if(moshi[0]==1)
            {
                id('vertical_baby_page_3_0').style.display='block';
                id('vertical_baby_page_3_0').style.webkitAnimation='ani_3_0 5s ease forwards';
            }
            else
            {
                id('baby_page_3_0').style.display='block';
                id('baby_page_3_0').style.webkitAnimation='ani_3_0 5s ease forwards';
            }
            if (moshi[2]==1)
            {
                id('vertical_baby_page_3_2').style.display='block';
                id('vertical_baby_page_3_2').style.webkitAnimation='ani_3_2 5s ease forwards';
            }
            else
            {
                id('baby_page_3_2').style.display='block';
                id('baby_page_3_2').style.webkitAnimation='ani_3_2 5s ease forwards';
            }
            if (moshi[1]==1)
            {
                id('vertical_baby_page_3_1').style.display='block';
                id('vertical_baby_page_3_1').style.webkitAnimation='ani_3_1 5s ease forwards'
            }
            else
            {
                id('baby_page_3_1').style.display='block';
                id('baby_page_3_1').style.webkitAnimation='ani_3_1 5s ease forwards'
            }

            id('baby_page_4_0').style.display='none';
            id('baby_page_4_1').style.display='none';
            id('baby_page_4_2').style.display='none';
            id('baby_page_4_0').style.webkitAnimation='';
            id('baby_page_4_1').style.webkitAnimation='';
            id('baby_page_4_2').style.webkitAnimation='';
            id('vertical_baby_page_4_0').style.display='none';
            id('vertical_baby_page_4_1').style.display='none';
            id('vertical_baby_page_4_2').style.display='none';
            id('vertical_baby_page_4_0').style.webkitAnimation='';
            id('vertical_baby_page_4_1').style.webkitAnimation='';
            id('vertical_baby_page_4_2').style.webkitAnimation='';

            timeout3 = setTimeout(baby_show_page_4,5000)
        }

        function baby_show_page_4 ()
        {
            if(reshow == true)
                return;

            var moshi=[0,0,0];
            for(var i=0;i<3;i++)
            {
                if(images_url_index>=Onload_imgs.length)
                    images_url_index=0;

                var id_img=id('baby_img_4_'+i);

                baby_cut_image(4,i);
                if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>=1)
                    moshi[i] = 0;
                else
                    moshi[i] = 1;

                images_url_index++;
            }

            if(moshi[0]==1)
            {
                id('vertical_baby_page_4_0').style.display='block';
                id('vertical_baby_page_4_0').style.webkitAnimation='ani_4_0 5s ease forwards';
            }
            else
            {
                id('baby_page_4_0').style.display='block';
                id('baby_page_4_0').style.webkitAnimation='ani_4_0 5s ease forwards';
            }
            if (moshi[1]==1)
            {
                id('vertical_baby_page_4_1').style.display='block';
                id('vertical_baby_page_4_1').style.webkitAnimation='ani_4_1 5s ease forwards';
            }
            else
            {
                id('baby_page_4_1').style.display='block';
                id('baby_page_4_1').style.webkitAnimation='ani_4_1 5s ease forwards';
            }
            if (moshi[2]==1)
            {
                id('vertical_baby_page_4_2').style.display='block';
                id('vertical_baby_page_4_2').style.webkitAnimation='ani_4_2 5s ease forwards';
            }
            else
            {
                id('baby_page_4_2').style.display='block';
                id('baby_page_4_2').style.webkitAnimation='ani_4_2 5s ease forwards';
            }

            id('baby_page_5_0').style.display='none';
            id('baby_page_5_0').style.webkitAnimation='';
            id('vertical_baby_page_5_0').style.display='none';
            id('vertical_baby_page_5_0').style.webkitAnimation='';

            timeout4 = setTimeout(baby_show_page_5,5000);

        }

        function baby_show_page_5 ()
        {
            if(reshow == true)
                return;

            var moshi=0;
            for(var i=0;i<1;i++)
            {
                if(images_url_index>=Onload_imgs.length)
                    images_url_index=0;

                var id_img=id('baby_img_5_'+i);

                baby_cut_image(5,i);
                if(image_size[images_url_index*2]/image_size[images_url_index*2+1]>=1)
                    moshi = 0;
                else
                    moshi = 1;

                images_url_index++;
            }

            if (moshi==1)
            {
                id('vertical_baby_page_5_0').style.display='block';
                id('vertical_baby_page_5_0').style.webkitAnimation='ani_3_1 5s ease forwards';
            }
            else
            {
                id('baby_page_5_0').style.display='block';
                id('baby_page_5_0').style.webkitAnimation='ani_3_1 5s ease forwards';
            }


            id('baby_page_0_0').style.display='none';
            id('baby_page_0_1').style.display='none';
            id('baby_page_0_0').style.webkitAnimation='';
            id('baby_page_0_1').style.webkitAnimation='';
            id('vertical_baby_page_0_0').style.display='none';
            id('vertical_baby_page_0_1').style.display='none';
            id('vertical_baby_page_0_0').style.webkitAnimation='';
            id('vertical_baby_page_0_1').style.webkitAnimation='';

            timeout5 = setTimeout(baby_show_page_0,5000)
        }


        function id(name)
        {
            return document.getElementById(name)
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

        function baby_cut_image(index,page_index)
        {
            if(reshow == true)
                return;

            while(Onload_imgs[images_url_index] == 'not find' || Onload_imgs[images_url_index] == 'loading')
            {
                if(images_url_index % step_loadnum == 0)
                {
                    step_load();
                }
                images_url_index++;
                if(images_url_index == Onload_imgs.length)
                    images_url_index = 0;
            }

            if(images_url_index % step_loadnum == 0)
            {
                step_load();
            }
            var imgwidth=image_size[images_url_index*2];
            var imgheight=image_size[images_url_index*2+1];

            var img_bili=imgwidth/imgheight;

            if(img_bili<1)
            {

                moshi = 1;
            }
            else
            {
                moshi = 0;
            }
            if (moshi==1)
            {
                var img_obj=id('vertical_baby_img_'+index+'_'+page_index);
                var word = id('vertical_baby_word_'+index+'_'+page_index);
                word.style.top = "93%";
            }
            else
            {
                var img_obj=id('baby_img_'+index+'_'+page_index);
                var word = id('baby_word_'+index+'_'+page_index);
            }

            var word_string = words[get_pid(Onload_imgs[images_url_index])];
            if(word_string != undefined)
            {
                word_string = word_string.replace(/[\n]/ig,'');
                var word_length = word_string.length;
                // console.log(word_length);
                // console.log(word_string);
                if(word_length <= 2)
                {
                    // word.style.left = "46%";
                    word.style.fontSize = "45px";
                    word.innerText = word_string;
                }else if(word_length >= 3 && word_length <= 4)
                {
                    // if(moshi == 1)
                    // {
                    //     word.style.left = "35%";
                    // }else {
                    //     word.style.left = "43%";
                    // }
                    word.style.fontSize = "40px";
                    word.innerText = word_string;
                }else if(word_length >= 5 && word_length <= 6)
                {
                    // if(moshi == 1)
                    // {
                    //     word.style.left = "28%";
                    // }else {
                    //     word.style.left = "40%";
                    // }
                    word.style.fontSize = "35px";
                    word.innerText = word_string;
                }else if(word_length >= 7 && word_length <=8)
                {
                    // if(moshi == 1)
                    // {
                    //     word.style.left = "20%";
                    // }else {
                    //     word.style.left = "35%";
                    // }
                    word.style.fontSize = "30px";
                    word.innerText = word_string;
                }else if(word_length >= 9 && word_length <= 10)
                {
                    // if(moshi == 1)
                    // {
                    //     word.style.left = "18%";
                    // }else {
                    //     word.style.left = "30%";
                    // }
                    word.style.fontSize = "28px";
                    word.innerText = word_string;
                }else if(word_length > 10 && word_length <= 16)
                {
                    // if(moshi == 1)
                    // {
                    //     word.style.left = "13%";
                    // }
                    // else
                    // {
                    //     word.style.left = "27%";
                    // }
                    // word.style.width = "100%";
                    word.style.fontSize = "28px";
                    word.style.top = "80%";
                    word_string = insertEnter(word_string, 5);
                    word.innerText = word_string;
                    word.style.textAlign = "center";
                    word.style.letterSpacing = "6px";
                }

            }
            else
            {
                word.innerText = "";
            }

            // console.log(imgwidth,imgheight,img_bili);

            if(img_bili>(647/419))
            {
                img_obj.height=419;
                img_obj.width=419*img_bili;
                img_obj.style.top='0px';
                img_obj.style.left='-'+((img_obj.width-647)/2)+'px';
            }
            else
            {
                // alert(img_obj.height)
                if(img_bili<1)
                {
                    if(img_bili>(419/647))
                    {
                        img_obj.height=647;
                        img_obj.width=647*img_bili;
                        img_obj.style.top='0px';
                        img_obj.style.left='-'+((img_obj.width-419)/2)+'px';
                    }
                    else
                    {
                        img_obj.width=419;
                        img_obj.height=419/img_bili;
                        img_obj.style.left='0px';
                        img_obj.style.top='-'+((img_obj.height-647)/2)+'px';
                    }

                }
                else
                {
                    img_obj.width=647;
                    img_obj.height=647/img_bili;
                    img_obj.style.left='0px';
                    img_obj.style.top='-'+((img_obj.height-419)/2)+'px';
                }

            }

            img_obj.src=Onload_imgs[images_url_index];
            console.log(img_obj.src);

        }



        function baby_loadimage()
        {

            begin_titletime = new Date();
            begin_titletime = begin_titletime.getTime();
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
            if(images_url_index  == 0 && bl_keepload == 'first')
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
                    img.onload=baby_onload;
                    img.onerror= image_onerror;
                    Onload_imgs[i] = 'loading';
                }
            }
            else if(bl_keepload == 'end')
            {
                return;
            }
            else
            {
                console.log('loading continue');
                if(slider_images_url.length - images_url_index >step_loadnum*2)
                {
                    load_num = step_loadnum;
                }
                else
                {
                    load_num = slider_images_url.length - images_url_index - step_loadnum;
                    bl_keepload = 'end';
                }
                for(var i = images_url_index +step_loadnum; i< images_url_index + step_loadnum + load_num; i++)
                {
                    var img=new Image();
                    img.index=i;
                    img.src=slider_images_url[i];
                    img.onload=baby_onload;
                    img.onerror= image_onerror;
                    Onload_imgs[i] = 'loading';
                }
            }

        }
        function image_onerror(event)
        {
            var img = event.target;
            var index = img.index;
            if(index<step_loadnum)
                error_num ++;
            Onload_imgs[index] = 'not find';


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

        function baby_onload(event)
        {
            if(reshow == true)
                return;
            var img=event.target;
            var index = img.index;

            if(index<step_loadnum)
            {
                have_num++;
            }
            Onload_imgs[index]=img.src;
            image_size[index*2]=img.width;
            image_size[index*2+1]=img.height;


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

        function showtitle()
        {
            id('pagetitle').style.webkitAnimation = 'aa_in_bounce_center1 1s ease both';
            id('titlecontent').innerHTML = e_desc;
        }
        function distitle()
        {
            id('pagetitle').style.webkitAnimation = 'aa_out_bounce_center 1s ease both';
            baby_show_page_0();
        }
        call_me(baby_loadimage);

        function reload_scene()
        {
            reshow = true;
            reset_all();
        }

        load_init_modules();

    }

    return{
        init: init
    }
})