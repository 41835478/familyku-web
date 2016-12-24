'use strict'

require.config({
    baseUrl: '../js',
    urlArgs:'ver=1.0.0.6',
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

require([
     'director',
    'baseCookie',
    'app/baseNavClick',
    'jquery',
    'bootstrap',
    'app/home/home',
    'fastClick'

], function(Director,BaseCookie,BaseNavClick,$,Bootstrap,home,fastClick) {
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