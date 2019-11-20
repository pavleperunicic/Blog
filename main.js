let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

   // Get the modal
   var modal = document.getElementById('id01');
      
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }



   // Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(function(){
  $(".blog-post").slice(0, 3).show(); // select the first ten
  $("#load").click(function(e){ // click event for load more
      e.preventDefault();
      $(".blog-post:hidden").slice(0, 3).show(); // select next 10 hidden divs and show them
  });
});
