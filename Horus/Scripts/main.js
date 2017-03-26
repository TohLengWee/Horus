$(document).ready(function () {
    var trigger = $(".hamburger"),
        overlay = $(".overlay"),
        isClosed = false;

    trigger.click(function () {
        hamburgerCross();
    });

    $(window).click(function () {
        if (isClosed === true) {
            hamburgerCross();
            $("#wrapper").toggleClass("toggled");
        }
    });

    $(".hamburger").click(function (event) {
        event.stopPropagation();
    });

    function hamburgerCross() {
        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass("is-open");
            trigger.addClass("is-closed");
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass("is-closed");
            trigger.addClass("is-open");
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $("#wrapper").toggleClass("toggled");
    });

    var table = $("#playerLists").DataTable({
        rowReorder: {
            selector: "td:nth-child(3)"
        },
        responsive: true
    });
});