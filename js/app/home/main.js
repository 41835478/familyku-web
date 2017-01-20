'use strict'

require.config({
    baseUrl: '../js',
    urlArgs:'ver=1.0.0.4',
    paths: {
        jquery: 'lib/jquery/1.11.1',
        zepto: 'lib/zepto/zepto',
        fastClick:'lib/fastclick/fastclick',
        bootstrap:'lib/bootstrap.min',
        render: 'common/render',
        uniqueAjax: 'common/uniqueAjax',
        responser: 'common/responser',
        xml2json: 'lib/xml2json',
        baseFinal: 'app/baseFinal',
        $md5: 'common/jQuery.md5',
        valiForm: 'lib/valiForm/5.3.2',
        baseCookie: 'app/baseCookie',
        cookie: 'common/cookie',
        director: 'lib/director/director.min',
    },
    shim: {
        'baseCookie': ['jquery', 'cookie'],
        'cookie': ['jquery'],
        'bootstrap': ['jquery'],
        '$md5': ['jquery'],
        'valiForm': ['jquery'],
        'xml2json': ['jquery']
    }
})


// require([
//     'director',
//     'baseCookie',
//     'app/baseNavClick',
//     'jquery',
//     'bootstrap',
//     'app/home/home',
//     'fastClick',
//     'app/baseURL'
//
// ], function(Director,BaseCookie,BaseNavClick,$,Bootstrap,home,fastClick,URL) {
//
//     var notNeed = fastClick.notNeeded(document.body);
//     $.fn.triggerFastClick=function(){
//         this.trigger("click");
//         if(!notNeed){
//             this.trigger("click");
//         }
//     }
//     fastClick.attach(document.body);
//     window.timerTmpArray=[];
//     window.tmpobj={}; //全局缓存变量
//     home.init();
//
//
//
// });

require(['jquery','app/baseURL'],function ($,URL){
    $.ajax({
        url:URL.baseURLForward+"getJsapiTicket",
        data:{url:window.location.href.split("#")[0]},
        type:"post",
        dataType:"json",
        success: function (str){
            var data=JSON.parse(str);
            wxcfg(data);
        }
    });
    var wxcfg= function (data){
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appid, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.noncestr, // 必填，生成签名的随机串
            signature: data.sign,// 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'closeWindow'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger')
        {
            wx.ready(requireMainFn);
        }
        else
        {
            requireMainFn();
        }
        // wx.ready(function (){
        //     alert(123);
        //     requireMainFn();
        // })
        // wx.error(function (){
        //     alert("~~~~");
        //     requireMainFn();
        // })
    }
    var requireMainFn = function (){
        require([
            'director',
            'baseCookie',
            'app/baseNavClick',
            'jquery',
            'bootstrap',
            'app/home/home',
            'fastClick',
            'app/baseURL'

        ], function(Director,BaseCookie,BaseNavClick,$,Bootstrap,home,fastClick,URL) {

            var notNeed = fastClick.notNeeded(document.body);
            $.fn.triggerFastClick=function(){
                this.trigger("click");
                if(!notNeed){
                    this.trigger("click");
                }
            }
            fastClick.attach(document.body);
            window.timerTmpArray=[];
            window.tmpobj={}; //全局缓存变量
            home.init();



        });
    }
})
