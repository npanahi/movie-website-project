export default function shuffleArr(arr) {
  if (arr === null) return [];
  let newArray = [...arr];
  for (let i = 0; i < newArray.length; i++) {
    const newI = Math.floor(Math.random() * (i + 1));
    let holder = newArray[i];
    newArray[i] = newArray[newI];
    newArray[newI] = holder;
  }
  return newArray;
}
