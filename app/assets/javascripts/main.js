/**
 * Main.js
 */

/**
 * Listed friends.
 *
 * Builds a linked list (or a single) friend that is on the same baby step as
 * is being displayed.
 *
 * @param  {object} friends The friends object from `baby-steps.json`.
 * @param  {integer} totalCount The total number of friends on that step.
 * @param  {integer} displayCount The number of friends to display.
 * @return {string} The HTML to display the list.
 */
var listedFriends = function( friends, totalCount, displayCount ) {

  // declare an empty str var to add onto later
  var str = "";

  // loop through each friend we're displaying
  for ( var i = 0; i < displayCount; i++ ) {

    // build a link to their name
    str += "<a href='#'>" + friends[i].firstName + " " + friends[i].lastName + "</a>";

    // if we're only displaying two friends total, separate their names with 'and'
    if ( i === 0 && totalCount === 2 ) {
      str += " and ";
    }

    // if there are more than two being displayed total, separate their names with commas
    if ( displayCount === 2 && totalCount > 2 ) {
     str += ", ";
    }
  }

  // return the string
  return str;

};

/**
 * Hidden friends.
 *
 * If there are additional friends to the ones who's names are being displayed on the
 * current baby step, this functions builds a string that displays that count.
 *
 * @param  {integer} The number of additional "hidden" friends.
 * @return {string} The string that displays the number of hidden friends.
 */
var hiddenFriends = function( count ) {

  // declare an empty str var to add onto later
  var str = "";

  // build a string with the number of hidden friends
  if ( count === 1 ) {
    str += "and 1 other friend is";
  } else {
    str += "and " + count + " other friends are";
  }

  // return the string
  return str;

};

/**
 * Friends message.
 *
 * Displays a message telling the user how many of their friends are on the baby
 * step they're currently viewing.
 *
 * @param  {object} friends The friends object from `baby-steps.json`.
 * @param  {integer} count The number of friends that are on the current step.
 * @param  {integer} step The current Baby Step.
 * @return {string} The friends message.
 */
var friendsMessage = function( friends, count, step ) {

  // declare an empty str var to add onto later
  var str = "";

  // build a the message based on the number of friends on that step
  if ( count === 1 ) {
    str += listedFriends( friends, count, 1 ) + " is also in Baby Step " + step;
  } else if ( count === 2 ) {
    str += listedFriends( friends, count, 2 ) + " are also in Baby Step " + step;
  } else {
    str += listedFriends( friends, count, 2 ) + " " + hiddenFriends( count - 2 ) + " also in Baby Step " + step;
  }

  // return the string
  return str;

};

/**
 * Switch step.
 *
 * Switches the displayed step.
 *
 * @param  {string} target The selector for the new step to show.
 */
var switchStep = function( target ) {

  // remove .is-active from the current link and step
  $( ".nav a, .step" ).removeClass( "is-active" );

  // remove the blue icon for the current step
  $( ".step-nav-icon.icon-blue" ).removeClass( "icon-blue" );

  // show the new step
  $( target + '-section' ).addClass( "is-active" );

  // add .is-active to the corresponding nav menu
  $( "[href=" + target + "]" ).addClass( "is-active" );

  // add .icon-blue to the new active nav item icon
  $( "[href=" + target + "]" ).find( ".step-nav-icon" ).addClass( "icon-blue" );

}

/**
 * document.ready
 */
$( function() {

  /**
   * If the window loads with a location hash, show that step.
   */
  if ( window.location.hash ) {
    switchStep( window.location.hash );
  }

  /**
   * Switch baby steps when a step navigation link is clicked.
   */
  $( ".nav a" ).click( function( e ) {

    // cache $( this )
    var $this = $( this );

    // switch the step
    switchStep( $this.attr( "href" ) )

    // set the window's location hash to the new step
    window.location.hash = $this.attr('href');

    // kill the default click event
    e.preventDefault();

  } );

  /**
   * Display the number of friends that are on the current baby step.
   */
  $.getJSON( "assets/javascripts/baby-steps.json", function( data ) {

    // loop through each step on the page
    $( ".step" ).each( function() {

      // cache $( this )
      var $this = $( this );

      // find the friends that are currently on this step
      var friends = $.grep( data.friends, function( element ) {
        return element.babyStep == $this.attr( "data-step" );
      } );

      // if there are any friends on the current step
      if ( friends.length > 0 ) {

        // sort those friends alphabetically by their last name
        friends.sort( function( a, b ) {
          if ( a.lastName < b.lastName ) {
            return -1;
          }

          if ( a.lastName > b.lastName ) {
            return 1;
          }

          if ( a.firstName < b.firstName ) {
            return -1;
          }

          if ( a.firstName > b.firstName ) {
            return 1;
          }

          return 0
        } );

        // display the message
        $this.append( "<p class='step-friends'>" + friendsMessage( friends, friends.length, $this.attr( "data-step" ) ) + "</p>" );

      }

    } );

  } );

} );