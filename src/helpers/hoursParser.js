export function convertRawOpenHours(rawHours) {
  let result = {};
  const weeklyHours = rawHours.weekly;
  weeklyHours.forEach((range) => {
    const [day, hourObj] = minuteToTime(range.minuteOfWeek, range.durationMins);
    result[day] = hourObj;
  });
  for (let i = 0; i < 7; i++) {
    if (!(i in result)) result[i] = null;
  }
  return result;
}

function minuteToTime(startingMinute, duration) {
  const days = Math.floor(startingMinute / (60 * 24));
  const hours = Math.floor((startingMinute % (60 * 24)) / 60);
  const minutes = Math.floor((startingMinute % 60) / 60);

  const durationHours = duration / 60;
  const durationMinutes = duration % 60;

  let endHours = hours + durationHours;
  let endMinutes = minutes + durationMinutes;
  if (endMinutes > 60) {
    endHours = endHours + Math.floor(endMinutes / 60);
    endMinutes = endMinutes % 60;
  }
  const openHour = {
    startHour: hours,
    startMinute: minutes,
    endHour: endHours,
    endMinute: endMinutes,
  };
  return [days - 1, openHour];
}

export function hoursToDateString(day, startHours, startMinutes, endHours, endMinutes) {
  const dayConversion = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  const isAM = Math.floor(startHours / 12) % 2 === 0;
  const endIsAM = Math.floor(endHours / 12) % 2 === 0;
  let dateString = `${dayConversion[day]}, ${startHours % 12}:${
    startMinutes.toString().length < 2 ? "0" + startMinutes : startMinutes
  }${isAM ? "AM" : "PM"} - ${endHours % 12}:${
    endMinutes.toString().length < 2 ? "0" + endMinutes : endMinutes
  }${endIsAM ? "AM" : "PM"}`;
  return dateString;
}
