//responsive topnav--------------------------------------------------------------------------------------------------------------------------
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
//food varites-------------------------------------------------------------------------------------------------------------------------
    function varites(vartiesName) {
      var i;
      var x = document.getElementsByClassName("varites");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(vartiesName).style.display = "block";
    }
    
//readmore-----------------------------------------------------------------------------------------------------------------------------
function readFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
//loading---------------------------------------------------------------------------------------------------------------------------
var myVar;

function loadFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
