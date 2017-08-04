(function (window, $) {

    $(function () {


        var $btn = $('.ripple, .button a');
        $btn.on('pointerdown', function (e) {

            var $div = $("<div/>"),
                $btn = $('.ripple'),
                $ripple = $(".ripple-ease-in");
            //             Add class ripple - effect to the div
            $div.addClass('ripple-ease-in');

            // Makes sure that the ripple effect wont get too dark caused by too many effect overlapping
            if ($ripple.length >= 3) {
                $(".ripple-ease-in:first").remove();
            };

            // Set needed style properties 
            $div
                .css({
                    background: $(this).data("ripple-color")
                })

                //Place div under the element
                .appendTo($(this));
            console.log('test');
        }); // Ripple-Ease-In Animation
        $btn.on('mouseup', function (e) {
            var $ripple1 = $(".ripple-ease-in");
            //fadeOut 
            $ripple1.delay(300).fadeOut(300);
            setTimeout(function () {
                $ripple1.remove();
            }, 1000);

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

            setTimeout(function () {
                $div.remove();
            }, 1000);

        }); // Ripple Grow Animation
        $(document).on('scroll touchend mouseup', function () {
            var $ripple1 = $(".ripple-ease-in");
            $ripple1.delay(300).fadeOut(300);
            setTimeout(function () {
                $ripple1.remove();
            }, 1000);
        }); //Remove divs. afer scroll or touchend
    });

})(window, jQuery);
