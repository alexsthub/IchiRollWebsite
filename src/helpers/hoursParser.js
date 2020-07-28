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

export function groupHours(openHours) {
  const dayConversion = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
  };
  let res = [];
  let start = null;
  let prev = null;
  for (let i = 0; i < 7; i++) {
    let range = openHours[i];
    if (!range) range = {};

    if (start === null) {
      start = i;
      prev = i;
      continue;
    }
    const prevRange = openHours[prev];
    if (!isEquivalent(range, prevRange)) {
      const dayRange =
        start === prev ? dayConversion[start] : `${dayConversion[start]} - ${dayConversion[prev]}`;
      const timeRange = rangeToString(openHours[start]);
      const rowRange = { dayRange: dayRange, timeRange: timeRange };
      res.push(rowRange);
      start = i;
    }
    if (i === 6) {
      const dayRange =
        start === i ? dayConversion[start] : `${dayConversion[start]} - ${dayConversion[i]}`;
      const timeRange = rangeToString(range);
      const rowRange = { dayRange: dayRange, timeRange: timeRange };
      res.push(rowRange);
      break;
    }
    prev = i;
  }
  return res;
}

function rangeToString(range) {
  if (Object.keys(range).length === 0 && range.constructor === Object) return "Closed";

  const { startHour, startMinute, endHour, endMinute } = range;
  const isAM = Math.floor(startHour / 12) % 2 === 0;
  const endIsAM = Math.floor(endHour / 12) % 2 === 0;
  let dateString = `${startHour % 12}:${
    startMinute.toString().length < 2 ? "0" + startMinute : startMinute
  }${isAM ? "AM" : "PM"} - ${endHour % 12}:${
    endMinute.toString().length < 2 ? "0" + endMinute : endMinute
  }${endIsAM ? "AM" : "PM"}`;
  return dateString;
}

function isEquivalent(a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);
  if (aProps.length !== bProps.length) {
    return false;
  }
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
}

export function timeToString(hour, minute) {
  let suffix = hour >= 12 ? "PM" : "AM";
  const strMinute = minute < 10 ? "0" + minute : minute;
  const strHour = hour > 12 ? hour - 12 : hour;
  const timeString = `${strHour}:${strMinute} ${suffix}`;
  return timeString;
}
