
console.log('message from an chrome extension');

//功能：根据打开tab的网址，应用预先设置好的css样式

//流程1：打开一个网页时，后台js的执行步骤
//
//获取当前tab的网址
//跟localStoage（或chrome.storage）数据仓储中的网址匹配
//如果有匹配，则在当前tab页面加载匹配的css样式
//
//
//
//
//
//流程2：点击浏览器的Extension图标按钮时，弹出框的功能
//
//获取当前tab的网址
//跟localStoage（或chrome.storage）数据仓储中的网址匹配
//如果有匹配，则显示匹配的规则内容，允许用户修改css样式
//如果没有匹配，则提示用户可以设置css样式
//保存css样式之后，马上生效。
//
//
//流程3：设置css样式的流程
//
//设置css样式的界面的控件只需要2个输入框，1个按钮
//1. 网址通配符 如： *.csdn.net 
//2. css样式
//3. 保存按钮
//
//把 css样式 和 网址通配符 保存到 数据仓储中
//保存css样式之后，马上生效。
//
//
//
//
//

