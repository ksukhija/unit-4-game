

/**
 *  G L O B A L  V A R I B L E S
 */

// This is the number that is generated randomly at the start of the game and the user is to get to it.
var g_targetNumber;

// Crystals points - random numbes generated at the start of the game
var g_crystal1Points;
var g_crystal2Points;
var g_crystal3Points;
var g_crystal4Points;

//Players Current Score
var g_current_score;

/**
 *  C O N S T A N T S
 */

const TARGET_NUMBER_MIN = 19;
const TARGET_NUMBER_MAX = 120;

const CRYSTAL_POINTS_MIN = 1;
const CRYSTAL_POINTS_MAX = 12;


/**
 *   F U N C T I O N S
 */






/**
 * Module Init Function
 * 
 * Initializes module variables
 */
function module_init() {

  console.log("at module INit")

  // Generate the (random) number that the user need to get to
  g_targetNumber = Math.floor((Math.random() * (TARGET_NUMBER_MAX - TARGET_NUMBER_MIN + 1)) + TARGET_NUMBER_MIN);

  //Generate the (random) number for the four crystals
  g_crystal1Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX - CRYSTAL_POINTS_MIN + 1)) + CRYSTAL_POINTS_MIN);
  g_crystal2Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX - CRYSTAL_POINTS_MIN + 1)) + CRYSTAL_POINTS_MIN);
  g_crystal3Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX - CRYSTAL_POINTS_MIN + 1)) + CRYSTAL_POINTS_MIN);
  g_crystal4Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX - CRYSTAL_POINTS_MIN + 1)) + CRYSTAL_POINTS_MIN);

  g_current_score = 0;
}



function m_crystal_click_handler(buttonClickEvent) {

   //update the current score on the Web Page
   $("#current-score-tag").empty(); 

  // currentTarget in the event object refers to the Current DOM Element
  // buttonClickEvent.currentTarget is EQUIVALENT to "this"
  var crystalId = $(buttonClickEvent.currentTarget).attr("data-crystal-id");
  var crystalCSSId = "#crystal-" + crystalId + "-tag";

  switch (crystalId) {

    case "1":
      $(crystalCSSId).html("<h1 class=\"display-3\">" + g_crystal1Points + "</h1>");
      g_current_score += g_crystal1Points;
      break;

    case "2":
      $(crystalCSSId).html("<h1 class=\"display-3\">" + g_crystal2Points + "</h1>");
      g_current_score += g_crystal2Points;
      break;

    case "3":
      $(crystalCSSId).html("<h1 class=\"display-3\">" + g_crystal3Points + "</h1>");
      g_current_score += g_crystal3Points;
      break;

    case "4":
      $(crystalCSSId).html("<h1 class=\"display-3\">" + g_crystal4Points + "</h1>");
      g_current_score += g_crystal4Points;
      break;

    default:
      console.log("Invalid Key Pressed")
      break;

  }
  
 

}




/**
 *  Let the page load, before we start executing the javascript/jQuery Code
 */
$(document).ready(function () {

  //Initialize module data
  module_init();


  // Display the random number on the page
  $("#target-score-tag").text(g_targetNumber);


  $(".crystal").on("click", m_crystal_click_handler)


});

