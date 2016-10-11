// 闭包
// Javascript中，函数的作用域内可以访问到全局作用域的变量，但是全局作用域无法访问函数作用域内的变量。
// 为了在函数外能够访问到函数内的变量，可以在函数内再定义一个函数，这个内部函数能够读取外层函数的变量，并且在外层函数中返回这个内层函数：

//简单地讲就是能够读取其他函数内部变量的函数。其实闭包还有另外一个作用——让外层函数的变量常驻内存中：

// function f1() {
//     var a = 1;
//
//     function f2() {
//         return a;
//     }
//     return a;
// }
function show(){
     var n=3;
     setTimeout(function(){ console.log("first:"+n);},3000); //3秒后显示first:3
     console.log("second:"+n); //显示second:3
}
show();
function show2(){ console.log("第一个函数执行结束");}
show2();


//下面看几种写法的区别：
function show2(content){
   alert(content);   //3秒后alert显示"test"
}
function show(content,delay_time){
     setTimeout("show2('"+content+"')",delay_time);
}
show("test",3000);
//仔细看一下上面这种写法不是闭包，只是普通的函数调用而已。

function show(content,delay_time){
     setTimeout(function(){alert(content);},delay_time); //3秒后alert显示"test"
}
show("test",3000);
//这种写法就是闭包，虽然结果是一样的，但原理不一样。
function show(content){
     function show2(){alert(content);}
     return show2;
}
var newshow=show("test");   
setTimeout(newshow,3000);   //3秒后alert显示"test"
//上面这种写法也是闭包，虽然结果都是一样的，但原理却不一样。这里面看到了函数也可以当作对象也传递，函数show执行后return show2，把函数show2赋值给newshow，然后3秒后，调用newshow对象，执行函数show2。
//仔细比较上面3种写法，如果能悟出一些道理就好，闭包有些时候的确难理解。
