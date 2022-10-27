const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
//########################################################################
function copyToClipBoard() {
  const element = document.querySelector(".discord_copy");

  const storage = document.createElement("textarea");
  storage.value = element.textContent;
  element.textContent = "copied!";
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
  setTimeout(function () {
    element.textContent = storage.value;
  }, 2000);
}
//################## sound effects ########################################
const snd_squeak = new Audio("./assets/personal/sound/snd_movemenu.wav");
const snd_bark = new Audio("./assets/personal/sound/snd_pombark.wav");
const snd_heart = new Audio("./assets/personal/sound/snd_pombark.wav");
const snd_sparkle = new Audio("./assets/personal/sound/mus_sfx_eyeflash.wav");
const bg_music = new Audio("./assets/personal/sound/noelle_ferriswheel.ogg");
const heartNotes = [
  "./assets/personal/sound/mus_note1.wav",
  "./assets/personal/sound/mus_note2.wav",
  "./assets/personal/sound/mus_note3.wav",
  "./assets/personal/sound/mus_note4.wav",
  "./assets/personal/sound/mus_note5.wav",
  "./assets/personal/sound/mus_note6.wav",
];
// ###########squish uwu ################
const squish = [
  { transform: "scaleY(100%)", easing: "ease-in-out" },
  { transform: "scaleY(95%)", easing: "ease-in-out" },
  { transform: "scaleY(100%)", easing: "ease-in-out" },
];
const squishTiming = {
  duration: 100 /*500 ms*/,
  iterations: 1,
  fill: "forwards",
};

function clicksqueak() {
  const snd_squeak_copy = snd_squeak.cloneNode(); //copies the sound so it can overlap
  snd_squeak_copy.play();

  const img_hello = document.querySelector("#img-hello_transparent");
  img_hello.animate(squish, squishTiming);
}

function clickbark() {
  const snd_bark_copy = snd_bark.cloneNode();
  snd_bark_copy.play();
}

function clicksparkle() {
  const snd_sparkle_copy = snd_sparkle.cloneNode();
  snd_sparkle_copy.volume = 0.5;
  snd_sparkle_copy.play();
}

function clickheart() {
  console.log("heart clicked!");
  
  let snd_randomnote = new Audio(heartNotes[Math.floor(Math.random() * heartNotes.length)]);
  let snd_randomnote_copy = snd_randomnote.cloneNode();
  snd_randomnote_copy.play();
}

//################## adjust volume ########################################
let volume = document.querySelector("#volume-control");
function volumeUpdate(e) {
  bg_music.volume = e / 100;
  // console.log(bg_music.volume);
}
let isPlaying = true;

const togglebutton = document.querySelector('#togglebutton');
function togglePause() {
  if (isPlaying) {
    bg_music.pause();
    isPlaying = false;
    togglebutton.classList.replace("fa-pause","fa-play");
  } else {
    bg_music.play();
    isPlaying = true;
    togglebutton.classList.replace("fa-play","fa-pause");
  }
}

// ############ stuff for volume slider styling #######################
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
// checks if device is phone, changes scroll behavior accordingly
$(document).ready(function () {
  var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
  console.log(`ismobile = ${isMobile}`)
  
  if ((isMobile) || document.documentElement.clientWidth < 700) {
    $("#button-aboutme, #button-2d_art, #button-3d_projects, #button-misc_pages, #button-credits, #button-deerbot").click(function () {
      window.location.href='#layout-right-side';
    });
  } else {
    $("#button-aboutme, #button-2d_art, #button-3d_projects, #button-misc_pages, #button-credits, #button-deerbot").click(function () {
      // console.log("clicked while isnt mobile")
      $("body").scrollTop(0);
    });
  }


//########################################################################
  $("#button-aboutme").click(function () {
    $(".layout-right-2d_art, .layout-right-3d_projects, .layout-right-misc_pages, .layout-right-credits, .layout-right-deerbot").fadeOut(200);
    $(".layout-right-aboutme").delay(200).fadeIn(200);
  });
  // ------------------------------------------------------------
  $("#button-2d_art").click(function () {
    $(".layout-right-aboutme, .layout-right-3d_projects, .layout-right-misc_pages, .layout-right-credits, .layout-right-deerbot").fadeOut(200);
    $(".layout-right-2d_art").delay(200).fadeIn(200);
  });
  // ------------------------------------------------------------
  $("#button-3d_projects").click(function () {
    $(".layout-right-aboutme, .layout-right-2d_art, .layout-right-misc_pages, .layout-right-credits, .layout-right-deerbot").fadeOut(200);
    $(".layout-right-3d_projects").delay(200).fadeIn(200);
  });
  // ------------------------------------------------------------
  $("#button-misc_pages").click(function () {
    $(".layout-right-aboutme, .layout-right-2d_art, .layout-right-3d_projects, .layout-right-credits, .layout-right-deerbot").fadeOut(200);
    $(".layout-right-misc_pages").delay(200).fadeIn(200);
  });
  // ------------------------------------------------------------
  $("#button-credits").click(function () {
    $(".layout-right-aboutme, .layout-right-2d_art, .layout-right-3d_projects, .layout-right-misc_pages, .layout-right-deerbot").fadeOut(200);
    $(".layout-right-credits").delay(200).fadeIn(200);
  });
  // ------------------------------------------------------------
  $("#button-deerbot").click(function () {
    $(".layout-right-aboutme, .layout-right-2d_art, .layout-right-3d_projects, .layout-right-misc_pages, .layout-right-credits").fadeOut(200);
    $(".layout-right-deerbot").delay(200).fadeIn(200);
  });
  // ------------------------------------------------------------
  $("#button-deerbot-invite").click(function () {
    window.open("https://discordapp.com/oauth2/authorize?&client_id=673945530019217430&scope=bot&permissions=67620032", '_blank');
  });
  // ------------------------------------------------------------
  $("#button-enterpage").click(function () {
    const fadeout = [{ opacity: "1", easing: "ease-in-out" }, { opacity: "0" }];
    const fadeoutTiming = {
      duration: 500 /*500 ms*/,
      iterations: 1,
      fill: "forwards",
    };
    const landingpage = document.querySelector(".landingpage");
    landingpage.animate(fadeout, fadeoutTiming);
    
    //slowly ramps up volume
    bg_music.volume = 0;
    const rampVolume = async () => {
      await sleep(300);
      bg_music.play();
      for (let step = 0; step < 50; step++) {
        bg_music.volume = (bg_music.volume + 0.01).toFixed(2); // .tofixed rounds it to 2 decimals
        await sleep(50);
        console.log(bg_music.volume);
      }
    };
    rampVolume();
    bg_music.autoplay = true;
    bg_music.loop = true;
    $(".landingpage").hide(500);
//#####
  });
  
  // ############################################
  // $("#img-hello_transparent").click(function () {
  //   const snd_squeak_copy = snd_squeak.cloneNode(); //copies the sound so it can overlap
  //   snd_squeak_copy.play();
  //   // ###########squish uwu ################
  //   const squish = [
  //     { transform: "scaleY(100%)", easing: "ease-in-out" },
  //     { transform: "scaleY(95%)", easing: "ease-in-out" },
  //     { transform: "scaleY(100%)", easing: "ease-in-out" },
  //   ];
  //   const squishTiming = {
  //     duration: 100 /*500 ms*/,
  //     iterations: 1,
  //     fill: "forwards",
  //   };
  //   const img_hello = document.querySelector("#img-hello_transparent");
  //   img_hello.animate(squish, squishTiming);
  // });
  // ############################################
  
});

/*##########################################################*/
// const drawings = $('gallery-img-2d');
// console.log(`drawings: ${drawings}`);