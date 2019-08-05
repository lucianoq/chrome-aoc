htmlString = `
    <div>
        <h1 class="title-event">&nbsp;&nbsp;<span class="title-event-wrap">Luciano's</span>&nbsp;&nbsp;</h1>
        <nav><ul><li><a id="yearInc" href="javascript:void(0);">[Year++]</a></li>
            <li><a id="yearDec" href="javascript:void(0);">[Year--]</a></li>
        </ul></nav>
    </div>
`

elem = $.parseHTML(htmlString);
$('header').append(elem);

var moveYear = function (delta) {
    var url = window.location.href;
    console.log(url);

    var yearFields = url.match(/201./);
    var year = 2018;
    if (yearFields != null) {
        year = parseInt(yearFields[0], 10);
    }
    console.log(year);


    var newYear = year + delta;
    console.log(newYear);

    var re = new RegExp(year.toString());
    console.log(re);

    var newUrl = url.replace(re, newYear.toString());

    console.log(newUrl);

    window.location.href = newUrl;
}

console.log("adding listener");

$('#yearInc').on("click", function () {
    moveYear(1);
});

$('#yearDec').on("click", function () {
    moveYear(-1);
});
