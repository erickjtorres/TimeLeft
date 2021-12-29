function updateTimeLeftData(mommentBirthday, currentDate, ageOfDeath) {

    let deathYear = mommentBirthday.clone();
    deathYear.add(ageOfDeath, 'y');
    let totaldays = deathYear.diff(mommentBirthday, 'd');
    let differenceInDays = deathYear.diff(currentDate, 'd');
    let differenceInYears = deathYear.diff(currentDate, 'y');
    let differenceInWeeks = deathYear.diff(currentDate, 'w');
    let daysPassed = totaldays - differenceInDays;
    $('#days').text(differenceInDays);
    $('#weeks').text(differenceInWeeks);
    $('#years').text(differenceInYears);

    $(".uk-progress").attr('value', daysPassed);
    $(".uk-progress").attr('max', totaldays);
}


function updateClock() {
    let now = new Date($.now()); // current date
    let mommentNow = moment(now);
    let time = mommentNow.format("h:mm a");
    let date = mommentNow.format("dddd, MMMM Do");

    $('#current-time').text(time);
    $('#current-date').text(date);


    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}