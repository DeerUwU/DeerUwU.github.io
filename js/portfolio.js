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

$('.modal').click(function(e) {
    if ($(e.target).is('.modal')) {
        $(".modal").hide();
		var Type = $(this).data("modal-type");
		$("#"+Type).hide();
    }
});

// #######################################################
/* const captionShow = [
  { transform: 'translateY(0px)', easing: 'ease-in-out'},
  { transform: 'translateY(50px)' }
];
const captionHide = [
  { transform: 'translateY(50px)', easing: 'ease-in-out'},
  { transform: 'translateY(0px)' }
];

const moveTiming = {
  duration: 500, //500 ms
  iterations: 1,
  fill: 'forwards'
} */
// #######################################################
/* var gridTile = document.querySelector(".modal_button"); //get the gridtile
var caption = document.querySelector(".captions");
let hidden = true;

gridTile.addEventListener("mouseover", showCaption);

function showCaption(event){
	if (hidden){
		caption.animate(captionShow, moveTiming);
		hidden = false;
	} else {
		caption.animate(captionHide, moveTiming);
		hidden = true;
	}
} */
