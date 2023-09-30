$(document).ready(function()
{
    //Add class on humberg menu click
    $(".toggle-btn").click(function()
    {
        $(this).toggleClass("active");
        $(".navbar-nav").toggleClass("active");
    })
})