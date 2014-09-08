window.onload = initAll;

function initAll() {
	var testFunction;
	var btn = document.getElementById("testBtn");
	btn.addEventListener("click", sendTest, false);

// FOR INLINE FUNCTION TESTING
	// FUNCTION TO TEST
	//var testFunction = testLoadScriptViaDom;	
	// execute test
		//testTime(testFunction);
}

function testTime(testFunction, executions) {
	var t0, t1, timeElapsed, length;
	if (!executions) {
		length = 3;
	}
	else {
		length = executions;
	}
	var counter = 0;
	var results = document.getElementById("results");

	t0 = performance.now();
	for (i = 0; i < length;i++){
		testFunction();
		counter++;
		if (counter == (length)) {				
			record();
			break;
		}
	}

	function record() {
		t1 = performance.now();
		timeElapsed = ((t1 - t0) / 1000);
		displayResults();
	}

	function displayResults() {
		if (testFunction.functionName) {
			$(".functionName").text(testFunction.functionName);
		}
		else {
			$(".functionName").text(testFunction.name);
		}
		$(".counter").text(counter);
		$(".aet").text(timeElapsed);
	}
}

	function sendTest() {
		//fName, fContent, fExes
		var fName = document.getElementById("fName").value;
		var fContent = document.getElementById("fContent").value;
		var fExes = document.getElementById("executions").value;
		var f = new Function(fName, fContent);
		f.functionName = fName.toString();
		testTime(f, fExes);
	}

/**	TEST FUNCTIONS
*****************************************************************/
function testWrite() {
	setTimeout(function () {
		console.log("Hello World");
	}, 1000);
}

function testLoadScriptViaDom() {
	// create the script element
		var theScript = document.createElement("script");
		theScript.async = true;
		theScript.src = "tests/theScript.js";
		theScript.type = "text/javascript";
	// create and append script container
		var theScriptWrap = document.createElement("span");
		theScriptWrap.appendChild(theScript);
	// append script to document body
		document.body.appendChild(theScriptWrap);
}