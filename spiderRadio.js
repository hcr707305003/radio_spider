var request = require('./request');
var time = require('./time');//默认当天,传入数值则代表是几天前的
var cheerio = require('cheerio');
var download = require('./download');
var url = 'http://cnvod.cnr.cn/audio2018';
request('http://tacc.radio.cn/pcpages/searchs/livehistory?channelname=2&name=520843','get','utf-8',function(body){
	var array = JSON.parse(body).passprogram;
	for (var index in array){
		var dataTime = array[index].broadcast_date.replace(/^\s+|\s+$/g,"");
		var radio = url+array[index].stream_url2;
		if (dataTime == time()) {
			download(radio,dataTime.replace(/-/g,'')+array[index].search_name+'.m4a');
			return false;
		} else {
			if (dataTime == time(1)) {
				download(radio,dataTime.replace(/-/g,'')+array[index].search_name+'.m4a');
				return false;
			}
		}
	}
})