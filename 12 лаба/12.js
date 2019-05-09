jQuery(document).ready(function($) {
$(".text").hide();
$(".AllHead li:first").addClass("active");
    $(".AllHead li").click(function(event) {
        $(".AllHead li").removeClass("active");
        $(this).addClass("active");
        $(".text").hide();
        var selectHead = $(this).find("a").attr("href");
        $(selectHead).fadeIn();
        $(".block").css("display", "none");
    });
    $(function () {
        $(".smallHead").click(function() {
            $(".block").slideToggle();
        });   
    });
});