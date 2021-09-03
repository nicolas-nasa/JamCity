function Mobile() {

    var largura = window.innerWidth;
    var semi = document.getElementById("sm");
    var mobile = document.getElementById("m");

    console.log("ativou")

    if ( largura <= 1000 && mobile.style.display != "flex") {
        mobile.style.display = "flex";
    }    
    else if ( largura < 1400 && largura > 1000 && semi.style.display != "flex" ) {
        semi.style.display = "flex";
    } else {
        mobile.style.display = "";
        semi.style.display = "";
    }
}

function ChangeHeader() {

    var position = window.pageYOffset;
    console.log(position);
    var header = document.getElementById("Header");
  
    if(position  != 0){
      header.style.position = "fixed";
    } else{
      header.style.position = "absolute";
    }
    
  }
