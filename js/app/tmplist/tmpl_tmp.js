/**
 * Created by 321 on 2016/5/23.
 */
define ([], function () {
    return [
    '<div id="moban" class="gloab_box">',
        '<header>',
            '<ul>',
                '{{each data as item}}',
                    '<li data-id="{{item.id}}" class="hot tmplist_header_js">{{item.catename}}</li>',
                '{{/each}}',
            '</ul>',
        '</header>',
        '<div class="big_box">',

        '</div>',
    '<div class="bottom_btnnn">',
        '<div class="bottom_btnnn_zd" style="opacity:0.5;"></div>',
        '<span style="width:100%;" class="btn_false tmp_btn_false_js"><i class="iconfont icon-cuowu"></i></span>',
        //'<span class="btn_true"><i class="iconfont icon-zhengque"></i></span>',
        '</div>',
    '</div>',
    ].join('')
})