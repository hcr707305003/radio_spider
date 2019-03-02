module.exports = function(time=null){
	var curDate = new Date();
	if (time==null) {
		var myDate = new Date();
	} else {
		var myDate = new Date(curDate.getTime()-time*24*60*60*1000);
	}
	var thisTime = myDate.toLocaleDateString();
	var array = thisTime.split('-');
	for (var i = array.length - 1; i >= 0; i--) {
		if(parseInt(array[i])<10) array[i]="0"+array[i];
	}
	return array.join('-');
}