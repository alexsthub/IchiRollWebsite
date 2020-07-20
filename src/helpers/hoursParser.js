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

export function hoursToDateString(day, range) {
  const dayConversion = {
    0: "Mon",
    1: "Tue",
    2: "Wed",
    3: "Thur",
    4: "Fri",
    5: "Sat",
    6: "Sun",
  };
  if (!range) return { day: dayConversion[day], dateString: "Closed" };
  const { startHour, startMinute, endHour, endMinute } = range;
  const isAM = Math.floor(startHour / 12) % 2 === 0;
  const endIsAM = Math.floor(endHour / 12) % 2 === 0;
  let dateString = `${startHour % 12}:${
    startMinute.toString().length < 2 ? "0" + startMinute : startMinute
  }${isAM ? "AM" : "PM"} - ${endHour % 12}:${
    endMinute.toString().length < 2 ? "0" + endMinute : endMinute
  }${endIsAM ? "AM" : "PM"}`;

  const res = {
    day: dayConversion[day],
    dateString: dateString,
  };
  return res;
}
