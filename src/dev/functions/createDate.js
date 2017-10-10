// "YYYYxMMxDD", h => "YYYY/MM/DD hh:00"
// "YYYYxMxD", h =>  "YYYY/MM/DD hh:00"
// "2017/6/1", 17 => "2017/06/01 17:00"
// "2017.10.30", 22 => "2017/10/30 22:00"

export default function createDate (dateStr, hours) {
let dateTime = /^(\d{4})[.-/](\d{1,2})[.-/](\d{1,2})$/
let match = dateTime.exec(dateStr)
if (match === null) {
  return "Invalid date string: " + dateStr
}
// validate hours, add to date
if ((hours < 0) || (hours >= 24)) {
  return "Invalid hours: "  + hours
}
// return date object 
  return new Date(Number(match[1]), Number(match[2])-1, Number(match[3]), hours)
}