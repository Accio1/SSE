document.getElementById("embed").innerHTML = '<iframe src="../#FEATURED" style="width: 250px; min-height: 538.5px; border: none;"></iframe>';
document.getElementById("Ecode").innerHTML = '<iframe src="https://accio1.github.io/SSE/#FEATURED" style="width: 250px; min-height: 538.5px; border: none;"></iframe>';
	
function GoTo() {
	var GT_StudioID;
	GT_StudioID = document.getElementById("GT_StudioID").value.toUpperCase();
		if (isNaN(GT_StudioID) && GT_StudioID !=="SDS" && GT_StudioID !=="FEATURED") {
			document.getElementById("GT_result").innerHTML = "Not A Studio ID";
  			} 
		else {
    			window.location.href = "../#"+GT_StudioID;
  			}
	}
		
function preview() {
	var P_StudioID;
	P_StudioID = document.getElementById("P_StudioID").value.toUpperCase();
		if (isNaN(P_StudioID) && P_StudioID !=="SDS" && P_StudioID !=="FEATURED") {
			document.getElementById("P_result").innerHTML = "Not A Studio ID";
			}
		else {
			document.getElementById("embed").innerHTML = `<iframe src="../#${P_StudioID}" style="width: 250px; height: 538.5px; border: none"></iframe>`;
			document.getElementById("Ecode").innerHTML = `<iframe src="../#${P_StudioID}" style="width: 250px; height: 538.5px; border: none"></iframe>`;
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
