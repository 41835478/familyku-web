/**
 * Created by 321 on 2016/5/23.
 */
define ([], function () {
    return [
    '<div id="moban" class="gloab_box">',
        '<header>',
            '<ul>',
                '{{each data as item}}',
                    '<li data-id="{{item.id}}" class="hot">{{item.catename}}</li>',
                '{{/each}}',
            '</ul>',
        '</header>',
        '{{each data as item}}',
            '<div id="musiclist_{{item.id}}" data-id="{{item.id}}" style="display: none;">',
            '{{each item.musiclist as music}}',
                '<div class="mic_here">',
                    '<span class="mic_name">{{music.name}}</span>',
                    '<span class="mic_btna iconfont icon-zanting"></span>',
                    '<span class="mic_btn">歌词</span>',
                '</div>',
            '{{/each}}',
            '</div>',
        '{{/each}}',
    '</div>',
    ].join('')
})