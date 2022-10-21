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

/* let volume = document.querySelector("#volume-control");
	volume.addEventListener("change", function(e) {
	bg_music.volume = e.currentTarget.value / 100;
	}) */
//################## sound effects ########################################
const snd_squeak = new Audio("./assets/personal/sound/squeak.mp3");
const snd_bark = new Audio("./assets/personal/sound/snd_pombark.wav");
const snd_heart = new Audio("./assets/personal/sound/snd_pombark.wav");
const bg_music = new Audio("./assets/personal/sound/noelle_ferriswheel.ogg");
const heartNotes = [
  "./assets/personal/sound/mus_note1.wav",
  "./assets/personal/sound/mus_note2.wav",
  "./assets/personal/sound/mus_note3.wav",
  "./assets/personal/sound/mus_note4.wav",
  "./assets/personal/sound/mus_note5.wav",
  "./assets/personal/sound/mus_note6.wav",
];
// $("#tobyfox").click(function () {
//   console.log("bark clicked!")
//   const snd_bark_copy = snd_bark.cloneNode(); //copies the sound so it can overlap
//   snd_bark.play();
// });

// $("#heartnote").click(function () {
//   console.log("heart clicked!")
//   const heartNotes = ["./assets/personal/sound/mus_note1.wav", "./assets/personal/sound/mus_note2.wav", "./assets/personal/sound/mus_note3.wav", "./assets/personal/sound/mus_note4.wav", "./assets/personal/sound/mus_note5.wav", "./assets/personal/sound/mus_note6.wav"];
//   snd_randomnote = new Audio(heartNotes[Math.floor(Math.random() * heartNotes.length)]);
//   let snd_randomnote_copy = snd_randomnote.cloneNode(); //copies the sound so it can overlap
//   snd_randomnote_copy.play();
// });

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
  const snd_bark_copy = snd_bark.cloneNode(); //copies the sound so it can overlap
  snd_bark_copy.play();
}
function clickheart() {
  console.log("heart clicked!");
  
  // console.log(`heartnotes length: ${heartNotes.length}`)
  let snd_randomnote = new Audio(heartNotes[Math.floor(Math.random() * heartNotes.length)]);
  
  let snd_randomnote_copy = snd_randomnote.cloneNode(); //copies the sound so it can overlap
  snd_randomnote_copy.play();
  console.log(`rdm number: ${Math.floor(Math.random() * heartNotes.length)}`)
}
//################## adjust volume ########################################
let volume = document.querySelector("#volume-control");
function volumeUpdate(e) {
  bg_music.volume = e / 100;
  // console.log(bg_music.volume);
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
    const fadeout = [{ opacity: "1", easing: "ease-in-out" }, { opacity: "0" }];
    const fadeoutTiming = {
      duration: 500 /*500 ms*/,
      iterations: 1,
      fill: "forwards",
    };
    const landingpage = document.querySelector(".landingpage");
    landingpage.animate(fadeout, fadeoutTiming);
    //play bg music and fade out
    bg_music.volume = 0;

    //slowly ramps up volume
    const rampVolume = async () => {
      let increase = 0.01;
      await sleep(300);
      bg_music.play();
      for (let step = 0; step < 50; step++) {
        bg_music.volume = increase;
        increase = increase + 0.01;
        await sleep(50);
        // console.log(bg_music.volume);
      }
    };
    rampVolume();
    bg_music.autoplay = true;
    bg_music.loop = true;

    $(".landingpage").hide(500);
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
