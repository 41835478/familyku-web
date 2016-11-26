/**
 * Created by 321 on 2016/5/23.
 */
define ([], function () {
    return [
        //'{{each data as item}}',
            //'<ul id="tmplist_{{item.id}}" class="tmplist_ul_js" data-id="{{item.id}}" style="display: none;">',
              '<ul class="tmplist_ul_js">',
                '{{each data as tmp}}',
                '<li data-tmpId="{{tmp.id}}">',
                    '<div><img src="{{tmp.icon}}" /></div>',
                    '<span>{{tmp.title}}</span>',
                '</li>',
                '{{/each}}',
            '</ul>',
        //'{{/each}}',
    ].join('')
})