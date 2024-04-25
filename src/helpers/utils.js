export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

export const isObjectEmpty = (obj) => Object.keys(obj).length < 1;

const genRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
