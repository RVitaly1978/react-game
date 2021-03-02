const shuffleArray = (array: any[]) => {
  const arr = [...array];
  const shuffled = [...arr.sort(() => 0.5 - Math.random())];
  return shuffled.sort(() => 0.5 - Math.random());
};

export default shuffleArray;
