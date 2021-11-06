// Final Term's entire source code!

// Names for DOM Manipulation
const game_window = document.getElementById("game-window");

// Sounds 
const bell_sound = document.getElementById("bell");

// In-page styling
$("#game-window").hide();
$("#inspiration").hide();
$("#menu").hide();

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

// Menu button functions

let is_menu_disabled = false;
let option = "";

function findMenuOption () { // Find options clicked by the user
  if (option === "" || option === undefined || option === null) { // Check for null and empty values, undefined values are a pain in the ass!!
    return "none";
  }

  else if (option === "story") {
    return "story";
  }

  else if (option === "files") {
    return "files";
  }

  else {
    return "credits";
  }
}

$(".menu-button").click(function () {
  if (is_menu_disabled === true) {
    return false;
  }

  else {
    bell_sound.play();

    setTimeout(function () {
      bell_sound.pause();
    }, 1000);
  }
});

createMenuAndIntro();