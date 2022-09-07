if (!window.jQuery) {
	var s = document.createElement('script')
	var protocolStr = document.location.protocol
	s.setAttribute(
		'src',
		protocolStr + '//apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js'
	)
	s.setAttribute('type', 'text/javascript')
	document.getElementsByTagName('head')[0].appendChild(s)
}

if (window.addEventListener) {
	window.addEventListener('load', jhcload, false)
} else {
	window.attachEvent('onload', jhcload)
}

function jhcload () {
	// 过滤其他字符
	// $("input[name='keyboard']").bind('blur', function () {
	// 	$("input[name='keyboard']")[0].value = sx(
	// 		$("input[name='keyboard']")[0].value
	// 	)
	// })
	var addHtml =
		'<input type="button" name="Submit555" value="生成关键字" class="forKeyboard"><input hidden type="button" name="Submit3343" value="复制到TAGS" onclick="document.add.infotags.value=document.add.keyboard.value;">'
	$("input[name='keyboard']").parent().append(addHtml)
	$('.forKeyboard').bind('click', function () {
		getKeywords(document.add.title.value)
		// alert(document.add.title.value);
	})

	$("input[name='addnews']").bind('click', function () {
		if (!document.add.keyboard.value) getKeywords(document.add.title.value)
	})
}

function sx(who) {
	var rntArray = [],
		temp,
		hasValue
	who = who.replace(/[^\dA-Za-z\u3007\u4E00-\u9FCB\uE815-\uE864]+/g, ',')
	who = who.replace(/^,|,$/g, '')
	var array = who.split(',')
	for (var i in array) {
		temp = array[i]
		hasValue = false
		for (var j in rntArray) {
			if (temp == rntArray[j]) {
				hasValue = true
				break
			}
		}
		if (hasValue === false) {
			rntArray.push(temp)
		}
	}
	return rntArray.join(',')
}

var ttt
function getKeywords(hz) {
	$.ajax({
		type: 'get',
		cache: false,
		async: false,
		url:
			window.location.protocol +
			'//' +
			'www.taoxuexiao.com.cn/e/extend/baidufc/index.php?hz=' +
			hz,
		dataType: 'jsonp',
		jsonp: 'callback',
		success: function (json) {
			if (json.msg == 'ok') document.add.keyboard.value = json.keywords
		},
	})
}
