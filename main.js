setTimeout(display, 200)

if (window.location.hash === "" || window.location.hash === "#") {
	window.location.replace("home");
	} 
	
function error(title, message) {
	document.getElementById("title").innerHTML = title;
	document.getElementById("error").innerHTML = message;
}
		
var pull = new XMLHttpRequest()		
var Oldsid = location.hash
var sid = Oldsid.substring(1).toUpperCase();
	
if (sid=="SDS" || sid=="FEATURED") {
	pull.open("GET", "https://cors-anywhere.herokuapp.com/api.scratch.mit.edu/proxy/featured");
	pull.send();
	pull.onreadystatechange = function() {
  		if (pull.readyState === 4 && pull.status === 200) {
   			pulldone = JSON.parse(pull.responseText);
			if (sid == "SDS") {
				sid = pulldone.scratch_design_studio[0].gallery_id;
			}
			else if (sid == "FEATURED") {
				sid = pulldone.community_featured_studios[0].id
			}
		}
	}
}
	
function display(){
	var pull = new XMLHttpRequest()
	pull.open("GET", `https://cors-anywhere.herokuapp.com/api.scratch.mit.edu/studios/${sid}`);
	pull.send();
		pull.onreadystatechange = function() {
			if (pull.readyState === 4 && pull.status === 200) {
				var pulldone = JSON.parse(pull.responseText);
				var title = pulldone.title
				document.getElementById("title").innerHTML = `<a href="https://scratch.mit.edu/studios/${sid}">${title}</a>`;
				document.getElementById("image").innerHTML = `<img src=https://cdn2.scratch.mit.edu/get_image/gallery/${sid}_200x130.png class='image'>`;
				var desc = pulldone.description
				document.getElementById("textarea").innerHTML = `<textarea id="desc" readonly>${desc}</textarea>`;
			}
			else if (pull.status === 404) {
    			error("Studio not found", "Make sure you have the correct Studio ID.");
 			}
	}
}
