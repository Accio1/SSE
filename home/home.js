document.getElementById("embed").innerHTML = '<iframe src="../#26498205" style="width: 250px; min-height: 538.5px; border: none;"></iframe>';
document.getElementById("Ecode").innerHTML = '<iframe src="https://accio1.github.io/SSE/#26498205" style="width: 250px; min-height: 538.5px; border: none;"></iframe>';
	
function preview() {
	var P_StudioID;
	P_StudioID = document.getElementById("P_StudioID").value.toUpperCase();
	if (isNaN(P_StudioID) && P_StudioID !=="SDS" && P_StudioID !=="FEATURED") {
		document.getElementById("P_result").innerHTML = "Not A Studio ID";
		}
	else {
		document.getElementById("embed").innerHTML = `<iframe src="../#${P_StudioID}" style="width: 250px; height: 538.5px; border: none"></iframe>`;
		document.getElementById("Ecode").innerHTML = `<iframe src="https://accio1.github.io/SSE/#${P_StudioID}" style="width: 250px; height: 538.5px; border: none"></iframe>`;
		}
}
	
function copy() {
  	var copyText = document.getElementById("Ecode");
 	copyText.select();
  	document.execCommand("copy");
	document.getElementById("copied").innerHTML = "Copied!";
	var loop = setInterval(clear,1);
	var i = 1;
	function clear() {
		i = i-0.01;
 		document.getElementById("copied").style.opacity = i;
		if (i < 0) {
			clearInterval(loop)
		}
	}
}
