'use strict'

define(['jquery'], function($, Login, Render, URL) {
  var preview=function (userId){
    if(userId>-1){
      localStorage.setItem("userId",userId);
    }
    console.log("require preview");
    require(['app/preview/preview'], function(Preview) {
      Preview.init({router:router});
    })
  };
  var tmplist =function (){
    console.log("require tmplist");
    require(['app/tmplist/tmplist'], function(TmpList) {
      TmpList.init({router:router});
    });
  };
  var musiclist= function (){
    require(['app/musiclist/musiclist'], function(MusicList) {
      MusicList.init({router:router});
    });
  }
  var addnote = function(){
    require(['app/addnote/addnote'], function(Addnote) {
      Addnote.init({router:router});
    });
  }
  var notelist = function (){
      require(['app/notelist/notelist'], function(NoteList) {
          NoteList.init({router:router});
      });
  }
  var initEvent = function() {
    //$(document).on('click', '#confirm_order_li', function () {
    //    console.log(window.location.href);
    //    window.location.href=window.location.href.split("#")[0]+"#preview";
    //});
    //$(document).on('click', '#send_order_li', function () {
    //  window.location.href=window.location.href.split("#")[0]+"#send_order";
    //});
    //$(document).on('click', '#search_order_li', function () {
    //  window.location.href=window.location.href.split("#")[0]+"#search_order";
    //});
    //$(document).on('click', '#control_center_li', function () {
    //  window.location.href=window.location.href.split("#")[0]+"#control_center";
    //});
    //$(document).on('click', '#company_manager_li', function () {
    //  window.location.href=window.location.href.split("#")[0]+"#company_manager";
    //});
    //$(document).on("click",".header_menu_ul li",function (){
    //    $(".header_menu_ul li").removeClass("active");
    //    $(this).addClass("active");
    //});
  }
  initEvent();
  var routes = {
    '/preview/:userId':preview,
    '/tmplist':tmplist,
    '/musiclist':musiclist,
    '/addnote':addnote,
    '/notelist':notelist
    //'/send_order': send_order,
    //'/search_order': search_order,
    //'/control_center':control_center,
    //'/company_manager':company_manager
  }
  var router = Router(routes);
  router.init('/preview/-1');
})