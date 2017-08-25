const getWeekDayName = (day) => {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return weekdays[day-1];
}

export default getWeekDayName;
