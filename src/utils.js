export const randomString = (prefix) =>
  Math.random()
    .toString(36)
    .replace("0.", prefix || "");

    