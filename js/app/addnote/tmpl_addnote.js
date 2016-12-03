/**
 * Created by jxy on 16/11/26.
 */
define ([], function () {
    return [
        '<div id="photo" class="gloab_box ">',
        '<input id="addImg" type="file"  name="file" style="display:none"/>',
        '<div class="photo_boxxx active" id="photoOne">',
        '<div class="add_img photo_here"><i class="iconfont icon-tianjia"></i> <b>添加图片</b></div>',

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
        '{{each data as item index}}',
        '<div class="miaoshu_here">',
        '<div class="img_box">',
        '<img  src="{{item}}" />',
        '</div>',
        '<div class="text_mesg">',
        '<textarea placeholder="想写点什么"></textarea>',
        '</div>',
        '</div>',
        '{{/each}}',
        '</div>',
        '</div>',
        '<div class="bottom_btnnn">',
        '<div class="bottom_btnnn_zd" style="opacity: 0.5;"></div>',
        '<span class="btn_false"><i class="iconfont icon-cuowu"></i></span>',
        '<span class="btn_true"><i class="iconfont icon-zhengque"></i></span>',
        '</div>',
    ].join('')
})