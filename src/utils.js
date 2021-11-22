import moment from "moment-timezone";

export const randomString = (prefix) =>
  Math.random()
    .toString(36)
    .replace("0.", prefix || "");

export const formatDate = (inputDate) => {
  const tzDate = moment(inputDate)
    .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
    .format();
  let dt = new Date(tzDate),
    date = dt.getDate(),
    diffDays = new Date().getDate() - date,
    diffMonths = new Date().getMonth() - dt.getMonth(),
    diffYears = new Date().getFullYear() - dt.getFullYear();
  if (diffYears === 0 && diffDays === 0 && diffMonths === 0) {
    return `Today`;
  } else if (diffYears === 0 && diffDays === 1) {
    return `Yesterday`;
  } else {
    return `${moment(tzDate).format("D/MM/YY")}`;
  }
};
