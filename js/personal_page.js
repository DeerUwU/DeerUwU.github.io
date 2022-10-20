const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


$(document).ready(function(){

  $("#button-aboutme").click(function(){
    $(".layout-right-aboutme").show();
    $(".layout-right-2d_art").hide();
    $(".layout-right-3d_projects").hide();
    $(".layout-right-misc_pages").hide();
  });
  
  $("#button-2d_art").click(function(){
    $(".layout-right-aboutme").hide();
    $(".layout-right-2d_art").show();
    $(".layout-right-3d_projects").hide();
    $(".layout-right-misc_pages").hide();
  });
  
  $("#button-3d_projects").click(function(){
    $(".layout-right-aboutme").hide();
    $(".layout-right-2d_art").hide();
    $(".layout-right-3d_projects").show();
    $(".layout-right-misc_pages").hide();
  });
  
  $("#button-misc_pages").click(function(){
    $(".layout-right-aboutme").hide();
    $(".layout-right-2d_art").hide();
    $(".layout-right-3d_projects").hide();
    $(".layout-right-misc_pages").show();
  });

});


/*##########################################################*/