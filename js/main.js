
// dropdown togglar for clicking


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}











// navbar-togglar 



let toggler=document.querySelector("#navtogglar");
let navlist=document.querySelector(".navlist");

// console.log(toggler, navlist)

toggler.addEventListener("click", listDisplay);

function listDisplay() {
    //   alert('cicked')
    navlist.classList.toggle("showList");
}