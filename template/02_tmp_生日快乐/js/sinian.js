/**
 * Created by 321 on 2016/10/12.
 */
'use strict'
define(["./../../../js/common/render","./../../../js/app/baseFinal"],function (Render,Final) {
      var colors = ['#9ed4bc', '#ba7db9', '#c6d0e9', '#f87d80', '#f5b27e'];
      var get_pid = function(url) {
        var index1 = url.indexOf("?");
        if (index1 != -1) {
          url = url.substr(0, index1);
        }
        return url.toString().substr(url.lastIndexOf("/") + 1);
      }

      function id(name) {
        return document.getElementById(name)
      }

      function rand(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
      }

      function showlihua() {
        var container = id('container');
        for (var i = 0; i < 20; i++) {
          var div = document.createElement('div');
          var border = rand(10, 16)
          div.style.width = border + 'px';
          div.style.height = border + 'px';
          div.style.backgroundColor = colors[rand(0, 4)];
          div.style.position = 'absolute';
          div.style.top = '-50px';
          div.style.left = rand(-10, 490) + 'px';
          div.style.webkitAnimation = 'fallinga ' + rand(8, 12) + 's ' + i * 0.5 + 's linear infinite both';
          div.style.zIndex = 1;
          container.appendChild(div);
        }
      }

      function showtitle() {
        id('zi').style.webkitAnimation = 'aaa_in_bounce_down 1s ease both';
        id('pagetitle').style.webkitAnimation = 'aaa_in_bounce_up 1s 0.5s ease both';
        id('titlecontent').innerHTML = e_desc;
        id('item0-1').style.webkitAnimation = 'aaa_in_bounce_left 1s ease both';
        id('item0-2').style.webkitAnimation = 'aaa_in_bounce_right 1s ease both';
      }

      function liangziyun_kawa() {
        id('pagetitle').style.webkitAnimation = 'aaa_out_bounce_down 1s 0.5s ease both';
        id('zi').style.webkitAnimation = 'aaa_out_bounce_up 1s ease both';
        id('item0-1').style.webkitAnimation = 'aaa_out_bounce_left 1s 0.5s ease both';
        id('item0-2').style.webkitAnimation = 'aaa_out_bounce_right 1s 0.5s ease both';
        timeout[1] = setTimeout(show1, 1000)
      }

      function show1() {
        setImage('1');
        showpage(1)
        id('item1-5').style.webkitAnimation = 'aaa_in_bounce_down 1s ease both';
        id('item1-1').style.webkitAnimation = 'aaa_in_bounce_left 1s 0.3s ease both';
        id('item1-2').style.webkitAnimation = 'aaa_in_bounce_right 1s ease both';
        id('div1').style.webkitAnimation = 'aaa_in_bounce_up 1s ease both';
        id('item1-3').style.webkitAnimation = 'aaa_in_bounce_up 1s 0.5s ease both';
        id('item1-4').style.webkitAnimation = 'aaa_in_bounce_right 1s 0.5s ease both';
        timeout[2] = setTimeout(clear1, 5000)
      }

      function clear1() {
        id('item1-1').style.webkitAnimation = 'aaa_out_bounce_left 1s ease both';
        id('item1-2').style.webkitAnimation = 'aaa_out_bounce_right 1s ease both';
        id('item1-3').style.webkitAnimation = 'aaa_out_bounce_down 1s 0.3s ease both';
        id('item1-4').style.webkitAnimation = 'aaa_out_bounce_right 1s 0.3s ease both';
        id('div1').style.webkitAnimation = 'aaa_out_bounce_down 1s 0.6s ease both';
        id('item1-5').style.webkitAnimation = 'aaa_out_bounce_up 1s 0.6s ease both';
        timeout[3] = setTimeout(show2, 1200)
      }

      function show2() {
        setImage('2');
        showpage(2);
        id('item2-1').style.webkitAnimation = 'aaa_in_bounce_left 1s ease both';
        id('item2-2').style.webkitAnimation = 'aaa_in_bounce_left 1s ease both';
        id('item2-3').style.webkitAnimation = 'aaa_in_bounce_right 1s ease both';
        id('item2-4').style.webkitAnimation = 'aaa_in_bounce_right 1s ease both';
        id('item2-5').style.webkitAnimation = 'aaa_in_bounce_up 1s 0.5s ease both';
        id('div2').style.webkitAnimation = 'aaa_in_bounce_down 1s 0.5s ease both';
        timeout[4] = setTimeout(clear2, 5000)
      }

      function clear2() {
        id('item2-1').style.webkitAnimation = 'aaa_out_bounce_left 1s 0.3s ease both';
        id('item2-2').style.webkitAnimation = 'aaa_out_bounce_left 1s ease both';
        id('item2-3').style.webkitAnimation = 'aaa_out_bounce_right 1s 0.3s ease both';
        id('item2-4').style.webkitAnimation = 'aaa_out_bounce_right 1s ease both';
        id('item2-5').style.webkitAnimation = 'aaa_out_bounce_down 1s 0.5s ease both';
        id('div2').style.webkitAnimation = 'aaa_out_bounce_up 1s 0.5s ease both';
        timeout[5] = setTimeout(show3, 1500)
      }

      function show3() {
        setImage('3');
        showpage(3);
        id('item3-1').style.webkitAnimation = 'aaa_in_bounce_down 1s 0.5s ease both';
        id('item3-2').style.webkitAnimation = 'aaa_in_bounce_left 1s ease both';
        id('item3-3').style.webkitAnimation = 'aaa_in_bounce_left 1s ease both';
        id('item3-4').style.webkitAnimation = 'aaa_in_bounce_up 1s 0.3s ease both';
        id('item3-5').style.webkitAnimation = 'aaa_in_bounce_right 1s ease both';
        id('item3-6').style.webkitAnimation = 'aaa_in_bounce_right 1s ease both';
        id('div3').style.webkitAnimation = 'aaa_in_bounce_center 1s 0.5s ease both';
        timeout[6] = setTimeout(clear3, 5000)
      }

      function clear3() {
        id('item3-1').style.webkitAnimation = 'aaa_out_bounce_up 1s 0.5s ease both';
        id('item3-2').style.webkitAnimation = 'aaa_out_bounce_left 1s ease both';
        id('item3-3').style.webkitAnimation = 'aaa_out_bounce_left 1s ease both';
        id('item3-4').style.webkitAnimation = 'aaa_out_bounce_down 1s ease both';
        id('item3-5').style.webkitAnimation = 'aaa_out_bounce_right 1s ease both';
        id('item3-6').style.webkitAnimation = 'aaa_out_bounce_right 1s ease both';
        id('div3').style.webkitAnimation = 'aaa_out_bounce_center 1s 0.5s ease both';
        timeout[7] = setTimeout(show4, 1500)
      }

      function show4() {
        setImage('41');
        setImage('42');
        showpage(4);
        id('item4-1').style.webkitAnimation = 'aaa_in_bounce_down 1s ease both';
        id('item4-2').style.webkitAnimation = 'aaa_in_bounce_left 1s 0.5s ease both';
        id('item4-6').style.webkitAnimation = 'aaa_in_bounce_right 1s 0.5s ease both';
        id('item4-3').style.webkitAnimation = 'aaa_in_bounce_up 1s 0.8s ease both';
        id('item4-5').style.webkitAnimation = 'aaa_in_bounce_right 1s 0.8s ease both';
        id('item4-4').style.webkitAnimation = 'aaa_in_bounce_up 1s 1s ease both';
        id('div41').style.webkitAnimation = 'aaa_in_bounce_left 1s 1s ease both';
        id('div42').style.webkitAnimation = 'aaa_in_bounce_right 1s 1s ease both';
        timeout[8] = setTimeout(clear4, 6000)
      }

      function clear4() {
        id('item4-2').style.webkitAnimation = 'aaa_out_bounce_left 1s ease both';
        id('item4-6').style.webkitAnimation = 'aaa_out_bounce_right 1s ease both';
        id('item4-3').style.webkitAnimation = 'aaa_out_bounce_down 1s 0.2s ease both';
        id('item4-4').style.webkitAnimation = 'aaa_out_bounce_down 1s 0.4s ease both';
        id('item4-5').style.webkitAnimation = 'aaa_out_bounce_right 1s 0.4s ease both';
        id('item4-1').style.webkitAnimation = 'aaa_out_bounce_up 1s 0.6s ease both';
        id('div41').style.webkitAnimation = 'aaa_out_bounce_left 1s 0.6s ease both';
        id('div42').style.webkitAnimation = 'aaa_out_bounce_right 1s 0.6s ease both';
        timeout[9] = setTimeout(show5, 1500)
      }

      function show5() {
        setImage('51');
        setImage('52');
        showpage(5);
        id('item5-1').style.webkitAnimation = 'aaa_in_bounce_left 1s ease both';
        id('item5-4').style.webkitAnimation = 'aaa_in_bounce_up 1s ease both';
        id('item5-3').style.webkitAnimation = 'aaa_in_bounce_up 1s 0.5s ease both';
        id('div51').style.webkitAnimation = 'aaa_in_bounce_left 1s 0.5s ease both';
        id('div52').style.webkitAnimation = 'aaa_in_bounce_right 1s 0.5s ease both';
        id('item5-6').style.webkitAnimation = 'aaa_in_bounce_down 1s 0.4s ease both';
        id('item5-2').style.webkitAnimation = 'aaa_in_bounce_up 1s 0.8s ease both';
        id('item5-5').style.webkitAnimation = 'aaa_in_bounce_down 1s 1.2s ease both';
        timeout[10] = setTimeout(clear5, 6000)
      }

      function clear5() {
        id('item5-1').style.webkitAnimation = 'aaa_out_bounce_left 1s ease both';
        id('item5-4').style.webkitAnimation = 'aaa_out_bounce_down 1s ease both';
        id('item5-2').style.webkitAnimation = 'aaa_out_bounce_down 1s 0.5s ease both';
        id('item5-5').style.webkitAnimation = 'aaa_out_bounce_up 1s 0.5s ease both';
        id('item5-6').style.webkitAnimation = 'aaa_out_bounce_up 1s 0.7s ease both';
        id('item5-3').style.webkitAnimation = 'aaa_out_bounce_center 1s 0.7s ease both';
        id('div51').style.webkitAnimation = 'aaa_out_bounce_left 1s 0.8s ease both';
        id('div52').style.webkitAnimation = 'aaa_out_bounce_right 1s 0.8s ease both';
        timeout[11] = setTimeout(show6, 1500)
      }

      function show6() {
        setImage('61');
        setImage('62');
        showpage(6);
        id('item6-2').style.webkitAnimation = 'aaa_in_bounce_left 1s ease both';
        id('item6-4').style.webkitAnimation = 'aaa_in_bounce_right 1s ease both';
        id('item6-1').style.webkitAnimation = 'aaa_in_bounce_center 1s 0.5s ease both';
        id('div61').style.webkitAnimation = 'aaa_in_bounce_left 1s 0.5s ease both';
        id('div62').style.webkitAnimation = 'aaa_in_bounce_right 1s 0.5s ease both';
        id('item6-3').style.webkitAnimation = 'aaa_in_bounce_up 1s 1.5s ease both';
        id('item6-5').style.webkitAnimation = 'aaa_in_bounce_right 1s 1.5s ease both';
        timeout[12] = setTimeout(clear6, 6000)
      }

      function clear6() {
        id('item6-3').style.webkitAnimation = 'aaa_out_bounce_down 1s ease both';
        id('item6-5').style.webkitAnimation = 'aaa_out_bounce_right 1s ease both';
        id('item6-1').style.webkitAnimation = 'aaa_out_bounce_center 1s 0.5s ease both';
        id('item6-2').style.webkitAnimation = 'aaa_out_bounce_left 1s 0.5s ease both';
        id('item6-4').style.webkitAnimation = 'aaa_out_bounce_right 1s 0.5s ease both';
        id('div61').style.webkitAnimation = 'aaa_out_bounce_left 1s 0.5s ease both';
        id('div62').style.webkitAnimation = 'aaa_out_bounce_right 1s 0.5s ease both';
        timeout[13] = setTimeout(show1, 1500)
      }
      var image_size_width = [];
      var image_size_height = [];
      var image_url_index = 0;
      var have_num = 0;
      var error_num = 0;
      var canshow = true;
      var reshow = false;
      var delaytime = 4000;
      var timeout = [];
      var showfont = false;
       // 本模板及模板代码为深圳量子云科技有限公司版权所有 抄袭必究
      function id(name) {
          return document.getElementById(name);
        }
        //每次执行加载后10张图片
      var bl_keepload = 'first';
      var step_loadnum = 5;

      function step_load() {
        console.log(slider_images_url);
        var load_num = 0
          //初步加载X张
        if (image_url_index == 0 && bl_keepload == 'first') {
          console.log('loading continue');
          if (slider_images_url.length > step_loadnum) {
            load_num = step_loadnum;
            bl_keepload = 'next';
          } else {
            load_num = slider_images_url.length;
            bl_keepload = 'end';
          }
          for (var i = 0; i < load_num; i++) {
            var img = new Image();
            img.index = i;
            img.src = slider_images_url[i];
            img.onload = image_onload;
            img.onerror = image_onerror;
            Onload_imgs_url[i] = 'loading';
          }
        } else if (bl_keepload == 'end') {
          return;
        } else {
          console.log('loading continue');
          if (slider_images_url.length - image_url_index > step_loadnum * 2) {
            load_num = step_loadnum;
          } else {
            load_num = slider_images_url.length - image_url_index - step_loadnum;
            bl_keepload = 'end';
          }
          for (var i = image_url_index + step_loadnum; i < image_url_index + step_loadnum + load_num; i++) {
            var img = new Image();
            img.index = i;
            img.src = slider_images_url[i];
            img.onload = image_onload;
            img.onerror = image_onerror;
            Onload_imgs_url[i] = 'loading';
          }
        }
      }

      function loading() {
        showlihua();
        load_images();
      }

      function load_images() {
        reshow = false;
        image_size_width = [];
        image_size_height = [];
        Onload_imgs_url = [];
        image_url_index = 0;
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

      function image_onerror(event) {
        var img = event.target;
        var index = img.index;
        if (index < step_loadnum)
          error_num++;
        Onload_imgs_url[index] = 'not find';
        if ((have_num + error_num >= step_loadnum || slider_images_url.length == (have_num + error_num)) && canshow == true) {
          reshow = false;
          canshow = false;
          if (have_num == 0)
            return;
          var end_titletime = new Date();
          end_titletime = end_titletime.getTime();
          var dis_titletime = Math.abs(end_titletime - begin_titletime);
          if (dis_titletime > delaytime) {
            liangziyun_kawa();
          } else {
            dis_titletime = delaytime - dis_titletime;
            timeout[0] = setTimeout(function() {
              liangziyun_kawa();
            }, dis_titletime);
          }
        }
      }

      function image_onload(event) {
        if (reshow == true)
          return;
        var img = event.target;
        var index = img.index;
        if (index < step_loadnum) {
          have_num++;
        }
        Onload_imgs_url[index] = img.src;
        image_size_height[index] = img.height;
        image_size_width[index] = img.width;
        console.log(Onload_imgs_url[index]);
        if ((have_num + error_num >= step_loadnum || slider_images_url.length == (have_num + error_num)) && canshow == true) {
          reshow = false;
          canshow = false;
          if (have_num == 0)
            return;
          var end_titletime = new Date();
          end_titletime = end_titletime.getTime();
          var dis_titletime = Math.abs(end_titletime - begin_titletime);
          if (dis_titletime > delaytime) {
            liangziyun_kawa();
          } else {
            dis_titletime = delaytime - dis_titletime;
            timeout[0] = setTimeout(function() {
              liangziyun_kawa();
            }, dis_titletime);
          }
        }
      }
      var divwidth = {
        '1h': 435,
        '1v': 367,
        '2h': 434,
        '2v': 340,
        '3h': 434,
        '3v': 350,
        '41h': 364,
        '42h': 350,
        '41v': 281,
        '42v': 270,
        '51h': 325,
        '51v': 250,
        '52h': 390,
        '52v': 280,
        '61h': 366,
        '61v': 270,
        '62h': 356,
        '62v': 270
      };
      var divheight = {
        '1h': 350,
        '1v': 500,
        '2h': 320,
        '2v': 459,
        '3h': 320,
        '3v': 479,
        '41h': 272,
        '42h': 283,
        '41v': 373,
        '42v': 362,
        '51h': 250,
        '51v': 332,
        '52h': 294,
        '52v': 387,
        '61h': 273,
        '61v': 362,
        '62h': 265,
        '62v': 360
      };

     

      function setImage(idname) {
        if (reshow == true)
          return;
        while (Onload_imgs_url[image_url_index] == 'not find' || Onload_imgs_url[image_url_index] == 'loading') {
          if (image_url_index % step_loadnum == 0) {
            step_load();
          }
          image_url_index++;
          if (image_url_index == Onload_imgs_url.length)
            image_url_index = 0;
        }
        if (image_url_index % step_loadnum == 0) {
          step_load();
        }
        var img_bili = image_size_width[image_url_index] / image_size_height[image_url_index];
        var div;
        var div1;
        var img;
        if (img_bili > 1) {
          div = id('div' + idname + 'h');
          div1 = id('div' + idname + 'v');
          idname = idname + 'h';
        } else {
          div = id('div' + idname + 'v');
          div1 = id('div' + idname + 'h');
          idname = idname + 'v';
        }
        div.style.display = 'block';
        div1.style.display = 'none';
        var height = divheight[idname];
        var width = divwidth[idname];
        var img = id('img' + idname);
        img.src = Onload_imgs_url[image_url_index];
        // console.log('setimg:'+img.src);
        var word = id('word' + idname);
        var word_string = words[get_pid(Onload_imgs_url[image_url_index])];
        if (word_string != undefined) {
          word_string = word_string.replace(/[\n]/ig, '');
          word.style.top = "90%";
          // word.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
          var word_length = word_string.length;
          if (word_length <= 5) {
            word.style.fontSize = "28px";
          } else {
            word.style.fontSize = "25px";
            if (word_length > 10) {
              if (idname != "41v" && idname != "42v" && idname != "51v" && idname != "52v" && idname != "61v" && idname != "62v")
                word_string = insertEnter(word_string, 5);
              word.style.top = "77%";
              // word.style.backgroundColor = "rgba(255, 255, 255, 0)";
            }
          }
          // word.style.width = "100%";
          word.innerText = word_string;
        } else {
          word.innerText = "";
          // word.style.width = "0%";
        }
        if (img_bili > (width / height)) {
          img.style.top = '0px';
          img.style.height = height + 'px';
          img.style.width = height * img_bili + 'px';
          img.style.left = -((height * img_bili - width) / 2) + 'px';
        } else {
          img.style.left = '0px';
          img.style.width = width + 'px';
          img.style.height = width / img_bili + 'px';
          img.style.top = -((width / img_bili - height) / 2) + 'px';
        }
        image_url_index++;
        if (image_url_index == Onload_imgs_url.length)
          image_url_index = 0;
      }
      call_me(loading)

      function showpage(index) {
        for (var i = 0; i < 6; i++) {
          if (i == index)
            id('page' + i).style.display = 'block';
          else
            id('page' + i).style.display = 'none';
        }
      }

      function reload_scene() {
        clearnode();
        reshow = true;
        setTimeout(load_images, 100);
      }

      function clearnode() {
        for (var i = 0; i < timeout.length; i++) {
          clearTimeout(timeout[i])
        }
        for (var i = 1; i < 7; i++) {
          id('page' + i).style.display = 'none';
        }
        id('page0').style.display = 'block';
      }

})