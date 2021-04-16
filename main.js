const proxy = "https://cors-anywhere.herokuapp.com/"
//const proxy = "https://scratchcors.herokuapp.com/"

if (window.location.hash === "" || window.location.hash === "#") {
	window.location.replace("home");
	}

function error(title, message) {
	document.getElementById("title").innerHTML = title;
	document.getElementById("error").innerHTML = message;
}

function sendsite(){
	var topURL = document.referrer;
	if (topURL=="") {
		topURL="local";
	}
	console.log(topURL);
	var formData = new FormData();
	formData.append('site', topURL);
	formData.append('tool', 'SSE');
	fetch('https://script.google.com/macros/s/AKfycbwgdxViMZFoAYwJXpXm2Ifd6uMBIXGB564w8jM_osPeu9mC4dY/exec', { method: 'POST', body: formData})
	.then(response => console.log('Success!', response))
	.catch(error => console.error('Error!', error.message))
}

var pull = new XMLHttpRequest()
var Oldsid = location.hash
var sid = Oldsid.substring(1).toUpperCase();

function calculate(){
	if (sid=="SDS" || sid=="FEATURED") {
		pull.open("GET", "https://scratchcors.herokuapp.com/api.scratch.mit.edu/proxy/featured");
		pull.send();
		pull.onreadystatechange = function() {
  			if (pull.readyState === 4 && pull.status === 200) {
   				pulldone = JSON.parse(pull.responseText);
				if (sid == "SDS") {
					sid = pulldone.scratch_design_studio[0].gallery_id;
					display()
				}
				else if (sid == "FEATURED") {
					sid = pulldone.community_featured_studios[0].id
					display()
				}
			}
		}
	}
	else {
		display()
	}
}

function display(){
	var pull = new XMLHttpRequest()
	pull.open("GET", `https://scratchcors.herokuapp.com/api.scratch.mit.edu/studios/${sid}`);
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
