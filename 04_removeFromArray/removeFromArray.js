// Option 1
// 1.Function accepts two arguments: an array and
// another amount of different arguments(... means any amount)
// 2.Variable result consists of a function, that takes first argument (arr) and uses filter method
// to go through all elements of arr
// 3.Variable elementIndexInOther consists of argument other with the applied method indexOf,
// where elements of other are gone through
// 4.If elementIndexInOther is not equal to -1 (means there are same elements in arr and other),
// this element is excluded from result
// 5.If elementIndexInOther is equal to -1 (means element of other is not present in arr),
// then it's put into result
// 6.When we return result we recieve an array without elements in the arr which are in the other
// (removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4])
//

const removeFromArray = function (arr, ...other) {
  const result = arr.filter(function filterIteration(element) {
    const elementIndexInOther = other.indexOf(element);
    if (elementIndexInOther != -1) {
      return false;
    }
    return true;
  });
  return result;
};

// const removeFromArray = function (arr, ...other) {
//   const result = arr.filter((element) => {
//     const elementIndexInOther = other.indexOf(element);

//     if (elementIndexInOther != -1) {
//       return false;
//     }

//     return true;
//   });
//   return result;
// };

//Option 2
// 1.Function accepts two arguments: an array and
// another amount of different arguments(... means any amount)
// 2.Create an empty array to put into in the asked elements
// 3.Create function using method forEach to go through all elements of arr (first argument)
// 4.Create variable elementIndexInOther which consists of argument other with the applied method indexOf,
// where elements of other (second argument) are gone through
// 5.If elementIndexInOther is equal to -1, this element is pushed to the result,
// UNLESS it is included in the function arguments
//
// const removeFromArray = function (arr, ...other) {
//   const result = [];

//   arr.forEach((element) => {
//     const elementIndexInOther = other.indexOf(element);
//     if (elementIndexInOther == -1) {
//       result.push(element);
//     }
//   });
//   return result;
// };

// Do not edit below this line
module.exports = removeFromArray;
