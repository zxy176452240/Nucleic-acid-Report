/* var useragent = navigator.userAgent;
if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
    undefined
    // 这里警告框会阻塞当前页面继续加载
    alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
    // 以下代码是用javascript强行关闭当前页面
    var opened = window.open('about:blank', '_self');
    opened.opener = null;
    opened.close();
} else {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };  */


// 设置姓氏隐藏
var out = prompt('请输入姓名');
$(document).ready(function() {
    // 点击隐藏图标触发事件
    $(".hide").click(function() {
        $(".xin").show();
        $(".show").show();
        $(".hide").hide();
        $(".xin_hide").hide();
    });
    // 点击显示图标触发事件
    $(".show").click(function() {
        $(".xin").hide();
        $(".show").hide();
        $(".hide").show();
        $(".xin_hide").show();
    });
    // 点击更多触发事件
    $(".more").click(function() {
        $(".box_hide").show();
        $(".more").hide();
        $(".no_more").show();
    });
});

// 判断身份证号位数
while (true) {
    var IDnum = prompt('请输入18位身份证号');
    if (IDnum.length !== 18 || isNaN(num)) {
        alert("输入的身份证号有误，请重新输入");
    } else {
        break;
    }
}