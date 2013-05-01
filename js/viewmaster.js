function shuffle(o){
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function makeUrlArray(a){
	urlArray = [];
	for (var i = 0; i < a.length; i++){ 
		urlArray[i] = urlList[i] + "nphMotionJpeg?Resolution=320x240&amp;Quality=Standard";
	}
	return urlArray;	
}

function getUrl(array){
	if (array.length > 0) {
		a = array.shift()
		return a
	} else {
		location.reload();
	}
}

$(document).ready(function() {
	array = makeUrlArray(urlList);
	shuffle(array)

	var i = 0;
	$("#live").attr("src",array[i]);
	$("#holder").attr("src", array[i+1]);

	$("html").keypress(function() {
		$("#loading").fadeIn();
		i++;
		if(i < array.length){
			holderval = $("#holder").attr("src");
			$("#live").attr("src", holderval);
			$("#holder").attr("src", array[i+1]);
		}else{
			i = 0;
			$("#live").attr("src",array[i]);
			$("#holder").attr("src", array[i+1]);
		}
		$("#loading").fadeOut();
	});

});