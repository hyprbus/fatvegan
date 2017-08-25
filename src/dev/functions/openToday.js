// return the opening hours of the date supplied
// openHours = array of weekdays with open and close hours
// eg. weekday: Thursday, opens: 18:00, closes: 23:00
// dayToday = Date object with a date 

function openToday(openHours, dayToday) {
    let openTodayString = "Closed today";
    const d = dayToday.getDay();
    const hrsToday = openHours.find(a => parseInt(a.weekday) === d);
    if ((hrsToday.opens != "") && (hrsToday.closes != "")) {
        openTodayString = "Open today: " + hrsToday.opens + " - " + hrsToday.closes;
    }
    return openTodayString;
}

export default openToday;
