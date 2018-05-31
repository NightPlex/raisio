$(document).ready(function () {
    $("#my-final-table").dynatable({
        dataset: {
            records: RAISIO.data
        }
    });

    $("#my-final-table2").dynatable({
        dataset: {
            records: RAISIO.peak
        }
    });

    $('table tr > td:nth-child(8)').each(function () {

        var value = $(this).text();

        if (value >= 7) {
            $(this).addClass("green");
        }


        if (value <= -7) {
            $(this).addClass("red");
        }

    })

    $("#my-final-table, #my-final-table2").on("dynatable:afterUpdate", function () {
        $('table tr > td:nth-child(8)').each(function () {

            var value = $(this).text();
            if (value >= 7) {
                $(this).addClass("green");
            }

            if (value <= -7) {
                $(this).addClass("red");
            }
        })
    });
});