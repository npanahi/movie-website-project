export default function formatTime(timestamp) {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",

    hour12: false,
  };

  const date = new Date(timestamp);
  return date.toLocaleDateString("en-GB", options);
}
