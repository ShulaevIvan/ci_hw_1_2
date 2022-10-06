export default function characterSort(dataArr) {
  const sortedArr = dataArr.sort((a, b) => {
    const result = a.health - b.health;
    return result;
  }).reverse();

  return sortedArr;
}
