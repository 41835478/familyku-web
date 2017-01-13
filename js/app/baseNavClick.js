'use strict'

define(['jquery','app/baseFinal'], function($, Final) {
  var preview=function (userId,token){
    if(userId>-1){
      localStorage.setItem(Final.USER_ID,userId);
    }
    if(token){
      localStorage.setItem("token",token);
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
  var saveNote = function(){
    require(['app/saveNote/saveNote'], function(saveNote) {
      saveNote.init({router:router});
    });
  }
  var notelist = function (userId,token){
      require(['app/notelist/notelist'], function(NoteList) {
          var param={router:router};
          if(userId&&token){
            param.userId=userId;
            param.token=token;
          }
          NoteList.init(param);
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
    '/preview/:userId/:token':preview,
    '/tmplist':tmplist,
    '/musiclist':musiclist,
    '/addnote':addnote,
    '/notelist':notelist,
    '/notelist/:userId/:token':notelist,
    '/saveNote':saveNote,
    //'/send_order': send_order,
    //'/search_order': search_order,
    //'/control_center':control_center,
    //'/company_manager':company_manager
  }
  var router = Router(routes);
  router.init('/preview/-1');
})