var data=[];

var dataStr = '1、海报1<br>\
<br>\
内容：海报1<br>\
详细：海报1<br>\
时间：海报1<br>\
地点：海报1<br>\
<br>\
<br>\
2、海报2<br>\
<br>\
内容：海报2<br>\
详细：海报2<br>\
时间：海报2<br>\
地点：海报2<br>\
<br>\
<br>\
3、海报3<br>\
<br>\
内容：海报3<br>\
详细：海报3<br>\
时间：海报3<br>\
地点：海报3<br>\
<br>\
<br>\
4、海报4<br>\
<br>\
内容：海报4<br>\
详细：海报4<br>\
时间：海报4<br>\
地点：海报4<br>\
<br>\
<br>\
5、海报5<br>\
<br>\
内容：海报5<br>\
详细：海报5<br>\
时间：海报5<br>\
地点：海报5<br>\
<br>\
<br>\
6、海报6<br>\
<br>\
内容：海报6<br>\
详细：海报6<br>\
时间：海报6<br>\
地点：海报6<br>\
<br>\
<br>\
7、海报7<br>\
<br>\
内容：海报7<br>\
详细：海报7<br>\
时间：海报7<br>\
地点：海报7<br>\
<br>\
<br>\
8、海报8<br>\
<br>\
内容：海报8<br>\
详细：海报8<br>\
时间：海报8<br>\
地点：海报8<br>\
';
var d =dataStr.split('<br><br><br>');
for (var i = 0; i < d.length; i++) {
	var c = d[i].split('<br><br>');
	data.push({
		img: c[0].replace('、','')+'.jpg',
		caption: c[0].split('、')[1],
		desc : c[1]
	});
	console.log(c[0].replace('、','')+'.jpg');
};