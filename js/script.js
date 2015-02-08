$(function() {
    var a = $("form"),
        b = $('input[type="text"]'),
        c = $(".error"),
        d = $("ul"),
        e = $("#new"),
        f = $("print"),
        g = $("#save"),
        h = $("#load"),
        i = [];
        $( "#content" ).delegate( "*", "focus blur", function() {
  var elem = $( this );
  setTimeout(function() {
    elem.toggleClass( "focused", elem.is( ":focus" ) );
  }, 0 );
});
    f.click(function() {
        a.hide(), window.print(), a.show()
    }), a.submit(function(a) {
        a.preventDefault();
        var e = b.val();
        "" != e && null != e ? (i.push(e), d.append($("<li/>").html(e)), b.val(""), c.empty()) : c.html("Please enter a list item into the input box")
    }), e.click(function() {
        i = [], d.empty()
    }), g.click(function() {
        localStorage.setItem("items", JSON.stringify(i))
    }), h.click(function() {
        var a = localStorage.getItem("items");
        console.log(a), JSON.parse(a).forEach(function(a) {
            i.push(a), d.append($("<li/>").html(a))
        });
    });
    $(document).keydown(function() {
    if (event.which == 13) {
        submit();
    } else if (event.which == 82) {
      if (b.is(':focus')) {
      }
      else {
        i = [], d.empty()
      }
    } else if (event.which == 27) {
        $(b).blur();
    } else if (event.which == 16) {} else if (event.which == 225) {} else if (event.which == 17) {} else if (event.which == 18) {} else if (event.which == 93) {} else if (event.which == 37) {} else if (event.which == 38) {} else if (event.which == 39) {} else if (event.which == 40) {} else if (event.which == 80) {
        printest();
    }
    else {
        $(b).focus();
    }
});
});
