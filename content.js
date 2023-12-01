htmlString = `
<div>
    <h1 class="title-event">&nbsp;&nbsp;&nbsp;<span class="title-event-wrap">TimeTravel</span></h1>
    <nav>
        <ul>
            <li><a id="yearInc" href="javascript:void(0);">[Year++]</a></li>
            <li><a id="yearDec" href="javascript:void(0);">[Year--]</a></li>
        </ul>
    </nav>
</div>
<div>
    <h1 class="title-event">&nbsp;<span class="title-event-wrap">Leaderboards</span></h1>
    <nav>
        <ul>
            <li>
                <a href="https://adventofcode.com/2022/leaderboard/private/view/373470">[lucianoq]</a>
            </li>
            <li>
                <a href="https://adventofcode.com/2022/leaderboard/private/view/504742">[Roma]</a>
            </li>
            <li>
                <a href="https://adventofcode.com/2022/leaderboard/private/view/758798">[Customer.io]</a>
            </li>
        </ul>
    </nav>
</div>
<div>
    <h1 class="title-event">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="title-event-wrap">GoTo</span></h1>
    <nav>
        <ul>
            <li>
                <a id="today" href="javascript:void(0);">[Today Puzzle]</a>
            </li>
        </ul>
    </nav>
</div>
`

elem = $.parseHTML(htmlString);
$('header').append(elem);

let moveYear = function (delta) {
    const url = window.location.href;

    const re = /20../;

    let year = 2022;
    const yearFields = url.match(re);
    if (yearFields != null) {
        year = parseInt(yearFields[0], 10);
    }

    let newYear = year + delta;

    if (newYear < 2015 || newYear > 2023) {
        return;
    }

    window.location.href = url.replace(re, newYear.toString());
};

let goToTodayPuzzle = function () {
    const today = new Date();
    const month = today.getMonth();
    if (month === 11) {
        const year = today.getFullYear();
        const day = today.getDate();
        window.location.href = `https://adventofcode.com/${year}/day/${day}`
    }
};

$('#yearInc').on("click", function () {
    moveYear(1);
});

$('#yearDec').on("click", function () {
    moveYear(-1);
});

$('#today').on("click", function () {
    goToTodayPuzzle();
});
