// Write your solution below:

const makeUnique = (string) => {
  let letArr = [];
  const stringArr = string.split("");
  stringArr.forEach((element) => {
    if (
      letArr.includes(element.toLowerCase()) === false &&
      letArr.includes(element.toUpperCase()) === false
    ) {
      letArr.push(element);
    }
  });

  return letArr.toString();
};

console.log(makeUnique("hhhavvveee aaNNIICCCCEEE DDDDAAAA YYY"));
