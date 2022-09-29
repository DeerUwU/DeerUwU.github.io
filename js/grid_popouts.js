/* var modal = document.querySelector("#modal1"); // Get the modal
var openModal = document.querySelector(".item1"); // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

// When the user clicks on the button, open the modal
openModal.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */

//on modal button click, it will find the type id specified in the html
$(".modal_button").click(function(){
   $(".modal").hide();
   var Type = $(this).data("modal-type");
   $("#"+Type).show();
});

// When the user clicks on <span> (x), close the modal
$(".close").click(function(){
   $(".modal").hide();
   var Type = $(this).data("modal-type");
   $("#"+Type).hide();
});