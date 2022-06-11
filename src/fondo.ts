let activar:any = document.getElementById('activar');
let color:any = document.getElementById('color');

    
activar.addEventListener('click',function(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    color.innerHTML = bgColor;
    });