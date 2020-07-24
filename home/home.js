document.getElementById("embed").innerHTML = '<iframe src="../index.html#FEATURED" style="width: fit-content; min-height: 700px; border: none;"></iframe>';
document.getElementById("Ecode").innerHTML = '<iframe src="https://accio1.github.io/SSE/#FEATURED" style="width: fit-content; min-height: 700px; border: none;"></iframe>';
	
function preview() {
	var P_StudioID;
	P_StudioID = document.getElementById("P_StudioID").value.toUpperCase();
	if (isNaN(P_StudioID) && P_StudioID !=="SDS" && P_StudioID !=="FEATURED") {
		document.getElementById("P_result").innerHTML = "Not A Studio ID";
		}
	else if (P_StudioID =="") { 
		document.getElementById("P_result").innerHTML = "Please Enter A Studio ID";
		}
	else {
		document.getElementById("P_result").innerHTML = "";
		document.getElementById("embed").innerHTML = `<iframe src="../index.html#${P_StudioID}" style="width: fit-content; min-height: 700px; border: none"></iframe>`;
		document.getElementById("Ecode").innerHTML = `<iframe src="https://accio1.github.io/SSE/#${P_StudioID}" style="width: fit-content; min-height: 700px; border: none"></iframe>`;
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
		i = i-0.005;
 		document.getElementById("copied").style.opacity = i;
		if (i < 0) {
			clearInterval(loop)
		}
	}
}
