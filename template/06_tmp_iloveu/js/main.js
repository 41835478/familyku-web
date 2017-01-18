/**
 * Created by 321 on 2016/9/22.
 */
'use strict'

require.config({
    //baseUrl: '../js',
    urlArgs:'ver=1.0.0.2'
    //paths: {
    //    jquery: 'common/jquery.min',
    //    $md5: 'common/jQuery.md5',
    //    baseCookie: 'app/baseCookie',
    //    cookie: 'common/cookie'
    //},
    //shim: {
    //    'baseCookie': ['jquery', 'cookie'],
    //    'cookie': ['jquery'],
    //    '$md5': ['jquery']
    //}
})

require(["./iloveu","./../../../js/lib/jquery/1.11.1"],function(DaJi) {
    //var ShuYe = require();
    DaJi.init();
})