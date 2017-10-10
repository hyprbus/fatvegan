const dateToString = (d, format, separator) => {
  if (d === null) {
    return "-"
  }
  let date = new Date(d)
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hours = date.getHours()
  let m = date.getMinutes().toString()
  let minutes = (m < 10 ? "0" : "") + m
  let dateString = "dateToString: format not defined"
  switch (format) {
    case "short":
      dateString = day + separator + month
      break
    case "medium":
      dateString = day + separator + month + separator + year
      break
    case "long":
      dateString = day + separator + month + separator + year + " " + hours + ":" + minutes
      break
  }
  return dateString
}

export default dateToString
