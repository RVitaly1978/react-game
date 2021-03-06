export const getRandomInRange = (max: number, min: number = 1) => {
  return Math.floor(Math.random() * (max - min) + min);
};
