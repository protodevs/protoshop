$( "#content" ).delegate( "*", "focus blur", function() {
  var elem = $( this );
  setTimeout(function() {
    elem.toggleClass( "focused", elem.is( ":focus" ) );
  }, 0 );
});
function submit() {
  var input = $('input').val();
  if (input !== '') {
  $('ul').append('<li>' + input + '</li>');
  $('input').val('');
  $('h1').hide();
  }
  else {
    $('body').append("<h1 class='error'>Please enter a list item into the input box</h1>");
  }
}
function startnew() {
  if ($('input').is(':focus')) {
  }
  else {
   $('li').remove();
  }
}
$(document).keydown(function() {
  if (event.which == 13) {
    submit();
  }
  else if (event.which == 82) {
    startnew();
  }
    else if (event.which == 27) {
      $('input').blur();
    }
    else if (event.which == 16) {
    }
    else if (event.which == 225) {
    }
    else if (event.which == 17) {
    }
    else if (event.which == 18) {
    }
    else if (event.which == 93) {
    }
    else if (event.which == 37) {
    }
    else if (event.which == 38) {
    }
    else if (event.which == 39) {
    }
    else if (event.which == 40) {
    }
      else {
        $('input').focus();
      }
});
