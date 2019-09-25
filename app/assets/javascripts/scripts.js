$(document).ready(function () {
    $('body').addClass('js-enabled');

    $('.steps-nav').each(function() {
        var $this = $(this);
        var $tab = $this.find('span.active');
        var $link = $tab.find('a');
        var $panel = $($link.attr('href'));

        $this.on('click', '.step-nav', function(e) {
            e.preventDefault();
            var $link = $(this);
            var id = this.hash;

            if(id && !$link.is('.active')) {
                $panel.removeClass('active');
                $tab.removeClass('active');

                $panel = $(id).addClass('active');
                $tab = $link.parent().addClass('active');
            }
        });
    });
});

// window.scroll(0, document.querySelector(step_tab_id).offsetTop);