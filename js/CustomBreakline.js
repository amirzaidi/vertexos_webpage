$(document).ready(function () {
    $("#changelog .content div").children().each(function () {
        $(this).html($(this).html().replace(/[*]/g, "<br>*"));
    });
});
