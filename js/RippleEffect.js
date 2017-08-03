(function (window, $) {

    $(function () {
        // Check if 
        $('.button a, .ripple').on('mousedown', function (event) {

            // Just your basics variables
            var $div = $('<div/>'),
                btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;

            // Add class ripple-effect to the div
            $div.addClass('ripple-effect');
            var $ripple = $(".ripple-effect");

            // Makes sure that the ripple effect wont get too dark caused by too many effect overlapping
            if ($ripple.length >= 3) {
                $(".ripple-effect:first").remove();
            };

            // Set needed style properties 
            $div
                .css({
                    top: yPos - (50 / 2),
                    left: xPos - (50 / 2),
                    background: $(this).data("ripple-color")
                })

                //Place div under the element
                .appendTo($(this));
        });

        $('.button a, .ripple, .ripple-effect').on('mouseup mouseout', function (event) {

            var $ripple = $(".ripple-effect");
            $ripple.delay(300).fadeOut(300);

            setTimeout(function () {
                $ripple.remove();
            }, 1000);
        });
    });

})(window, jQuery);
