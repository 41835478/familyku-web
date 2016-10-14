'use strict'

require.config({
    baseUrl: '../js',
    urlArgs:'ver=1.0.0.2',
    paths: {
        jquery: 'lib/ace1.3/assets/js/jquery1x.min',
        render: 'common/render',
        uniqueAjax: 'common/uniqueAjax',
        responser: 'common/responser',
        xml2json: 'lib/xml2json',
        bootstrap: 'lib/ace1.3/assets/js/bootstrap.min',
        baseFinal: 'app/baseFinal',
        $md5: 'common/jQuery.md5',
        valiForm: 'lib/valiForm/5.3.2',
        baseCookie: 'app/baseCookie',
        cookie: 'common/cookie',
        ace_extra:'lib/ace1.3/assets/js/ace-extra.min',
        html5shiv:'lib/ace1.3/assets/js/html5shiv',
        respond:'lib/ace1.3/assets/js/respond.min',
        jquery_mobile:'lib/ace1.3/assets/js/jquery.mobile.custom',
        datepicker:'lib/ace1.3/assets/js/date-time/bootstrap-datepicker.min',
        datepicker_local:'lib/ace1.3/assets/js/date-time/locales/bootstrap-datepicker.zh-CN',
        //jqGrid:'lib/ace1.3/assets/js/jqGrid/jquery.jqGrid.min',
        jqGrid:'lib/jqGrid5/js/jquery.jqGrid.min',
        //jqGrid:'lib/ace1.3/assets/js/uncompressed/jqGrid/jquery.jqGrid',
        jgGrid_local:'lib/ace1.3/assets/js/jqGrid/i18n/grid.locale-en',
        excanvas:'lib/ace1.3/assets/js/excanvas.min',
        jquery_ui:'lib/ace1.3/assets/js/jquery-ui.min',
        touch_punch:'lib/ace1.3/assets/js/jquery.ui.touch-punch.min',
        easypiechart:'lib/ace1.3/assets/js/jquery.easypiechart.min',
        sparkline:'lib/ace1.3/assets/js/jquery.sparkline.min',
        jquery_flot:'lib/ace1.3/assets/js/flot/jquery.flot.min',
        jquery_flot_pie:'lib/ace1.3/assets/js/flot/jquery.flot.pie.min',
        jquery_flot_resize:'lib/ace1.3/assets/js/flot/jquery.flot.resize.min',
        ace_elements:'lib/ace1.3/assets/js/ace-elements.min',
        ace:'lib/ace1.3/assets/js/ace.min',
        ace_onpage_help:'lib/ace1.3/assets/js/ace/ace.onpage-help',
        rainbow:'lib/ace1.3/docs/assets/js/rainbow',
        generic:'lib/ace1.3/docs/assets/js/language/generic',
        html:'lib/ace1.3/docs/assets/js/language/html',
        css:'lib/ace1.3/docs/assets/js/language/css',
        javascript:'lib/ace1.3/docs/assets/js/language/javascript',
        jquery_dialog:'lib/jquery.dialog/js/jquery.dialog',
        util:'common/util',
        director: 'lib/director/director.min',
        jquery_pagination:'lib/jquery.pagination/jquery.pagination'
    },
    shim: {
        'baseCookie': ['jquery', 'cookie'],
        'cookie': ['jquery'],
        'bootstrap': ['jquery'],
        '$md5': ['jquery'],
        'valiForm': ['jquery'],
        'xml2json': ['jquery'],
        'jquery_mobile' :['jquery'],
        'jquery_ui':['jquery'],
        'touch_punch' :['jquery','jquery_ui'],
        'jquery_flot':['jquery'],
        'jquery_flot_pie':['jquery','jquery_flot'],
        'jquery_flot_resize':['jquery','jquery_flot'],
        'ace_elements':['jquery'],
        'ace':['jquery'],
        'ace_onpage_help':['jquery','ace'],
        'generic':['rainbow'],
        'html':['rainbow'],
        'css':['rainbow'],
        'javascript':['rainbow'],
        'datepicker':['bootstrap'],
        'datepicker_local':['datepicker'],
        'jqGrid':['jquery'],
        'jgGrid_local':['jqGrid'],
        'jquery_dialog':['jquery'],
        'jquery_pagination':['jquery']

    }
})

require([
     'director',
    'baseCookie',
    'app/baseNavClick',
    'jquery',
    'bootstrap',
    'app/home/home',
    'app/checkLogin/checkLogin',
    //'app/login/login',
    //'ace_extra',
    //'html5shiv',
    //'respond',
    //'ace_elements',
    //'ace',
    //'ace_onpage_help',
    //'jquery_dialog',
    'jquery_ui'

], function(Director,BaseCookie,BaseNavClick,$, Bootstrap,home,checkLogin) {
        //ace.handle_side_menu(jQuery); //沒搞懂幹嘛的，但是是必須的
        home.init();


});