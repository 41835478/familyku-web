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
        '<div class="big_box">',
        '{{each data as item}}',
            '<ul id="tmplist_{{item.id}}" data-id="{{item.id}}" style="display: none;">',
                '{{each item.templatelist as tmp}}',
                '<li>',
                    '<div><img src="../img/index.jpg" /></div>',
                    '<span>{{tmp.title}}</span>',
                '</li>',
                '{{/each}}',
            '</ul>',
        '{{/each}}',
        '</div>',
    '</div>',
    ].join('')
})