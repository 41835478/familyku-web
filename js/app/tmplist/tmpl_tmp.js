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
    '</div>',
    ].join('')
})