window.onload = regexGrabName;

function grabArticleName() {
	var link = window.location.href;
	var linkStart = link.lastIndexOf("/");
	var articleName = link.substr(linkStart + 1, link.length);

	results.innerHTML = articleName;
}

function regexGrabName() {
	var link = window.location.href;
	var re = /\/[^\/]*$/;
	var txt = re.exec(link).toString();
	var articleName = txt.substr(1, txt.length);

	results.innerHTML = articleName;
	 

}