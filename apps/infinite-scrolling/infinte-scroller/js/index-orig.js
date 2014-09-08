var imgContainer = document.getElementById("product-display");

$(document).ready(function () {
	var page = 1;
	var product;
	var start;
	var end;
	var data;
	var item;
	var img;

	$.ajax({
		type: "GET",
		url: "db/products-for-scrolling.json",
		data: data,
		success: function (data) {
			var $contents =  $.parseJSON(data);
			$.each($contents.slice(0, 9), function (i, item) {
				productList(item);
				//product = $("<div>" + item.name + "</div>") 
				//$("#product-list").append(product);
			});
		}
	});

	$(window).scroll(function () {
		
		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			page++;
			end = (page * 10) - 1;
			start = end - 9;

	$.ajax({
		type: "GET",
		url: "db/products-for-scrolling.json",
		data: data,
		success: function (data) {
			var $content = $.parseJSON(data);
			$.each($content.slice(start, end), function (i, item) {
				productList(item);
			});
		}
	});
		}
	});
});

	function productList(item) {
		img = "<img src='http://g.nordstromimage.com/imagegallery/store/product/medium/" + item.image_url + ".jpg' />";
		var name = "<h1>" + item.name + "</h1>";
		product = $("<div class='product'>" + name + img + "</div>");				

		$("#product-list").append(product);

		$.find(".product").click(function () {
			alert("HI!");
			displayImage(item); // item is still the item passed to productList.
		})


		//var x = document.getElementsByClassName("product");
		//for (var i = 0; i < x.length; i++){
		//	x[i].addEventListener("click", showImage);
		//}

		//$("#product-list").on("click", ".product", displayImage);
	}

	function displayImage(item) {
		alert(item.image_url);
		var largeImg = "<img src='http://g.nordstromimage.com/imagegallery/store/product/large/" + item.image_url + ".jpg' />";
		//alert(item.image_url);
		$("#product-display").html(largeImg);
	}



	
	 





