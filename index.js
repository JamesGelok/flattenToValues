const obj1 = { 0: [1, 3, 5, 7], 1: [2, 4, 6, 8] };
const obj2 = {
  0: {
    one: [1,10,100],
    three: 3,
    five: 5,
    seven: 7,
  },
  1: {
    two: 2,
    four: 4,
    six: 6,
    eight: 8,
  },
};
const obj3 = [1,2,3,4,5,6,7,8]
const obj4 = [{
    one: [1,10,100],
    three: 3,
    five: 5,
    seven: 7,
  },{
    two: 2,
    four: 4,
    six: 6,
    eight: 8,
  },3,4,5,6,7,8];

const flattenToValues = (obj) => {
  return Object.keys(obj).reduce((accumulator, currentValue) => {
    const potentialValue = obj[currentValue];
    const val =
      typeof potentialValue === "object" && potentialValue !== null
        ? flattenToValues(potentialValue)
        : potentialValue;
    return accumulator.concat(val);
  }, []);
};


const result1 = flattenToValues(obj1);
const result2 = flattenToValues(obj2);
const result3 = flattenToValues(obj3);
const result4 = flattenToValues(obj4);

console.log(obj1, 'into', result1);
console.log("-------------------");
console.log(obj2, 'into', result2);
console.log("-------------------");
console.log(obj3, 'into', result3);
console.log("-------------------");
console.log(obj4, 'into', result4);
console.log(obj4, 'into', result4);
