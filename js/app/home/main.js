'use strict'

require.config({
    baseUrl: '../js',
    urlArgs:'ver=1.0.0.2',
    paths: {
        jquery: 'lib/jquery/1.11.1',
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
    'app/home/home',

], function(Director,BaseCookie,BaseNavClick,$,home) {
        home.init();


});