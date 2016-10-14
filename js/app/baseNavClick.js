'use strict'

define(['jquery'], function($, Login, Render, URL) {
  var confirm_order=function (){
    console.log("require comfirm_order");
    $(".header_menu_ul li").removeClass("active");
    $("#confirm_order_li").addClass("active");
    require(['app/confirmOrder/confirm_order', 'datepicker', 'datepicker_local', 'jqGrid','jgGrid_local'], function(ConfirmOrder) {
      ConfirmOrder.init({router:router});
    })
  };
  var send_order=function (){
    console.log("require send_order");
    $(".header_menu_ul li").removeClass("active");
    $("#send_order_li").addClass("active");
    require([ 'app/send_order_new/send_order','jquery', 'datepicker', 'datepicker_local'], function(SendOrder) {
      SendOrder.init({router:router});
    })
  };
  var search_order=function (){
    console.log("require search_order");
    $(".header_menu_ul li").removeClass("active");
    $("#search_order_li").addClass("active");
    require(['app/searchOrder/search_order', 'datepicker', 'datepicker_local', 'jqGrid','jgGrid_local'], function(SearchOrder) {
      SearchOrder.init({router:router});
    })
  };
  var control_center = function (){
    console.log("require control_center");
    $(".header_menu_ul li").removeClass("active");
    $("#control_center_li").addClass("active");
    require(['app/controlCenter/control_center', 'datepicker', 'datepicker_local', 'jqGrid','jgGrid_local'], function(ControlCenter) {
      ControlCenter.init({router:router});
    })
  }
  var company_manager=function (){
    console.log("require company_manager");
    $(".header_menu_ul li").removeClass("active");
    $("#company_manager_li").addClass("active");
    require(['app/companyManager/company_manager', 'jqGrid', 'jgGrid_local'], function(CompanyManager) {
      CompanyManager.init({router:router});
    })
  };
  var initEvent = function() {
    $(document).on('click', '#confirm_order_li', function () {
        console.log(window.location.href);
        window.location.href=window.location.href.split("#")[0]+"#confirm_order";
    });
    $(document).on('click', '#send_order_li', function () {
      window.location.href=window.location.href.split("#")[0]+"#send_order";
    });
    $(document).on('click', '#search_order_li', function () {
      window.location.href=window.location.href.split("#")[0]+"#search_order";
    });
    $(document).on('click', '#control_center_li', function () {
      window.location.href=window.location.href.split("#")[0]+"#control_center";
    });
    $(document).on('click', '#company_manager_li', function () {
      window.location.href=window.location.href.split("#")[0]+"#company_manager";
    });
    //$(document).on("click",".header_menu_ul li",function (){
    //    $(".header_menu_ul li").removeClass("active");
    //    $(this).addClass("active");
    //});
  }
  initEvent();
  var routes = {
    '/confirm_order':confirm_order,
    '/send_order': send_order,
    '/search_order': search_order,
    '/control_center':control_center,
    '/company_manager':company_manager
  }
  var router = Router(routes);
  router.init('');
})