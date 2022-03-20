// mouse x position
let mouseXStartPoint =300;
let mouseXEndPpint =window.innerWidth-300;
let currendXPosition =0;
let fractionXvalue =0;

// mouse Y position
let mouseYEndPpint =window.innerHeight-300;
let currendYPosition =0;
let fractionYvalue =0;


let mouseRange =mouseXEndPpint-mouseXStartPoint;
const mouseMove =(event)=>{
    //console.log(event);
    console.log(`x value =${event.clientX} & Y value =${event.clientY}`);
    currendXPosition =event.clientX - mouseXStartPoint;
    fractionXvalue =currendXPosition/mouseRange;
    console.log(fractionXvalue);

    currendYPosition =event.clientY;
    fractionYvalue =currendYPosition/mouseYEndPpint;
    console.log(fractionYvalue);
}
window.addEventListener('mousemove',mouseMove);