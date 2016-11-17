/**
 * Created by 321 on 2016/5/23.
 */
define ([], function () {
    return [
    '<div id="moban" class="gloab_box">',
        '<header>',
            '<ul>',
                '{{each data as item}}',
                    '<li data-catename="{{item.id}}" class="hot active">{{item.catename}}</li>',
                '{{/each}}',
            '</ul>',
        '</header>',
        '<div class="big_box">',
            '<ul>',
                '{{each data as item}}',
                '<li>',
                    '<div><img src="img/index.jpg" /></div>',
                    '<span>中秋赏月</span>',
                '</li>',
                '{{/each}}',
            '</ul>',
        '</div>',
    '</div>',
    ].join('')
})