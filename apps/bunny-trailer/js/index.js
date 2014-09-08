$(document).ready(function () {

	var vid = document.getElementById("bunnyVideo"),
		audio = document.getElementById("audio"),
		progressObj = document.getElementById("progressBar"),
		vidWidth = vid.width,
		vidHeight = vid.height,
		vidTypes = ["mp4", "webm", "ogv"],
		audTypes = ["mp3", "ogg"],
		vidSource = "",
		sitedata = [],
		vidName = "",
		vidPath = "",
		audName = "",
		audPath = "",
		imgLogo = "",
		imgBack = "",
		imgPath = "",
		playing = 0;

	var $controls = $("#controls"),
		$video = $("#bunnyVideo"),
		$audio = $("#audio"),
		$playSound = $("#playSound"),
		$overlay = $("#overlay"),
		$container = $("#container"),
		$start = $controls.find("#start"),
		$pause = $controls.find("#pause"),
		$stop = $controls.find("#stop"),
		$skip = $controls.find("#skip"),
		$bubble = $("#overlay div.bubbleWrap"),
		$interval = $("#interval"),
		$interface = $("#ui");

	sitedata = getData(handleData);
	
	// ajax callback
	function handleData(sitedata) {
		// vars from json file
		vidName = sitedata[0].video;
		vidPath = sitedata[0].vidPath;
		audName = sitedata[0].audio;
		audPath = sitedata[0].audPath;
		imgLogo = sitedata[0].imgLogo;  //used
		imgBack = sitedata[0].imgBackground;  //used
		imgPath = sitedata[0].imgPath;  // used

		// hide elements for later use
		$bubble.hide();
		$interval.hide();
		$interface.hide();
		$playSound.hide();

		$playSound.hover(function () {
			$(this).attr("src", imgPath + "sound-icon-on.png");
		},
		function () {
			$(this).attr("src", imgPath + "sound-icon-off.png");
		});
		
		//set video sources
		$.each(vidTypes, function (index, value) {
			vidSource = $("<source src='" + vidPath + vidName + '.' + vidTypes[index] + "' type='video/" + vidTypes[index] + "' />");
			vidSource.appendTo($video);
		});

		//set audio sources
		$.each(audTypes, function (index, value) {
			audSource = $("<source src='" + audPath + audName + '.' + audTypes[index] + "' type='audio/" + audTypes[index] + "' />");
			audSource.appendTo($audio);
		});
		
		// set background images
		$interval.css({
			"background-image": ("url(" + imgPath + imgLogo + ")"),
			"background-size": function () { return vidWidth + "px " + vidHeight + "px" }
		});
		$interface.css({
			"background-image": ("url(" + imgPath + imgBack + ")"),
			"background-size": function () { return vidWidth + "px " + vidHeight + "px" }
		});

		// event listeners
		vid.addEventListener("ended", transition, false);
		audio.addEventListener("click", this.play, false);

		$start.click(function () {
			// set max value of progress
			if (progressObj && progressObj.value == 0) {
				progressObj.max = parseInt(vid.duration);
			}
			vid.addEventListener("timeupdate", reportProgress, false);
			vid.play();

		});
		$pause.click(function () {
			vid.pause();
		});
		$stop.click(function () {
			vid.pause();
			vid.currentTime = 0;
		});
		$skip.click(function () {
			vid.pause();
			transition();
		});
		$playSound.click(function () {
			if (playing == 0) {
				audio.play();
				playing++;
			}
			else {
				audio.pause();
				playing--;
			}
			
		});

		//  overlay elements	
		$container.css({
			"width": function () { return vid.width },
			"height": function () { return vid.height }
		});
		$overlay.css({
			"width": function () { return vid.width; },
			"height": function () { return vid.height; }
		});

		// update progress bar
		function reportProgress() {
			// set progress element's value
			var time = Math.round(this.currentTime);
			if (time == 14) {
				$bubble.fadeIn("slow");
			}
			if (time == 17) {
				$bubble.fadeOut("slow");
			}
			if (progressObj && progressObj.max) {
				progressObj.value = time;
			}
		}

		function transition() {
			$overlay.fadeOut();
			$video.fadeOut();

			setTimeout(function () {
				$interval.fadeIn("slow");
			}, 1000);

			setTimeout(function () {
				$interval.fadeOut("slow");
			}, 5000);
		
			setTimeout(function () {
				renderUI();
			}, 4000);

			function renderUI(){
				$interface.fadeIn(3000);
				$playSound.fadeIn(3000);
			}
		}

		$interval.css({
			"width": vidWidth,
			"height": vidHeight
		})
		$interface.css({
			"width": function () { return vid.width; },
			"height": function () { return vid.height; }
		});

	}
	// ajax to retrieve json data
	function getData(handleData) {
		$.ajax({
			dataType: "json",
			type: "GET",
			url: "db/data.js",
			success: function (data) {
				handleData(data);
			},
			error: function(){
				console.log("There was a problem with the AJAX request");
			}
		})
	}

});

