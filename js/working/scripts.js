$(document).ready(function () {
	HidePanels();

	$('.content h2').bind('click', function () {
		ShowPanel(this);
	}
		);





});

window.onload = initPage;

//$(document).ready(function () {	
	// stub for future JQuery
//});

function initPage() {
	var button = (document.getElementById("GetProjects"));
	button.onclick = "ShowPanel(this)";
	//HidePanels();

	//var value = button.value;
	//alert(value);
	//alert(button.getAttribute("Text"));
	//ShowAttributes();

	//var availabeWidth = screen.availWidth;
	//var availableHeight = screen.availHeight;
	//var screenWidth = screen.width;
	//var screenHeight = screen.height;
	//var screenBoundaries = screenBounds;
	alert("Screen Boundaries ");

	//alert("Available Width is " + availabeWidth);
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