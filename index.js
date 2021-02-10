const obj1 = { 0: [1, 3, 5, 7], 1: [2, 4, 6, 8] };
const obj2 = {
  0: {
    one: [1, 10, 100],
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
const obj3 = [1, 2, 3, 4, 5, 6, 7, 8];
const obj4 = [
  {
    one: [1, 10, 100],
    three: 3,
    five: 5,
    seven: 7,
  },
  {
    two: 2,
    four: 4,
    six: 6,
    eight: 8,
  },
  [3, 4, 5, 6, 7, 8],
];
const obj5 = {
  0: {
    one: [{ myKey: 1 }, { myKey: 10 }, { myKey: 100 }],
    three: [{ myKey: 3 }, { myKey: 30 }, { myKey: 300 }],
    five: [{ myKey: 5 }, { myKey: 50 }, { myKey: 500 }],
    seven: [{ myKey: 7 }, { myKey: 70 }, { myKey: 700 }],
  },
};

const flattenToValues = (obj, excludeFunc) => {
  return Object.keys(obj).reduce((accumulator, currentValue) => {
    const potentialValue = obj[currentValue];
    if (excludeFunc && excludeFunc(potentialValue))
      return accumulator.concat(potentialValue);

    const val =
      typeof potentialValue === "object" && potentialValue !== null
        ? flattenToValues(potentialValue, excludeFunc)
        : potentialValue;
    return accumulator.concat(val);
  }, []);
};

const result1 = flattenToValues(obj1);
const result2 = flattenToValues(obj2);
const result3 = flattenToValues(obj3);
const result4 = flattenToValues(obj4);
const result5 = flattenToValues(obj5, (el) => "myKey" in el);

console.log(obj1, "into", result1);
console.log("-------------------");
console.log(obj2, "into", result2);
console.log("-------------------");
console.log(obj3, "into", result3);
console.log("-------------------");
console.log(obj4, "into", result4);
console.log("-------------------");
console.log(obj5, "into", result5);
