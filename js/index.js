$('#darkModeButton').click(function () {
    $('i').toggleClass('fa-moon');
    $('i').toggleClass('fa-sun');
    $('body').toggleClass('dark');
})
$('.map#1').click(function () {
    $('.fullscreenImg#fs1').toggleClass('disabled');
})
$('.map#2').click(function () {
    $('.fullscreenImg#fs2').toggleClass('disabled');
})
$('.fullscreenImg#fs1').click(function () {
    $('.fullscreenImg#fs1').toggleClass('disabled');
})
$('.fullscreenImg#fs2').click(function () {
    $('.fullscreenImg#fs2').toggleClass('disabled');
})