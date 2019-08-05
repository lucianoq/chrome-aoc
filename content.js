htmlString = `
<div>
    <h1 class="title-event">&nbsp;&nbsp;&nbsp;<span class="title-event-wrap">TimeTravel</span></h1>
    <nav><ul><li><a id="yearInc" href="javascript:void(0);">[Year++]</a></li>
        <li><a id="yearDec" href="javascript:void(0);">[Year--]</a></li>
    </ul></nav>
</div>
`

elem = $.parseHTML(htmlString);
$('header').append(elem);

var moveYear = function (delta) {
    var url = window.location.href;

    var re = /201./;

    var year = 2018;
    var yearFields = url.match(re);
    if (yearFields != null) {
        year = parseInt(yearFields[0], 10);
    }

    var newYear = year + delta;

    if (newYear < 2015 || newYear > 2018) {
        return;
    }

    window.location.href = url.replace(re, newYear.toString());;
}

$('#yearInc').on("click", function () {
    moveYear(1);
});

$('#yearDec').on("click", function () {
    moveYear(-1);
});
