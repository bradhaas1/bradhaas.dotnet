window.onload = initAll;

var slideImages = new Array("images/index-sliders/diono.jpg", "images/index-sliders/blanket.jpg", "images/index-sliders/jstraw.jpg", "images/index-sliders/kmd.jpg", "images/index-sliders/pollard.jpg", "images/index-sliders/stella.jpg");
var slideUrls = new Array("http://nz.diono.com", "http://blanketfurniture.com/", "http://www.jstraw.com", "http://www.kellymonnahan.com/", "http://www.pollardcoffee.com", "http://www.stellalove.com");
var thisSlide = 0;

function initAll() {
	//rotate();
}

/* SLIDESHOW 
****************************************/

//function initBannerLink() {
//	if (document.getElementById('imgBox').parentNode.tagName == "A") {
//		document.getElementById('imgBox').parentNode.onclick = newLocation;
//	}
//	setTimeout(function () { thisSlide++ }, 3 * 3000);
//	rotate();
//}

function rotate() {
	if (thisSlide == slideImages.length) {
		thisSlide = 0;
	}
	document.getElementById('imgBox').src = slideImages[thisSlide];
	setTimeout('rotate()', 1 * 3000);

	thisSlide++;
}

//function newLocation() {
//	document.location.href = slideUrls[thisSlide];
//	thisSlide++;
//	return false;
//}


/* MISCELLANEOUS 
****************************************/

//function resumeClick() {
//	document.getElementById("resumeLnk").onclick = showResume;

//}

function showResume() {
	document.location.href = "http://www.bradhaas.net/downloads/brad-haas-res.pdf";
	//document.getElementById("aboutMe").style.display = "none";
	//document.getElementById("slideShow").style.display = "none";
	
}

$(document).ready(function () {
	HidePanels();

	$('.content h2').bind('click', function () {
		ShowPanel(this);
	}
		);
});


function initPage() {
	//var button = (document.getElementById("GetProjects"));
	//button.onclick = "ShowPanel(this)";
	//HidePanels();

	//var value = button.value;
	//alert(value);
	//alert(button.getAttribute("Text"));
	//ShowAttributes();

	//var availabeWidth = screen.availWidth;
	//var availableHeight = screen.availHeight;
	//var screenWidth = document.body.clientWidth;
	//var screenHeight = screen.height;

	//var screenBoundaries = screenBoundaries;
	//alert("Screen Boundaries " + screenBoundaries);

	//alert("Screen Width is " + screenWidth);
	//alert("Available Height is " + availableHeight);
	//alert("Screen Width is " + screenWidth);
	//alert("Screen Height is " + screenHeight)
}

function ShowPanel(taskBtn) {
	if(taskBtn){

		HidePanels();
		var domTask = document.getElementById(taskBtn.id);
		var sibling = domTask.nextSibling.nextSibling;

		try{
			sibling.style.height = '100%;';
			sibling.style.overflow = 'visible';
		}

		catch (err) {
			alert(err.message);
		}

		/*
		var el = document.getElementById("someId");
		var arr = [];
		for (var i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
			arr.push(attrs.item(i).nodeName);
		}
		*/
	}
}

function HidePanels() {
	var panels = (document.getElementsByClassName("pnlResults"));

	//panels.setAttribute("style", "display:none;");

	for (var i = 0; i < panels.length; i++) {
		// THESE STATEMENTS BOTH WORK
		//panels[i].setAttribute("style", "display:none;");
		panels[i].style.height = "0px";
		panels[i].style.overflow = "hidden";
	}
}

function ShowAttributes() {
	var attrs = document.getElementById("btnCreateTask").attributes;

	Array.prototype.slice.call(document.getElementById("btnCreateTask").attributes).forEach(function (item) {
		alert(item.name + ': ' + item.value);
	})

}


	