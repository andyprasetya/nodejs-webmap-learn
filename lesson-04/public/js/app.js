document.getElementById('buttonAlert').addEventListener('click', function(){
	alert('Hello! You have clicked the button.');
});
document.getElementById('buttonDefault').addEventListener('click', function(){
	_getDefaultData();
});
document.getElementById('buttonAjax').addEventListener('click', function(){
	_getDynamicData();
});
function _getDefaultData () {
	var xhttp;
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('ajax').innerHTML = this.responseText;
		}
	};
	xhttp.open('GET', './data-default');
	xhttp.send();
}
function _getDynamicData () {
	var xhttp;
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('ajax').innerHTML = this.responseText;
		}
	};
	xhttp.open('GET', './data-service');
	xhttp.send();
}
_getDefaultData();
