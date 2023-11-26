// here i declared variable img, then assigned a value to the variable img
var img = document.getElementById('slider1');
// this part is where I declared my arrays
var slides = ['images/Image1.jpg','images/Image2.jpg','images/Image3.jpg','images/Image4.jpg','images/Image5.jpg'];

var Start=0;
function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    // console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
    
}
setInterval(slider, 3000);

