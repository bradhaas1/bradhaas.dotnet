﻿var ctx;
var canvas1;
var stuff = [];
var thingInMotion;
var offsetx;
var offsety;

window.onload = init;
function init() {

	canvas1 = document.getElementById('canvas');
	canvas1.onmousedown = function () { return false; };  //prevents change of cursor to default

	canvas1.addEventListener('dblclick', makenewitem, false);
	canvas1.addEventListener('mousedown', startdragging, false);
	ctx = canvas1.getContext("2d");
	var r1 = new Rect(2, 10, 50, 50, "red");
	var s1 = new Rect(60, 10, 50, 50, "blue");
	var oval1 = new Oval(200, 30, 20, 2.0, 1.0, "teal");
	var cir1 = new Oval(300, 30, 20, 1.0, 1.0, "purple");
	var dad = new Image();
	dad.src = "images/daniel1.jpg";
	var mom = new Image();
	mom.src = "images/allison1.jpg";
	var son1 = new Image();
	son1.src = "images/liam2.jpg";
	var son2 = new Image();
	son2.src = "images/grant1.jpg";
	var daughter = new Image();
	daughter.src = "images/annika.jpg";
	var pic1 = new Picture(10, 100, 100, 100, dad);
	var pic2 = new Picture(120, 100, 100, 100, mom);
	var pic3 = new Picture(230, 100, 100, 100, son1);
	var pic4 = new Picture(340, 100, 100, 100, son2);
	var pic5 = new Picture(450, 100, 100, 100, daughter);
	var heart1 = new Heart(510, 30, 60, 20, "pink");
	stuff.push(pic1);
	stuff.push(pic2);
	stuff.push(pic3);
	stuff.push(pic4);
	stuff.push(pic5);
	stuff.push(r1);
	stuff.push(s1);
	stuff.push(oval1);
	stuff.push(cir1);

	stuff.push(heart1);
	drawstuff();
}
function distsq(x1, y1, x2, y2) {
	//done to avoid taking square roots
	var xd = x1 - x2;
	var yd = y1 - y2;
	return ((xd * xd) + (yd * yd));
}
function Picture(x, y, w, h, imagename) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.imagename = imagename;
	this.draw = drawpic;
	this.overcheck = overrect;

}
function Heart(x, y, h, drx, color) {
	this.x = x;
	this.y = y;
	this.h = h;
	this.drx = drx;
	this.radsq = drx * drx;
	this.color = color;
	this.draw = drawheart;
	this.overcheck = overheart;
	this.ang = .25 * Math.PI;

}
function drawheart() {
	var leftctrx = this.x - this.drx;
	var rightctrx = this.x + this.drx;
	var cx = rightctrx + this.drx * Math.cos(this.ang);
	var cy = this.y + this.drx * Math.sin(this.ang);
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	ctx.arc(leftctrx, this.y, this.drx, 0, Math.PI - this.ang, true);
	ctx.lineTo(this.x, this.y + this.h);
	ctx.lineTo(cx, cy);
	ctx.arc(rightctrx, this.y, this.drx, this.ang, Math.PI, true);
	ctx.closePath();
	ctx.fill();
}
function overheart(mx, my) {
	var leftctrx = this.x - this.drx;
	var rightctrx = this.x + this.drx;
	var qx = this.x - 2 * this.drx;
	var qy = this.y - this.drx;
	var qwidth = 4 * this.drx;
	var qheight = this.drx + this.h;

	//quick test if it is in bounding rectangle	
	if (outside(qx, qy, qwidth, qheight, mx, my)) {

		return false;
	}
	//compare to two centers

	if (distsq(mx, my, leftctrx, this.y) < this.radsq) return true;
	if (distsq(mx, my, rightctrx, this.y) < this.radsq) return true;
	// if outside of circles AND less than equal to y, return false
	if (my <= this.y) return false;

	// compare to each slope
	var x2 = this.x
	var y2 = this.y + this.h;
	var m = (this.h) / (2 * this.drx);
	// left side
	if (mx <= this.x) {
		if (my < (m * (mx - x2) + y2)) {

			return true;
		}
		else {

			return false;
		}
	}
	else {
		m = -m;

		if (my < (m * (mx - x2) + y2)) { return true }
		else return false;
	}
}
function outside(x, y, w, h, mx, my) {
	return ((mx < x) || (mx > (x + w)) || (my < y) || (my > (y + h)));
}

function drawpic() {

	ctx.drawImage(this.imagename, this.x, this.y, this.w, this.h);
}
function Oval(x, y, r, hor, ver, c) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.radsq = r * r;
	this.hor = hor;
	this.ver = ver;
	this.draw = drawoval;
	this.color = c;
	this.overcheck = overoval;
}
function drawoval() {
	ctx.save();
	ctx.translate(this.x, this.y);
	ctx.scale(this.hor, this.ver);
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(0, 0, this.r, 0, 2 * Math.PI, true);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}
function Rect(x, y, w, h, c) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.draw = drawrect;
	this.color = c;
	this.overcheck = overrect;
}
function overoval(mx, my) {
	//computes positions in the translated and scaled coordinate system
	var x1 = 0;  //this is this.x - this.x
	var y1 = 0;
	var x2 = (mx - this.x) / this.hor;
	var y2 = (my - this.y) / this.ver;
	if (distsq(x1, y1, x2, y2) <= (this.radsq)) {
		return true
	}
	else { return false }
}
function overrect(mx, my) {
	if ((mx >= this.x) && (mx <= (this.x + this.w)) && (my >= this.y) && (my <= (this.y + this.h)))
	{ return true; }
	else { return false; }
}
function makenewitem(ev) {
	var mx;
	var my;
	if (ev.layerX || ev.layerX == 0) { // Firefox, ???
		mx = ev.layerX;
		my = ev.layerY;
	} else if (ev.offsetX || ev.offsetX == 0) { // Opera, ???
		mx = ev.offsetX;
		my = ev.offsetY;
	}
	var endpt = stuff.length - 1;
	var item;
	for (var i = endpt; i >= 0; i--) {  //reverse order
		if (stuff[i].overcheck(mx, my)) {
			item = clone(stuff[i]);
			item.x += 20;
			item.y += 20;
			stuff.push(item);
			break;
		}
	}
	drawstuff();
}
function clone(obj) {
	var item = new Object();
	for (var info in obj) {
		item[info] = obj[info];
	}
	return item;

}
function startdragging(ev) {
	var mx;
	var my;
	if (ev.layerX || ev.layerX == 0) { // Firefox, ???
		mx = ev.layerX;
		my = ev.layerY;
	} else if (ev.offsetX || ev.offsetX == 0) { // Opera, ???
		mx = ev.offsetX;
		my = ev.offsetY;
	}
	var endpt = stuff.length - 1;
	for (var i = endpt; i >= 0; i--) {  //reverse order
		if (stuff[i].overcheck(mx, my)) {
			offsetx = mx - stuff[i].x;
			offsety = my - stuff[i].y;
			//move this item on top
			var item = stuff[i];
			thingInMotion = stuff.length - 1;
			stuff.splice(i, 1);
			stuff.push(item);
			canvas1.style.cursor = "pointer";   // change to finger when dragging
			canvas1.addEventListener('mousemove', moveit, false);
			canvas1.addEventListener('mouseup', dropit, false);
			break;
		}
	}
}
function dropit(ev) {
	canvas1.removeEventListener('mousemove', moveit, false);
	canvas1.removeEventListener('mouseup', dropit, false);
	canvas1.style.cursor = "crosshair";  //change back to crosshair
}
function moveit(ev) {
	var mx;
	var my;
	if (ev.layerX || ev.layerX == 0) { // Firefox, ???
		mx = ev.layerX;
		my = ev.layerY;
	} else if (ev.offsetX || ev.offsetX == 0) { // Opera, ???
		mx = ev.offsetX;
		my = ev.offsetY;
	}
	stuff[thingInMotion].x = mx - offsetx; //adjust for flypaper dragging
	stuff[thingInMotion].y = my - offsety;
	drawstuff();
}

function drawstuff() {
	ctx.clearRect(0, 0, 600, 400);
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	ctx.strokeRect(0, 0, 600, 400);
	for (var i = 0; i < stuff.length; i++) {
		stuff[i].draw();
	}
}

function drawrect() {
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.w, this.h);
}
function saveasimage() {
	try {
		window.open(canvas1.toDataURL("image/png"));
	}
	catch (err) {
		alert("You need to change browsers OR upload the file to a server.");
	}


}
function removeobj() {
	stuff.pop();
	drawstuff();
}