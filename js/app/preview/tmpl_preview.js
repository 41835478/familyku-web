/**
 * Created by 321 on 2016/5/23.
 */
define ([], function () {
    return [
    '<div id="moban" class="gloab_box">',
        '<div class="moban_box">',
            ' <audio id="tmpAudio" style="display:none " width="0" height="0"></audio>',
            '<div id="container">',

            '</div>',
        '</div>',
        //'<div class="footer">',
        //    '<a id="menu_tmp" href="javaScript:;"><span class="footer_a"><i class="iconfont icon-cf-c07"></i>模板</span></a>',
        //    '<a id="menu_music" href="javaScript:;"><span class="footer_b"><i class="iconfont icon-yinle"></i>音乐</span></a>',
        //    '<a id="menu_photo" href="javaScript:;"><span class="footer_c"><i class="iconfont icon-xiangpian"></i>相片</span></a>',
        //    '<a id="menu_save" href=""><span class="footer_d"><i class="iconfont icon-baocun"></i>保存</span></a>',
        //'</div>',
        '<div class="footer">',
            '<a id="menu_tmp" class="menu_js" href="javaScript:;" data-router="tmplist"><span class="footer_a"><i class="iconfont icon-cf-c07"></i>模板</span></a>',
            '<a id="menu_music" class="menu_js" href="javaScript:;" data-router="musiclist"><span class="footer_b"><i class="iconfont icon-yinle"></i>音乐</span></a>',
            '<a id="menu_photo" class="menu_js" href="javaScript:;" data-router="addnote"><span class="footer_c"><i class="iconfont icon-xiangpian"></i>相片</span></a>',
            '<a id="menu_save" class="menu_js" href="javaScript:;" data-router="saveNote"><span class="footer_d"><i class="iconfont icon-baocun"></i>保存</span></a>',
        '</div>',
    '</div>',
    ].join('')
})