

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


// Variables to hold Crystal Points Status ( hidden or displayed )
var g_crystal1PointsHidden;
var g_crystal2PointsHidden;
var g_crystal3PointsHidden;
var g_crystal4PointsHidden;


//Players Current Score
var g_current_score;

var g_game_status;

// Game Win/Loss Counts
var g_games_won = 0;
var g_games_lost = 0;

/**
 *  C O N S T A N T S
 */

const TARGET_NUMBER_MIN = 19;
const TARGET_NUMBER_MAX = 120;

const CRYSTAL_POINTS_MIN = 1;
const CRYSTAL_POINTS_MAX = 12;


// Game Status Values
const GAME_OVER_PLAYER_WON = 1;
const GAME_OVER_PLAYER_LOST = 2;
const GAME_IN_PROGRESS = 3;

const PLAYER_WON_MSG_STRING = "YOU WON!!"
const PLAYER_LOST_MSG_STRING = "YOU LOST!!"

/**
 *   F U N C T I O N S
 */



function get_game_status() {

    if (g_current_score == g_targetNumber) {
        return GAME_OVER_PLAYER_WON;
    } else if (g_current_score > g_targetNumber) {
        return GAME_OVER_PLAYER_LOST;
    } else {
        return GAME_IN_PROGRESS;
    }
}

function restart_game() {
    
    if (g_game_status != GAME_IN_PROGRESS) {

        //Restart the Game
        module_init();
    }
}

/**
 * Module Init Function
 * 
 * Initializes module variables
 */
function module_init() {

    g_game_status = GAME_IN_PROGRESS;

    // Generate the (random) number that the user need to get to
    g_targetNumber = Math.floor((Math.random() * (TARGET_NUMBER_MAX - TARGET_NUMBER_MIN + 1)) + TARGET_NUMBER_MIN);

    // Display the random number on the page
    $("#target-score-tag").text(g_targetNumber);

    //Generate the (random) number for the four crystals
    g_crystal1Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX - CRYSTAL_POINTS_MIN + 1)) + CRYSTAL_POINTS_MIN);
    g_crystal2Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX - CRYSTAL_POINTS_MIN + 1)) + CRYSTAL_POINTS_MIN);
    g_crystal3Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX - CRYSTAL_POINTS_MIN + 1)) + CRYSTAL_POINTS_MIN);
    g_crystal4Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX - CRYSTAL_POINTS_MIN + 1)) + CRYSTAL_POINTS_MIN);

    $("#crystal-1-tag").html("<p class=\"text-warning\"> <small>Click To Show Points</small></p>");
    $("#crystal-2-tag").html("<p class=\"text-warning\"> <small>Click To Show Points</small></p>");
    $("#crystal-3-tag").html("<p class=\"text-warning\"> <small>Click To Show Points</small></p>");
    $("#crystal-4-tag").html("<p class=\"text-warning\"> <small>Click To Show Points</small></p>");


    // Init the current score and update on the web page
    g_current_score = 0;
    $("#current-score-tag").text(g_current_score);

    // initially Crystals points are hidden
    g_crystal1PointsHidden = true;
    g_crystal2PointsHidden = true;
    g_crystal3PointsHidden = true;
    g_crystal4PointsHidden = true;


    //update the Scoreboard - win and loss counts
    $("#overall-wins-count").text(g_games_won);
    $("#overall-loses-count").text(g_games_lost);


}



function m_crystal_click_handler(buttonClickEvent) {


    //    //update the current score on the Web Page
    //    $("#current-score-tag").text(g_targetNumber);
    

    // currentTarget in the event object refers to the Current DOM Element
    // buttonClickEvent.currentTarget is EQUIVALENT to "this"
    var crystalId = $(buttonClickEvent.currentTarget).attr("data-crystal-id");
    var crystalCSSId = "#crystal-" + crystalId + "-tag";

    switch (crystalId) {

        case "1":
            // if crystal 1 points are hidden then show the points, otherwise they are already being shown
            if (g_crystal1PointsHidden === true) {
                g_crystal1PointsHidden = false;
                $(crystalCSSId).html("<h1 class=\"display-3\">" + g_crystal1Points + "</h1>");
            }
            g_current_score += g_crystal1Points;
            break;

        case "2":
            // if crystal 2 points are hidden then show the points, otherwise they are already being shown
            if (g_crystal2PointsHidden === true) {
                g_crystal2PointsHidden = false;
                $(crystalCSSId).html("<h1 class=\"display-3\">" + g_crystal2Points + "</h1>");
            }
            g_current_score += g_crystal2Points;
            break;

        case "3":
            // if crystal 3 points are hidden then show the points, otherwise they are already being shown
            if (g_crystal3PointsHidden === true) {
                g_crystal3PointsHidden = false;
                $(crystalCSSId).html("<h1 class=\"display-3\">" + g_crystal3Points + "</h1>");
            }
            g_current_score += g_crystal3Points;
            break;

        case "4":
            // if crystal 4 points are hidden then show the points, otherwise they are already being shown
            if (g_crystal4PointsHidden === true) {
                g_crystal4PointsHidden = false;
                $(crystalCSSId).html("<h1 class=\"display-3\">" + g_crystal4Points + "</h1>");
            }
            g_current_score += g_crystal4Points;
            break;

        default:
            console.log("Invalid Key Pressed")
            break;

    }


    // returns three possible values 
    g_game_status = get_game_status();

    // is Game Over ?
    if (g_game_status != GAME_IN_PROGRESS) {

        // Game is Over - update the Player win/loss count
        if (g_game_status == GAME_OVER_PLAYER_WON) {
            g_games_won++;
            $("#current-score-tag").text(PLAYER_WON_MSG_STRING);
        } else if (g_game_status == GAME_OVER_PLAYER_LOST) {
            g_games_lost++;
            $("#current-score-tag").text(PLAYER_LOST_MSG_STRING);
        } else {
            console.log("Invalid Game status !!")
        }

        setTimeout(restart_game, 1000);

    } else {
        // Game in Progress - update the current score on the Web Page
        $("#current-score-tag").text(g_current_score);
    }



}




/**
 *  Let the page load, before we start executing the javascript/jQuery Code
 */
$(document).ready(function () {

    //Initialize module data
    module_init();


    $(".crystal").on("click", m_crystal_click_handler)


});

