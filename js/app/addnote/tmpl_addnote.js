/**
 * Created by jxy on 16/11/26.
 */
define ([], function () {
    return [
        '<div id="photo" class="gloab_box ">',
        '<input id="addImg" type="file"  name="file" style="display:none"/>',
        '<div class="photo_boxxx active" id="photoOne">',
        '{{if data.length<=0}}',
        '<div class="add_img photo_here" style="left:4%;right:4%;margin:auto;margin-top:50%;border-radius:0.2rem"><i class="iconfont icon-tianjia"></i> <b>添加图片</b></div>',
        '{{else}}',
        '<div class="add_img photo_here"><i class="iconfont icon-tianjia"></i> <b>添加图片</b></div>',
        '{{/if}}',
        '{{each data as item index}}',
        '<div class="photo_here"><span class="iconfont icon-lajitong deleImg" data-index="{{index}}"></span><img src="{{item}}" />',
        '<div class="ph_bottom">',
        '<div class="bottom_zd"></div>',
        '<span class="btn btn_prev">前移</span>',
        '<span class="btn btn_next">后移</span>',
        '</div>',
        '</div>',
        '{{/each}}',

        '</div>',
        '<div class="photo_boxxx"  id="photoTwo">',
        '{{if typeof data[0] == "object"}}',
        '{{each data[0] as item index}}',
        '<div class="miaoshu_here">',
        '<div class="img_box">',
        '<img  src="{{item}}" />',
        '</div>',
        '<div class="text_mesg">',
        '<textarea placeholder="想写点什么">{{data[1][index]}}</textarea>',
        '</div>',
        '</div>',
        '{{/each}}',
        '{{/if}}',
        '</div>',
        '</div>',
        '<div class="bottom_btnnn">',
        '<div class="bottom_btnnn_zd" style="opacity: 0.5;"></div>',
        '<span class="btn_false addnote_btn_false_js"><i class="iconfont icon-cuowu"></i></span>',
        '<span class="btn_true addnote_btn_true_js"><i class="iconfont icon-zhengque"></i></span>',
        '</div>',
    ].join('')
})