
$(function() {
	var $groups = $(".form-group"),
		$code = $(".form-code"),
		$boxs = $(".form-box"),
		boxsLen = $boxs.length,
		$input = $(".form-control"),
		$codeInput = $(".form-control-code"),
		$checkIcon = $(".check-btn"),
		$remSpan = $(".rem"),
		$check = $(".hide-check"); 
	
	$code.on("click", inputOutline);
	$groups.on("click", inputOutline);
	$boxs.on("focus",bindFocus);
	$input.on("blur",clearBorder);
	$codeInput.on("blur",clearBorder);
	
	function bindFocus(){
		var $this = $(this);
		$this.find("input").focus();
		$this.addClass("focus");
	}
	function clearBorder(){
		$(this).parents(".form-box").removeClass("focus");
	}
	//输入框获取/失去焦点
	function inputOutline(e) {
		var type = e.type,
			box = $(this).parents(".form-box") || $(this);
		for(var i=0 ; i<boxsLen ; i++){
			$($boxs[i]).removeClass("focus");
		}
		box.addClass("focus");
	}

	$checkIcon.on("click",remember);
	$remSpan.on("click",remember);
	$remSpan.on("keypress",keyRem);
	function remember(){
		$checkIcon.toggleClass("show-right");
	}
	function keyRem(){
		remember();
		$check.click();
	}
});