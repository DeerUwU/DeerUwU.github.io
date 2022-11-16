const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
// let modalThumb = document.querySelector(".gallery-container");
// let modalThumbContainer = document.querySelector(".modal_thumbnails");

// for (let step = 0; step < modalThumb.children.length; step++) {
// 	let thumb = $(".gallery-container")[step];
// 	modalThumbContainer.append(thumb.cloneNode(true));
// }
$(".modal_bg").hide();


$(".gallery-tile").click(function(){
	$(".modal").hide();
	var Type = $(this).data("modal-type");
	$(".modal_bg").show(300);
	$("#"+Type).show(300);
	
 });
 
$(".modal_bg").click(function(){
	$(".modal").hide(300);
	var Type = $(this).data("modal-type");
	$("#"+Type).hide(300);
	$(".modal_bg").hide(300);
 });

//  $('.modal').click(function(e) {
// 	 if ($(e.target).is('.modal_bg')) {
// 		 $(".modal_bg").hide();
// 		 var Type = $(this).data("modal-type");
// 		 $("#"+Type).hide(300);
// 		 $(".modal_bg").hide(300);
// 	 }
//  });

