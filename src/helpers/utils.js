export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

export const isObjectEmpty = (obj) => Object.keys(obj).length < 1;
