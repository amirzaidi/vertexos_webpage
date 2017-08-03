(function (window, $) {

    $(function () {

        $('.button a, .ripple').on('click', function (event) {

            var $div = $('<div/>'),
                btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;

            $div.addClass('ripple-effect');
            var $ripple = $(".ripple-effect");

            // Makes sure that the ripple effect wont get too dark caused by too many effect overlapping
            if ($ripple.length >= 3) {
                $(".ripple-effect:first").remove();
            };

            $div
                .css({
                    top: yPos - ($ripple.height() / 2),
                    left: xPos - ($ripple.width() / 2),
                    background: $(this).data("ripple-color")
                })
                .appendTo($(this));

            // Remove ripple effect after 1000 milliseconds
            window.setTimeout(function () {
                $div.remove();
            }, 1000);
        });

    });

})(window, jQuery);
