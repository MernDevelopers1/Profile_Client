// utils.js
export const formatDate = (date, ongoing = false) => {
  if (!date) return "";
  if (ongoing) return "Present";

  const options = { year: "numeric", month: "short" }; // e.g., Jan 2020
  return new Date(date).toLocaleDateString("en-US", options);
};

export const formatRange = (start, end, ongoing) => {
  return `${formatDate(start)} – ${formatDate(end, ongoing)}`;
};
