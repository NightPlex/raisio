$(document).ready(function () {
    $("#my-final-table").dynatable({
        dataset: {
            records: RAISIO.data
        }
    });

    $('table tr > td:nth-child(8)').each(function () {

        var value = $(this).text();

        if (value >= 7) {
            $(this).addClass("green");
        }

        if (value >= 3 && value < 7) {
            $(this).addClass("mild-green");
        }

        if (value <= -7) {
            $(this).addClass("red");
        }

        if (value <= -3 && value > -7) {
            $(this).addClass("mild-red");
        }
    })

    $("#my-final-table").on("dynatable:afterUpdate", function () {
        $('table tr > td:nth-child(8)').each(function () {

            var value = $(this).text();
            if (value >= 7) {
                $(this).addClass("green");
            }

            if (value >= 3 && value < 7) {
                $(this).addClass("mild-green");
            }

            if (value <= -7) {
                $(this).addClass("red");
            }

            if (value <= -3 && value > -7) {
                $(this).addClass("mild-red");
            }
        })
    });
});