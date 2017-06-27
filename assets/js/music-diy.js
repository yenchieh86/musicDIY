var path = new Path();
var img_arr = [];
var sound_arr = [];

var keyData = {
	a: { color: "rgb(0, 0, 255)", sound: new Howl({ src: ['assets/music/bubbles.mp3']}) },
	b: { color: "rgb(0, 255, 0)", sound: new Howl({ src: ['assets/music/clay.mp3']}) },
	c: { color: "rgb(255, 0, 0)", sound: new Howl({ src: ['assets/music/confetti.mp3']}) },
	d: { color: "rgb(0, 255, 255)", sound: new Howl({ src: ['assets/music/corona.mp3']}) },
	e: { color: "rgb(255, 255, 0)", sound: new Howl({ src: ['assets/music/dotted-spiral.mp3']}) },
	f: { color: "rgb(255, 0, 255)", sound: new Howl({ src: ['assets/music/flash-1.mp3']}) },
	g: { color: "rgb(0, 0, 150)", sound: new Howl({ src: ['assets/music/flash-2.mp3']}) },
	h: { color: "rgb(0, 150, 150)", sound: new Howl({ src: ['assets/music/flash-3.mp3']}) },
	i: { color: "rgb(150, 0, 150)", sound: new Howl({ src: ['assets/music/glimmer.mp3']}) },
	j: { color: "rgb(0, 150, 0)", sound: new Howl({ src: ['assets/music/moon.mp3']}) },
	k: { color: "rgb(150, 150, 0)", sound: new Howl({ src: ['assets/music/pinwheel.mp3']}) },
	l: { color: "rgb(150, 0, 0)", sound: new Howl({ src: ['assets/music/piston-1.mp3']}) },
	m: { color: "rgb(0, 0, 50)", sound: new Howl({ src: ['assets/music/piston-2.mp3']}) },
	n: { color: "rgb(0, 50, 50)", sound: new Howl({ src: ['assets/music/piston-3.mp3']}) },
	o: { color: "rgb(50, 0, 50)", sound: new Howl({ src: ['assets/music/prism-1.mp3']}) },
	p: { color: "rgb(0 , 50, 0)", sound: new Howl({ src: ['assets/music/prism-2.mp3']}) },
	q: { color: "rgb(50, 50, 0)", sound: new Howl({ src: ['assets/music/prism-3.mp3']}) },
	r: { color: "rgb(50, 0, 0)", sound: new Howl({ src: ['assets/music/splits.mp3']}) },
	s: { color: "rgb(0, 0, 200)", sound: new Howl({ src: ['assets/music/squiggle.mp3']}) },
	t: { color: "rgb(0, 200, 200)", sound: new Howl({ src: ['assets/music/strike.mp3']}) },
	u: { color: "rgb(200, 0, 200)", sound: new Howl({ src: ['assets/music/suspension.mp3']}) },
	v: { color: "rgb(200, 200, 0)", sound: new Howl({ src: ['assets/music/timer.mp3']}) },
	w: { color: "rgb(0, 200, 0)", sound: new Howl({ src: ['assets/music/ufo.mp3']}) },
	x: { color: "rgb(200, 0, 0)", sound: new Howl({ src: ['assets/music/veil.mp3']}) },
	y: { color: "rgb(200, 200, 200)", sound: new Howl({ src: ['assets/music/wipe.mp3']}) },
	z: { color: "rgb(150, 150, 150)", sound: new Howl({ src: ['assets/music/zig-zag.mp3']}) }
}

function onKeyDown(event) {
	if(event.key >= 'a' && event.key <= 'z') {
		keyData[event.key].sound.play();
		var maxPoint = new Point(view.size.width, view.size.height);
		var randomNum = Point.random();
		var point = maxPoint * randomNum;
		var circle = new Path.Rectangle({
	    	center: point,
	    	size: [500, 500],
	    	fillColor: keyData[event.key].color
	    });
	    img_arr.push(circle);
	}
}

function onFrame(event) {
    for(var n = 0; n < img_arr.length; n++) {
	    img_arr[n].fillColor.hue += 5;
	    img_arr[n].rotate(8);
	    img_arr[n].scale(.95);
		if(img_arr[n].area < 1) {
			img_arr[n].remove();
			img_arr.splice(n, 1);
		}
    }
}
