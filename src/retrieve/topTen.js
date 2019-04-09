function sortFunction(a, b) {
  return (b.round - a.round);
}

const topTen = array => (
  new Promise((resolve) => {
    const arrayA = [...array];
    resolve(arrayA
      .sort(sortFunction)
      .slice(0, 20));
  }));

export default topTen;
