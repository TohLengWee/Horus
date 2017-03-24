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

    //Table Search
    $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

        $.extend($.expr[":"], {
            'containsi': function (elem, i, match) {
                return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function (e) {
            $(this).attr("visible", "false");
        });

        $(".results tbody tr:containsi('" + searchSplit + "')").each(function (e) {
            $(this).attr("visible", "true");
        });

        var jobCount = $('.results tbody tr[visible="true"]').length;
        $(".counter").text(jobCount + " item");

        if (jobCount === "0") { $(".no-result").show(); }
        else { $(".no-result").hide(); }
    });
});