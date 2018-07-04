 
//Cookie
$.Cookie = {
	add: function (name, value) { $.cookie(name, value); },
	add: function (name, value, day) { $.cookie(name, value, { expires: day }); },
	add: function (name, value, day, path) { $.cookie(name, value, { expires: day, path: path }); },
	set: function (name) { $.cookie(name); },
	move: function (name) { $.cookie(name, null); }
}
//SubString  截取字符串
$.SubString = {
    //盒子 - 内容 - 长度 - 省略符
    c: function (box_, find_, length_, string_) {$(box_).each(function () {if ($(this).find(find_).text().length > length_) {var b = $(this).find(find_);var c = b.text().substring(0, length_);b.html(c + string_)}})},
	//盒子 - 长度 - 省略符
	w: function (box_, length_, string_) {$(box_).each(function () {if ($(this).text().length > length_) {var c = $(this).text().substring(0, length_);$(this).text(c + string_);}})},
    //盒子 - 长度
    s: function (box_, length_) {$(box_).each(function () {if ($(this).text().length > length_) {var c = $(this).text().substring(0, length_);$(this).text(c);}})} 
} 
//msg_box   弹出悬浮窗  居中
$.Box_fixed = {
    //box—弹出的盒子
    //open_check—点击打开事件触发
    //close_check—关闭事件触发
	z: function (box, open_check, close_check) {

		$(open_check).click(function () { 
            var box_height = $(box).height();
            var box_width = $(box).width();
            var win_height = $(window).height();
			var win_width = $(window).width();
		 
            $(box).css("position", "fixed").css("top", (win_height - box_height) / 2).css("left", (win_width - box_width) / 2);
			$(box).show();
			$(window).resize(function () {
				$(box).css("position", "fixed").css("top", (win_height - box_height) / 2).css("left", (win_width - box_width) / 2);
			});
        })
        $(close_check).click(function () {
            $(box).hide();
        })
    },
    //box—弹出的盒子
    //open_check—点击打开事件触发
    //close_check—关闭事件触发
    //mb—灰色背景层触发
    m: function (box, open_check, close_check, mb) {
        $(open_check).click(function () {
            var box_height = $(box).height();
            var box_width = $(box).width();
            var win_height = $(window).height(); 
            var win_width = $(window).width();
            $(box).css("position", "fixed").css("top", (win_height - box_height) / 2).css("left", (win_width - box_width) / 2);
            $(box).show(); $(mb).show();// $("body").css("overflow", "hidden"); 
        })
        $(close_check).click(function () {
            $(box).hide(); $(mb).hide(); //$("body").css("overflow", "auto");
        })
        $(mb).click(function () {
            $(box).hide(); $(mb).hide();// $("body").css("overflow", "auto");
        })
    }
}  
//点击box   返回到顶部需要time秒
$.return_top = {a: function (box, time) {$(box).click(function () {var speed = time;$('body,html').animate({ scrollTop: 0 }, speed);return false;});}}
//关闭浏览器触发的事件
$.close_form = { close: function (close_Message,reutrn_Message) { window.onbeforeunload = function () {if (document.all) {if (event.clientY < 0) {return reutrn_Message;}} else {return close_Message;}}}}
//执行函数   
$.delay_function = {
    //暂停time秒执行funcions方法  只执行一次 
    once: function (functions,time) {setTimeout(functions, time);},
    //一直执行functions方法  time秒执行一次
    loop: function (functions, time) {setInterval(functions, time);},
    //停止所有函数运行
    clear:function(){ clearInterval()}
} 
//加入收藏 
function AddFavorite(sURL, sTitle) {
    sURL = encodeURI(sURL);
    try {window.external.addFavorite(sURL, sTitle);
	} catch (e) {
		try {window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");}
    }
}

//时间   division--分隔符
$.time = {
	years: function () { var d = new Date(); var vYear = d.getFullYear(); return vYear; },
	month: function () { var d = new Date(); var vMon = d.getMonth() + 1; s = vMon < 10 ? "0" + vMon : vMon; return s; },
	day: function () { var d = new Date(); var vDay = d.getDate(); s = vDay < 10 ? "0" + vDay : vDayreturns; },
	hour: function () { var d = new Date(); var h = d.getHours(); s = h < 10 ? "0" + h : h; return s; },
	minute: function () { var d = new Date(); var m = d.getMinutes(); s = m < 10 ? "0" + m : m; return s; },
	second: function () { var d = new Date(); var se = d.getSeconds(); s = se < 10 ? "0" + se : se; return s; },
	yyyy_mm_dd: function (division) { var d = new Date(); var vYear = (d.getFullYear()); var vMon = d.getMonth() + 1; var vDay = d.getDate(); s = vYear + division + (vMon < 10 ? "0" + vMon : vMon) + division + (vDay < 10 ? "0" + vDay : vDay); return s; },
	hh_mm: function (division) { var d = new Date(); var h = d.getHours(); var m = d.getMinutes(); s = (h < 10 ? "0" + h : h) + division + (m < 10 ? "0" + m : m); return s; },
	hh_mm_ss: function (division) { var d = new Date(); var h = d.getHours(); var m = d.getMinutes(); var se = d.getSeconds(); s = (h < 10 ? "0" + h : h) + division + (m < 10 ? "0" + m : m) + division + (se < 10 ? "0" + se : se); return s; }
}; 

//// 传参数 
//var aa = function (x) {
//    //弹出对象 x 里的 aa 变量和 bb 变量 
//    alert(x.aa + " 我成功啦 " + x.bb);
//}

//$.windowbox = aa;

//$.windowbox({
//    aa: "哈哈",
//    bb: "啦啦"
//});