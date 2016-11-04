$(function(){
	setTimeout(function(){
		pubu();
	},10);
//	延时加载保证能获取到图片高度
});
function pubu (){
	var width=$("#photo").width()*.04;
	var left=width;
	var right=width;
	var lengtha=$("#photo .photo_here").length;
	for(var i=0;i<lengtha;i++){
		var _this=$(".photo_here:eq("+i+")");
		var heighta=_this.height();
		if( left-right>0){
			_this.css({"top":right});
			right+=heighta+width;
			_this.css({"left":"52%"});
		}else{
			_this.css({"top":left});
			left+=heighta+width;
			_this.css({"left":"4%"});
		};
	};
//	$(".photo_here").each(function(index){
//		var _this=$(this);
//		var heighta=_this.height();
//		alert(heighta);
//		if( left-right>0){
//			_this.css({"top":right});
//			right+=heighta+width;
//			_this.css({"left":"52%"});
//		}else{
//			_this.css({"top":left});
//			left+=heighta+width;
//			_this.css({"left":"4%"});
//		};
//	});
};

