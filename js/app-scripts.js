$(document).ready(function () {
	console.log("functioning");
	document.getElementById("btnResults").onclick = showResults;
	setCSS();
});
	
function setCSS() {
	
}

function clrInput(elmt) {
	if (elmt.value == 'Enter css here') {
		elmt.value = '';
	}
}

function showResults(e) {
	
  var cssQueryInput = document.getElementById("cssInput").value;
  var code = document.getElementById("codeExample").innerHTML;
  var resultsBox = document.getElementById("results");
  var results = "<style>" + cssQueryInput + "</style><div>" + code + "</div>";
  var ifrm = document.getElementById('iResults');

	try{
		// content block
		ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
		ifrm.document.open();
		ifrm.document.write(results);
		ifrm.document.close();

		//link block 
		var cssLink = document.createElement("link")
		cssLink.href = "../../App_Themes/Default/apps.css";
		cssLink.rel = "stylesheet";
		cssLink.type = "text/css";
		frames["iResults"].document.body.appendChild(cssLink);
	}
	
	catch(err){
		console.log(err.message);
	}



  //resultsBox.innerHTML = "<style>" + cssQueryInput + "</style><div>" + code + "</div>";
  return false;
}


//var attrEnd = cssQueryInput.indexOf("]");
//var cssQuery = cssQueryInput.substring(0, attrEnd + 1);

