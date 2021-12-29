//variables
const api_url = "https://zenquotes.io/api/random/";

$(document).ready(function () {
    let myBirthday = null;
    let ageAtDeath = null;
    if (localStorage.getItem("day") === null) {
        myBirthday = new Date(1999, 12, 20);
        ageAtDeath = 80;
    } else {
        const year = localStorage.getItem("year");
        const month = localStorage.getItem("month");
        const day = localStorage.getItem("day");
        ageAtDeath = localStorage.getItem("ageAtDeath");
        myBirthday = new Date(year, month, day);
    }
    let currentDate = moment();
    let mommentBirthday = moment(myBirthday);

    updateTimeLeftData(mommentBirthday, currentDate, ageAtDeath);
    updateClock();

    $.getJSON(api_url,
        function (quoteData) {
            $('#quote').text(`"${quoteData['q']}"`);
            $('#author').text(`- ${quoteData['a']}`);
        }).done(function () {
            // console.log("second success");
        })
        .fail(function () {
            let randomIndex = Math.floor(Math.random() * localQuoteData.length);
            let quoteData = localQuoteData[randomIndex];
            $('#quote').text(`"${quoteData['q']}"`);
            $('#author').text(`- ${quoteData['a']}`);

        });
    $("#settings").on("submit", function (event) {
        event.preventDefault();
        let month = $("#month").val();
        localStorage.setItem('month', month);
        let day = $("#day").val();
        localStorage.setItem('day', day);
        let year = $("#year").val();
        localStorage.setItem('year', year);

        let ageAtDeath = $("#age-at-death").val();
        localStorage.setItem('ageAtDeath', ageAtDeath);

        let myBirthday = new Date(year, month, day);
        let currentDate = moment();
        let mommentBirthday = moment(myBirthday);

        updateTimeLeftData(mommentBirthday, currentDate, ageAtDeath)
    });
});
