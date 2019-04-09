function randomMathTask() {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const mathOperation = Math.random() > 0.5 ? '+' : '-';
  const result = mathOperation === '+' ? (firstNumber + secondNumber) : (firstNumber - secondNumber);
  return {
    firstNumber,
    secondNumber,
    mathOperation,
    result,
  };
}

export default randomMathTask;
