"use strict"
var data;
var page = 1;
var start = 0;
$.getJSON("db/products-for-scrolling.json", function (json) { // start the AJAX first
	data = json;
	$(do10) // wait for ready second
})

function do10() {
	$.each(data.slice(start, start + 10), function (i, item) {
		productList(item);
	});
}

$(window).scroll(function () {
	if ($(window).scrollTop() + $(window).height() == $(document).height()) {
		start += 10
		do10()
	}
});

function productList(item) {
	var img = "<img src='http://g.nordstromimage.com/imagegallery/store/product/medium/" + item.image_url + ".jpg' />";
	var name = "<h1>" + item.name + "</h1>";
	$("<div class='product'>" + name + img + "</div>").appendTo("#product-list").click(function () {
		displayImage(item); // item is still the item passed to productList.
	})
}

function displayImage(item) {
	var largeImg = "<img src='http://g.nordstromimage.com/imagegallery/store/product/large/" + item.image_url + ".jpg' />";
	$("#product-display").html(largeImg);
}
