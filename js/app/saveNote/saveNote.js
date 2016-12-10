/**
 * Created by 123 on 2016/11/15.
 */
'use strict';
define(['common/render', 'app/baseURL', 'baseCookie', 'app/baseFinal','common/util'], function (Render, URL, BaseCookie, Final,Util) {
    var TMPL = {
        tmpl_saveNote: 'app/saveNote/tmpl_saveNote'
    }
    var init=function (){
        renderContainer();
    };
    var renderContainer = function (){
        Render.render({
            wrap: $('#main_container'),
            tmpl: {
                tmplName: TMPL.tmpl_saveNote,
                tmplData: ''
            },
            afterRender: function () {


            }
        });
    };

    return {
        init:init
    }
});