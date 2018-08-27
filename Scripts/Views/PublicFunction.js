//加载头部页面
//$("#header").load("../header.html",function(){
	/*添加bs悬浮出现下拉菜单的绑定事件
在有下拉菜单的li中添加class = dropdown-nav
并且设置其子项a链接的悬浮样式hover-color，写到css中
不需要把hover-color加到HTML上
*/
	$(".dropdown-nav").on("mouseover",function(e){
    	var $this = $(this),
	        link = $this.children("a");
	        link.addClass("hover-color");
	        link.next().show();
	});
	$(".dropdown-nav").on("mouseout",function(e){   
	    var inTarget = $(e.relatedTarget),
	        myTarget = $(e.target),
	        $this = $(this),
	        link = $this.children("a");
	    if(myTarget!==inTarget){
	        link.removeClass("hover-color");
	        link.next().hide();                 
	    }
	 }); 
//});

//var d = dialog();

//关闭弹窗，并刷新表格
function closeNRefreshTable() {
    d.close();
    refreshTable();
}

//只关闭弹窗
function closeDialog() {
    d.close();
}

//弹出窗口
function showDialog(dTitle, dUrl, dSize) {
    if (dSize) {
      	var  dialogSize = $.extend({}, dSize);
        //如果设置的宽为负数，则取窗口的最大宽度
        if (dialogSize.w < 0 || dialogSize.w > $(window).width() - 120)
            dialogSize.w = $(window).width() - 120;
        //如果设置的高为负数，则取窗口的最大高度
        if (dialogSize.h < 0 || dialogSize.h > $(window).height() - 180)
            dialogSize.h = $(window).height() - 180;

        if (dialogSize.w > 0 && dialogSize.h > 0)
            d = dialog({ title: dTitle, url: dUrl, width: dialogSize.w, height: dialogSize.h }).showModal();
        else if (dialogSize.w > 0)
            d = dialog({ title: dTitle, url: dUrl, width: dialogSize.w }).showModal();
        else if (dialogSize.h > 0)
            d = dialog({ title: dTitle, url: dUrl, height: dialogSize.h }).showModal();
        else
            d = dialog({ title: dTitle, url: dUrl }).showModal();
    }
    else {
        d = dialog({ title: dTitle, url: dUrl }).showModal();
    }
}

//采用postAntiForgery方式，提交到指定的URL
//callBackType，回调方式，如果没有，则刷新Table；如果为1则关闭弹窗；如果为2则关闭弹窗并刷新Table；否则什么都不做
function postToUrl(dTip, dUrl, parameter, callBackType) {
    //取第一属性作为关键属性
    //所以在定义参数的时候，第一项属性作为关键性属性，如：id、ids 等。
    var keyValue = "";
    for (x in parameter) {
        keyValue = parameter[x];
        break;
    }
    if (keyValue.length > 0) {
        if (confirm(dTip)) {
            $.postAntiForgery(dUrl, parameter, function (json) {
                if (json){
                    if (callBackType) {
                        if (callBackType == 1)
                            closeDialog();
                        else if (callBackType == 2)
                            closeNRefreshTable();
                    }
                    else
                        refreshTable();
                }
                else
                    alert("执行失败，请稍后再试。");
            });
        }
    }
    else
        alert("没有选择的项！");
}

//获取指定名称的checkbox，并且已经选定的项的值
function getChecked(checkName) {
    var str = "";
    $("[name='" + checkName + "']:checked").each(function () {
        str += $(this).val() + ",";
    });
    if (str.length > 0)
        str = str.substr(0, str.length - 1);
    return(str);
}

//全选或取消全选
function checkAll(mainCheckID, checkItemName) {
    $("input[name='" + checkItemName + "']").prop("checked", $("#" + mainCheckID).prop("checked"));
}
//展开更多搜索项
function MoreSearch(sdiv) {
    $("#" + sdiv).toggle(300);
}

//时间日期选择配置
    $('.timepicker').datetimepicker({
        language : 'zh-CN',//语言
        format: 'yyyy-mm-dd',//时间格式
        autoclose:true,//点击空白处自动关闭
        startView:2,
        //pickerPosition:"top-left",  插件显示位置
        minView:2,//最精确时间，0-分, 1-时, 2-日, 3-月, 4-年
        todayBtn:'linked'//是否显示今日
    });

