/**
 * Created by 321 on 2016/5/23.
 */
define ([], function () {
    return [
        '<div id="xiangce" class="gloab_box">',
            '<div class="xc_here">',
                '<img class="xc_img" src="/img/index.jpg"  />',
                '<div class="xc_bottom">',
                    '<div class="xc_bot_name">',
                        '我的音乐相册01',
                    '</div>',
                    '<div class="xc_bot_mesg">',
                        '<span class="mesg_a">照片数量：5张</span><span class="mesg_b">2015-03-04 12:23</span>',
                    '</div>',
                    '<div class="xc_bot_btn">',
                        '<span class="btn_bj"><i class="iconfont icon-bianji"></i>编辑</span><span class="btn_sc"><i class="iconfont icon-lajitong"></i>删除</span>',
                    '</div>',
                '</div>',
            '</div>',
            '{{each data as item }}',
            '<div class="xc_here">',
            '<img class="xc_img" src="{{item.cover}}"  />',
            '<div class="xc_bottom">',
            '<div class="xc_bot_name">',
            '{{item.title}}',
            '</div>',
            '<div class="xc_bot_mesg">',
            '<span class="mesg_a">照片数量：5张</span><span class="mesg_b">2015-03-04 12:23</span>',
            '</div>',
            '<div class="xc_bot_btn">',
            '<span data-id="{{item.id}}" class="btn_bj"><i class="iconfont icon-bianji"></i>编辑</span><span data-id="{{item.id}}" class="btn_sc"><i class="iconfont icon-lajitong"></i>删除</span>',
            '</div>',
            '</div>',
            '</div>',
            '{{/each}}',
        '</div>'
    ].join('')
})