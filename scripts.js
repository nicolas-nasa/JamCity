function Mobile() {

    var largura = window.innerWidth;
    var semi = document.getElementById("sm");
    var mobile = document.getElementById("m");
    var l = document.getElementById("bm");
    var l1 = document.getElementById("bm1");
    var l2 = document.getElementById("bm2");
    var l3 = document.getElementById("bm3");

    console.log("ativou")

    if ( largura <= 1000 && mobile.style.display != "flex") {
        mobile.style.display = "flex";

        l.style.justifyContent = "center"
        l.style.alignItems = "stretch"

        l1.style.backgroundColor = "#e13868";
        l1.style.transform = "rotate(45deg)";
        l1.style.marginTop = "-5px";

        l2.style.display = "none";

        l3.style.backgroundColor = "#e13868";
        l3.style.transform = "rotate(-45deg)";
        l3.style.marginTop = "-5px";
    }    
    else if ( largura < 1400 && largura > 1000 && semi.style.display != "flex" ) {
        semi.style.display = "flex";

        l.style.justifyContent = "center"
        l.style.alignItems = "stretch"
        

        l1.style.backgroundColor = "#e13868";
        l1.style.transform = "rotate(45deg)";

        l2.style.display = "none";

        l3.style.backgroundColor = "#e13868";
        l3.style.transform = "rotate(-45deg)";
        l3.style.marginTop = "-5px";
    } else {

        mobile.style.display = "";
        semi.style.display = "";

        l.style.justifyContent = "space-around"
        l.style.alignItems = "center"

        l1.style.backgroundColor = "#1a2c3a";
        l1.style.transform = "rotate(0deg)";
        l1.style.marginTop = "0px";

        l2.style.display = "flex";

        l3.style.backgroundColor = "#1a2c3a";
        l3.style.transform = "rotate(0deg)";
        l3.style.marginTop = "0px";
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
