export default function timeGenerator(num) {
  let time = num * 60;
  let hour = Math.trunc(time / 3600);
  let min = Math.trunc((time % 3600) / 60);
  return `${hour === 0 ? "" : `${hour} Hour and`} ${
    min === 0 ? "" : ` ${min} Minutes`
  } `;
}
