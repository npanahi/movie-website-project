export default function formatTime(timestamp) {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",

    hour12: false,
    // timeZone: "UTC", // Assuming the timestamp is in UTC
  };
  const locale = navigator.language;
  const formattedTime = new Intl.DateTimeFormat("locale", options).format(
    new Date(timestamp)
  );
  return formattedTime;
}
