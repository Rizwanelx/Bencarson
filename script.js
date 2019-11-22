$(window).scroll(function() {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 86) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});



var modal = document.getElementById("navModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var cross = document.getElementsByTagName('span')
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}