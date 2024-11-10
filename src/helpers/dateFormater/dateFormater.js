export default function formatTime(release_time) {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  const date = new Date(release_time);
  const local = navigator.language;
  //"en-GB"
  return date.toLocaleDateString(local, options);
}
