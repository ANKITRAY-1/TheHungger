//responsive topnav--------------------------------------------------------------------------------------------------------------------------
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
//food varites-------------------------------------------------------------------------------------------------------------------------------
    function varites(vartiesName) {
      var i;
      var x = document.getElementsByClassName("varites");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(vartiesName).style.display = "block";
    }
    
//cart---------------------------------------------------------------------------------------------------------------------------------------
