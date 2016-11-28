/**
 * Created by 321 on 2016/5/23.
 */
define ([], function () {
    return [
    '<div id="moban" class="gloab_box">',
        '<header> <audio id="musicListAudio" style="display:none " width="0" height="0"></audio>',
            '<ul>',
                '{{each data as item}}',
                    '<li data-id="{{item.id}}" class="hot musiclist_header_js">{{item.catename}}</li>',
                '{{/each}}',
            '</ul>',
        '</header>',
        '<div class="musiclist_box" >',

        '</div>',
        '<div class="bottom_btnnn">',
            '<div class="bottom_btnnn_zd" style="opacity:0.5;"></div>',
            '<span class="btn_false musiclist_btn_false_js"><i class="iconfont icon-cuowu"></i></span>',
            '<span class="btn_true  musiclist_btn_true_js"><i class="iconfont icon-zhengque"></i></span>',
            '</div>',
        '</div>',
    '</div>',
    ].join('')
})