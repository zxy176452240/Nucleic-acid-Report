// 获取姓氏
function getfirst() {
    var str = out; // 字符串赋值
    var res = str.charAt(0); // 检索字符串索引号为0 的字符
    return res;
}
var username = (
    '<span class="iconfont icon-hide hide"></span>' +
    '<span class="iconfont icon-browse show"></span>' +
    '<span class="xin">' + getfirst() + '</span>' +
    '<span class="xin_hide">*</span>' +
    out);
document.getElementById("output").innerHTML = (username);
document.getElementById("output1").innerHTML = (username);
document.getElementById("output2").innerHTML = (username);
document.getElementById("output3").innerHTML = (username);

// 身份证
function IDnumber() {
    var IDstr = IDnum.split(""); // 将获取的身份证号切分 封装为数组
    IDstr.splice(4, 10, "**********"); // 从索引号4开始删除十个数替换为*
    return IDstr.join(""); // 以字符串类型输出
}
document.getElementById("ID1").innerHTML = (IDnumber());
document.getElementById("ID2").innerHTML = (IDnumber());
document.getElementById("ID3").innerHTML = (IDnumber());
document.getElementById("ID4").innerHTML = (IDnumber());

// 获取时间 年月日
function getTimes1() {      
    var date = new Date();      
    var year = date.getFullYear();      
    var month = date.getMonth() + 1;      
    var dates = date.getDate() - 1; 
    return year + '-' + month + '-' + dates;    
}    

// 获取时间 时分秒
function getTimes2() {  
    var date = new Date();                
    var hours = Math.abs(date.getHours() - 1);      
    hours = hours < 10 ? '0' + hours : hours;      
    var minutes = Math.abs(date.getMinutes() - 12);      
    minutes = minutes < 10 ? '0' + minutes : minutes;      
    var seconds = date.getSeconds();      
    seconds = seconds < 10 ? '0' + seconds : seconds;      
    return " " + hours + ':' + minutes + ':' + seconds;    
}    
document.getElementById("time1").innerHTML = (getTimes1() + getTimes2());
document.getElementById("time2").innerHTML = (getTimes1());