if (window.location.hash === "" || window.location.hash === "#") {
	window.location.href = "/home";
}

var pull = new XMLHttpRequest();
var Oldsid = location.hash;
var sid = Oldsid.substring(1);
pull.open("GET", `https://cors-anywhere.herokuapp.com/api.scratch.mit.edu/studios/${sid}`);
pull.send();
	pull.onreadystatechange = function() {
		if (pull.readyState === 4 && pull.status === 200) {
			var pulldone = JSON.parse(pull.responseText
			);
			var title = pulldone.title
			document.getElementById("title").innerHTML = `<a href="https://scratch.mit.edu/studios/${sid}">${title}</a>`;
			document.getElementById("image").innerHTML = `<img src=https://cdn2.scratch.mit.edu/get_image/gallery/${sid}_200x130.png class='image'>`;
			var desc = pulldone.description
			document.getElementById("desc").innerHTML = desc;
		}
	}
