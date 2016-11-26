/**
 * Created by 321 on 2016/5/23.
 */
define ([], function () {
    return [
            '{{each data as music}}',
                '<div data-musicId="{{music.id}}" class="mic_here musiclist_item_js">',
                    '<span class="mic_name">{{music.name}}</span>',
                    '<span data-src="{{music.linkaddr}}" class="mic_btna iconfont icon-bofang audition_btn_js"></span>',
                    '<span class="mic_btn">歌词</span>',
                '</div>',
            '{{/each}}',
    ].join('')
})