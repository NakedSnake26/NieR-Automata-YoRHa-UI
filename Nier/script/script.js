const starfield = document.getElementById('starfield');
starfield.width = document.body.clientWidth;
starfield.height = document.body.clientHeight;

const c = starfield.getContext("2d");

const setCanvasExtents = () => {
  let w = document.body.clientWidth;
  let h = document.body.clientHeight;
  starfield.width = w;
  starfield.height = h;
};

window.onresize = () => {
  setCanvasExtents();
  stars = makeStars(750);
  stars.forEach((star) => {
    putPixel(star.x, star.y, star.brightness);
  });
};

const makeStars = (count) => {
  const out = [];
    for (let i=0;i<count;i++){
      const s = {
        x: Math.random()*document.body.clientWidth,
        y: Math.random()*document.body.clientHeight * 1,
        brightness: Math.random()
      };
    out.push(s);
  }
  return out;
}

let stars = makeStars(1750);

const putPixel = (x, y, brightness) => {
  const intensity = brightness * 255;
  const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
  c.fillStyle = rgb;
  c.fillRect(x, y, 1, 1);
};

stars.forEach((star) => {
  putPixel(star.x, star.y, star.brightness);
});

//setCanvasExtents();
function printText( el ){

	let letterTimeout = 20

	let text = el.innerHTML
	let i = 1

	let print__fn = function(){

			if( i <= text.length ){
				el.innerHTML = text.substr( 0, i );
				setTimeout( arguments.callee, letterTimeout );
			}

			i++;
		}

	print__fn() // init
};

// init
let el = document.getElementById( 'my-text' )
printText( el );

