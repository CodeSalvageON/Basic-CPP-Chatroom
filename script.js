// Final Term's entire source code!
// Prepare for spaghetti code down below.

// Names for DOM Manipulation
const game_window = document.getElementById("game-window");
const online_text = document.getElementById("online-text");
const local_receptor = document.getElementById("local-receptor");

// Sounds 
const bell_sound = document.getElementById("bell");
const tone_sound = document.getElementById("tone");

// In-page styling
$("#game-window").hide();
$("#inspiration").hide();
$("#menu").hide();
$("#online").hide();
$("#choose-path").hide();
$("#choose-difficulty").hide();
$("#set-name").hide();

function createMenuAndIntro () {  // Create the starter menu
  setTimeout(function () {
    $("#game-window").show();
    game_window.style.backgroundColor = "white";

    setTimeout(function () {
      game_window.style.backgroundColor = "#292828";
    }, 200);
  }, 500);

  setTimeout(function () {
    $("#inspiration").slideDown(1000);

    setTimeout(function () {
      $("#inspiration").slideUp(1000);

      setTimeout(function () {
        $("#menu").slideDown(); // For some reason, images and divs do not work with this...
      }, 1000);
    }, 3000);
  }, 1000);
}

// Storage and saved files 

const ambition_stored = localStorage.getItem("finalterm_ambition");
const school_location_stored = localStorage.getItem("finalterm_school");

let current_ambition = ambition_stored;
let current_school_location_stored = school_location_stored;

// Menu button functions

let is_menu_disabled = false;
let is_ambition_disabled = false;
let is_difficulty_disabled = false;

let option = "";
let ambition = "";
let difficulty = "";

function findMenuOption () { // Find options clicked by the user
  if (option === "" || option === undefined || option === null) { // Check for null and empty values, undefined values are a pain in the ass!!
    return "story";
  }

  else if (option === "story") {
    return "story";
  }

  else if (option === "files") {
    return "files";
  }

  else if (option === "online") {
    return "online";
  }

  else {
    return "credits";
  }
}

$("#story-mode").click(function () {
  option = "story";
});

$("#online-mode").click(function () {
  option = "online";
});

$(".menu-button").click(function () { // Detect when a button from the menu has been pressed.
  if (is_menu_disabled === true) { // Check if user has already pressed a button
    return false;
  }

  else {
    tone_sound.play(); // This used to play a really annoying bell sound, I'm glad that is gone...
    is_menu_disabled = true;

    if (option === "story") {
      $("#menu").fadeOut(3000);

      setTimeout(function () {
        $("#choose-path").fadeIn(3000);
      }, 3000);
    }

    else if (option === "online") {
      $("#menu").fadeOut(3000);

      setTimeout(function () {
        $("#online").fadeIn(3000);
      }, 3000);
    }
  }
});

$("#blind-ambition").click(function () {
  ambition = "blind";
});

$("#party-person").click(function () {
  ambition = "party";
});

$("#outcast").click(function () {
  ambition = "outcast";
});

$("#hobby").click(function () {
  ambition = "hobby";
});

$(".ambition-button").click(function () {
  if (is_ambition_disabled === true) {
    return false;
  }

  else {
    tone_sound.play(); // I am SO GLAD that the bell sound is gone!
    is_ambition_disabled = true;

    if (ambition === "blind") {
      localStorage.setItem("finalterm_ambition", "blind");
      current_ambition = "blind";
    }

    else if (ambition === "party") {
      localStorage.setItem("finalterm_ambition", "party");
      current_ambition = "party";
    }

    else if (ambition === "outcast") {
      localStorage.setItem("finalterm_ambition", "outcast");
      current_ambition = "outcast";
    }

    else if (ambition === "hobby") {
      localStorage.setItem("finalterm_ambition", "hobby");
      current_ambition = "hobby";
    }

    $("#choose-path").fadeOut(3000);

    setTimeout(function () {
      $("#choose-difficulty").fadeIn(3000);
    }, 3000);
  }
});

$("#rural-school").click(function () {
  localStorage.setItem("finalterm_school", "easy");
  current_school_location_stored = "easy";
});

$("#suburban-school").click(function () {
  localStorage.setItem("finalterm_school", "medium");
  current_school_location_stored = "medium";
});

$("#urban-school").click(function () {
  localStorage.setItem("finalterm_school", "hard");
  current_school_location_stored = "hard";
});

$(".difficulty-button").click(function () {
  if (is_difficulty_disabled === true) {
    return false;
  }

  else {
    tone_sound.play();
    is_difficulty_disabled = true;

    $("#choose-difficulty").fadeOut(3000);

    setTimeout(function () {
      $("#set-name").fadeIn(3000);
    }, 3000);
  }
});

createMenuAndIntro();

$("#go-back-from-online").click(function () {
  $("#online").fadeOut(3000);

  setTimeout(function () {
    $("#menu").fadeIn(3000);
    is_menu_disabled = false;
  }, 3000);
});

// Online Mode 

const is_online = navigator.onLine;
var _0x5964=["\x64\x65\x63\x33\x6E\x74\x52\x33\x63\x65\x70\x74\x6F\x72","\x67\x65\x74\x49\x74\x65\x6D"];const localReceptor=localStorage[_0x5964[1]](_0x5964[0]); // Local receptor
let currentReceptor = localReceptor; // Get the user's current local receptor

thruCheckReceptor();  // Check receptor on page load

function checkReceptor () { // Check if user has a local receptor
  if (localReceptor === null || localReceptor === undefined || localReceptor === "") {
    return "none";
  }

  else {
    return localReceptor;
  }
}

function thruCheckReceptor () {
  if (checkReceptor() === "none") {
    createReceptor();
    local_receptor.innerText = "Local Receptor: " + currentReceptor;
  }

  else {
    local_receptor.innerText = "Local Receptor: " + currentReceptor;
  }
}

function createReceptor () { // It's in the function name.
  const rand_num = Math.floor(Math.random() * 4);
  const rand = Math.random().toString(16).substr(2, 8);
  
  let rand_string = "";

  if (rand_num === 0) {
    rand_string = "park";
  }

  else if (rand_num === 1) {
    rand_string = "ecosphere";
  }

  else if (rand_num === 2) {
    rand_string = "exurb";
  }

  else {
    rand_string = "rush";
  }

  currentReceptor = rand + rand_string + rand_num;
  var _0xe37b=["\x64\x65\x63\x33\x6E\x74\x52\x33\x63\x65\x70\x74\x6F\x72","\x73\x65\x74\x49\x74\x65\x6D"];localStorage[_0xe37b[1]](_0xe37b[0],currentReceptor);
}

$("#change-receptor").click(function () { // Might remove this JQuery dependency in the future
  createReceptor();
  local_receptor.innerText = "Local Receptor: " + currentReceptor;
});

setInterval(function () { // Update the online status every now and then (and the current local receptor)
  if (online_text.innerText.includes("ONLINE")) {
    online_text.innerText.replace("ONLINE", "");
  }

  else if (online_text.innerText.includes("OFFLINE")) {
    online_text.innerText.replace("OFFLINE", "");
  }

  if (is_online === true) {
    online_text.innerText = "Online?: ONLINE";
  }

  else {
    online_text.innerText = "Online?: OFFLINE";
  }

  local_receptor.innerText = "Local Receptor: " + currentReceptor;
}, 5000);