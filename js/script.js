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
        })
    })
});