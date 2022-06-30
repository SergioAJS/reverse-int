module.exports = function reverse (n) {
  const str = n.toString();
  let i = 0;
  let result = '';
  while (i < str.length) {
    result = `${str[i]}${result}`;
    i++
  }
  const reverseInt = parseInt(result);
  return reverseInt;
}