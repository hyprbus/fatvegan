// beginDate: Date
// noOfDays: int
// return: array, example: [ { month: 10, year: 2017, days: [28, 29, 30, 31] }, { month: 11, year: 2017, days: [1, 2, 3, 4, 5, 6] } ]

export const createCalendar = (beginDate, noOfDays) => {
  let calendar = []
  let monthObj = {}
  let monthDays = []
  let dateCounter = new Date(beginDate)

  // starting month
  let monthIndex = dateCounter.getMonth()
  // starting year
  let yearIndex = dateCounter.getFullYear()
  // set month of month object
  monthObj.month = monthIndex + 1
  // set year of month object
  monthObj.year = yearIndex

  for (let i = 0; i < noOfDays; i++) {
    if (dateCounter.getMonth() !== monthIndex || i === noOfDays - 1) {
      monthObj.days = monthDays
      calendar.push(monthObj)
      monthObj = {}
      monthIndex = dateCounter.getMonth()
      monthObj.month = monthIndex + 1
      yearIndex = dateCounter.getFullYear()
      monthObj.year = yearIndex
      monthDays = []
    }
    monthDays.push(dateCounter.getDate())
    dateCounter.setDate(dateCounter.getDate() + 1)
  }
  return calendar
}