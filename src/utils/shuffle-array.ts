const shuffleArray = (array: any[]) => {
  const arr = [...array];
  return arr.sort(() => 0.5 - Math.random());
};

export default shuffleArray;
