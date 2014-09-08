$(document).ready(function () {

	var $info = $("#info"),
		staticTitle = "E-Book Comment Summary | ";
		$header = $("header h1");
		$title = $info.find("span.title"),
		$author = $info.find("span.author"),
		$thumb = $info.find("img.thumb"),
		$comments = $("#comments"),
		$booklist = $("#booklist");

	// get inital book info
	$.ajax({
		type: "GET",
		url: "db/info.json",
		success: function (data) {
			renderPage($.parseJSON(data));
		},
		error: function(){
			console.log("There was a problem with your AJAX request.");
		}
	});

	function renderPage(data) {
		// populate dropdown list
		$.each(data, function (index, value) {
			$booklist.append("<option value='"  + index +  "'>" + value.title + "</option>");
		})

		updatePage(data, 0);
		$("#booklist").change(function () {
			var selected = $("#booklist option:selected").val();
			updatePage(data, selected);
		});
	}

	function updatePage(data, selected) {
		//empty and re-populate info elements
		$header.empty().append(staticTitle + (data[selected].title));
		$title.empty().append(data[selected].title);
		$author.empty().append(data[selected].author);
		$thumb.attr("src", "images/" + (data[selected].content) + ".jpg");

		updateComments(data, selected);
	}


	function updateComments(info, selected) {
		//load selected comments file
		$.ajax({
			type: "GET",
			url: "db/" + info[selected].content + ".txt",
			success: function (data) {
				renderComments(data);
			},
			error: function () {
				console.log("There was an error with the AJAX request");
			}
		});
	}
		function renderComments(data) {
			//remove existing comments
			$comments.empty();

			// filter data for \r's and quotes introduced by pdf commenting
			var data = data.replace(/\\r/g, " ");
			var data = data.replace(/["]/g, "");

			// split text into array by new lines
			var $arr = data.split("\n"),
			subArray = [],
			html = "";

			for (i = 0; i < $arr.length; i++) {	
				subArray.push($arr[i].split("\t"));
			}
		
			// remove first meta comment from array
			subArray.splice(0, 1);

		for (i = 0; i < subArray.length; i++) {
			if(subArray[i][5]){
				html = "<div>" + subArray[i][5] + "</div>";
				$comments.append(html);
			}
			else {
				continue;
			}
		}
	}
});