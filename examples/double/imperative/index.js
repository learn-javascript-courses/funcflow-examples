export default (numbers) => {
  const doubled = [];
  for(var i = 0; i < numbers.length; i++) {
    var newNumber = numbers[i] * 2
    doubled.push(newNumber)
  }
  return doubled;
};
