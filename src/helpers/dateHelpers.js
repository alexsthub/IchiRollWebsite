import { timeToString } from "./hoursParser";
import { addDaysToDate } from "../helpers/utils";

export function getDateOptions(currentDate, openHours, NUM_DAYS_FUTURE) {
  let dateOptions = [];
  for (let i = 0; i < NUM_DAYS_FUTURE; i++) {
    const dayOfWeek = currentDate.getDay() - 1;
    if (openHours[dayOfWeek]) {
      const month = currentDate.toLocaleString("default", { month: "short" });
      const dayName = currentDate.toString().split(" ")[0];
      const day = currentDate.getDate();
      const dateString = `${dayName}, ${month} ${day}`;
      const option = { label: dateString, value: currentDate };
      dateOptions.push(option);
    }
    currentDate = addDaysToDate(currentDate, 1);
  }
  return dateOptions;
}

export function getTimeRangesForDay(date, hours) {
  let timeRanges = [];

  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();
  const endHour = hours.endHour;
  const endMinute = hours.endMinute;

  if (
    currentHour < hours.startHour ||
    (currentHour === hours.startHour && currentMinute < hours.startMinute)
  ) {
    currentHour = hours.startHour;
    currentMinute = hours.startMinute;
  }

  const difference = currentMinute % 15;
  currentMinute = difference !== 0 ? currentMinute + 15 - difference : currentMinute;

  while (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
    if (currentMinute >= 60) {
      currentHour++;
      currentMinute = 0;
    }
    const option = {
      value: { hour: currentHour, minute: currentMinute },
      label: timeToString(currentHour, currentMinute),
    };
    timeRanges.push(option);
    currentMinute = currentMinute + 15;
  }
  timeRanges.pop();
  timeRanges.shift();
  return timeRanges;
}

export function withinTimeRange(hours, currentHour, currentMinute) {
  if (!hours) return false;
  let endHours = hours.endHour;
  let endMinutes = hours.endMinute - 15;
  if (endMinutes < 0) {
    endHours -= 1;
    endMinutes += 60;
  }
  const difference = currentMinute % 15;
  currentMinute = difference !== 0 ? currentMinute + 15 - difference : currentMinute;
  return (
    (currentHour > hours.startHour && currentHour < endHours) ||
    (currentHour === hours.startHour && currentMinute >= hours.startMinute) ||
    (currentHour === endHours && currentMinute < endMinutes)
  );
}

export function isGreaterDate(selectedDate, currentDate) {
  return (
    selectedDate.getMonth() > currentDate.getMonth() ||
    (selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getDate() > currentDate.getDate())
  );
}
