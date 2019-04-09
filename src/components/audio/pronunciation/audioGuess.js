function audioGuess(obj) {
  const keys = Object.keys(obj);
  return keys[Math.floor(keys.length * Math.random())];
}

export default audioGuess;
