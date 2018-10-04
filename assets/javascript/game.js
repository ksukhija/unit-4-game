

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

 
 
 /**
  *  C O N S T A N T S
  */
 
 const TARGET_NUMBER_MIN =  19;
 const TARGET_NUMBER_MAX =  120;

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
    g_targetNumber = Math.floor((Math.random() * (TARGET_NUMBER_MAX-TARGET_NUMBER_MIN+1)) + TARGET_NUMBER_MIN);
        
    //Generate the (random) number for the four crystals
    g_crystal1Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX-CRYSTAL_POINTS_MIN+1)) + CRYSTAL_POINTS_MIN);
    g_crystal2Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX-CRYSTAL_POINTS_MIN+1)) + CRYSTAL_POINTS_MIN);
    g_crystal3Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX-CRYSTAL_POINTS_MIN+1)) + CRYSTAL_POINTS_MIN);
    g_crystal4Points = Math.floor((Math.random() * (CRYSTAL_POINTS_MAX-CRYSTAL_POINTS_MIN+1)) + CRYSTAL_POINTS_MIN);
  }



  function m_crystal_click_handler (event) {
      var id = $(event).attr("id");
      console.log(id);
  }



  /**
   *  Let the page load, before we start executing the javascript/jQuery Code
   */
    $(document).ready(function() {

        //Initialize module data
        module_init();
      
    
        // Display the random number on the page
        $("#target-score-tag").text(g_targetNumber);


        $(".crystal").on("click", m_crystal_click_handler)
       
  
      }); 

