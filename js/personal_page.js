const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
//########################################################################
function copyToClipBoard() {
  const element = document.querySelector('.discord_copy');

  const storage = document.createElement('textarea');
  storage.value = element.textContent;
  element.textContent = "copied!";
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.removeChild(storage);
  setTimeout(function() {
      element.textContent = storage.value;
  }, 2000);
  // const textCopied = "copied!"
  // $('<p class="text-copied">' + textCopied + '</p>', {
  // }).appendTo('.fa-discord');
  // $('.fa-discord p.text-copied').fadeOut("slow");
  // setTimeout(function() {
  //     $('.fa-discord p.text-copied[style*="display: none;"]').remove();
  // }, 1000);
}

/* let volume = document.querySelector("#volume-control");
	volume.addEventListener("change", function(e) {
	bg_music.volume = e.currentTarget.value / 100;
	}) */
//################## sound effects ########################################
const snd_squeak = new Audio("./assets/personal/sound/squeak.mp3");
const snd_bark = new Audio("./assets/personal/sound/snd_pombark.wav");
const bg_music = new Audio("./assets/personal/sound/noelle_ferriswheel.ogg");

let volume = document.querySelector("#volume-control");
function volumeUpdate(e) {
  bg_music.volume = e / 100;
}

function clicksqueak() {
  const snd_squeak_copy = snd_squeak.cloneNode(); //copies the sound so it can overlap
  snd_squeak_copy.play();
}
//################# stuff for volume slider styling #######################
const rangeInputs = document.querySelectorAll('input[type="range"]');

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("volume-control");
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

//########################################################################

$(document).ready(function () {

  $("#button-aboutme").click(function () {
    $(".layout-right-aboutme").show();
    $(".layout-right-2d_art").hide();
    $(".layout-right-3d_projects").hide();
    $(".layout-right-misc_pages").hide();
    $(".layout-right-credits").hide();
  });
 // ############################################
  $("#button-2d_art").click(function () {
    $(".layout-right-aboutme").hide();
    $(".layout-right-2d_art").show();
    $(".layout-right-3d_projects").hide();
    $(".layout-right-misc_pages").hide();
    $(".layout-right-credits").hide();
  });
 // ############################################
  $("#button-3d_projects").click(function () {
    $(".layout-right-aboutme").hide();
    $(".layout-right-2d_art").hide();
    $(".layout-right-3d_projects").show();
    $(".layout-right-misc_pages").hide();
    $(".layout-right-credits").hide();
  });
 // ############################################
  $("#button-misc_pages").click(function () {
    $(".layout-right-aboutme").hide();
    $(".layout-right-2d_art").hide();
    $(".layout-right-3d_projects").hide();
    $(".layout-right-misc_pages").show();
    $(".layout-right-credits").hide();
  });
// ############################################
  $("#button-credits").click(function () {
    $(".layout-right-aboutme").hide();
    $(".layout-right-2d_art").hide();
    $(".layout-right-3d_projects").hide();
    $(".layout-right-misc_pages").hide();
    $(".layout-right-credits").show();
  });
 // ############################################
  $("#button-enterpage").click(function () {
    const fadeout = [
      { opacity: "1", easing: "ease-in-out" }, 
      { opacity: "0" }
    ];
    const fadeoutTiming = {
      duration: 500, /*500 ms*/
      iterations: 1,
      fill: 'forwards'
    }
    const landingpage = document.querySelector('.landingpage');
    landingpage.animate(fadeout, fadeoutTiming);
    //play bg music and fade out
    bg_music.autoplay = true;
    bg_music.loop = true;
    bg_music.volume = 0.5;
    bg_music.play();
    $(".landingpage").hide(500);
  });
 // ############################################
  $("#img-hello_transparent").click(function () {
    const snd_squeak_copy = snd_squeak.cloneNode(); //copies the sound so it can overlap
    snd_squeak_copy.play();
    // ###########squish uwu ################
    const squish = [
      { transform: "scaleY(100%)", easing: "ease-in-out" }, 
      { transform: "scaleY(95%)", easing: "ease-in-out" },
      { transform: "scaleY(100%)", easing: "ease-in-out" }
    ];
    const squishTiming = {
      duration: 100, /*500 ms*/
      iterations: 1,
      fill: 'forwards'
    }
    const img_hello = document.querySelector('#img-hello_transparent');
    img_hello.animate(squish, squishTiming);
    });
 // ############################################
    $("#tobyfox").click(function () {
      const snd_bark_copy = snd_bark.cloneNode(); //copies the sound so it can overlap
      snd_bark_copy.play();
      });
  
});

/*##########################################################*/
