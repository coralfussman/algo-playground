import React from "react";

export default function TwoNumber() {
    

   // const array = [1,2,3,4,5,6,7,8,9,10] 
   // const array = [1,12,10,8,7,14] 
    const twoNumberSum = (array, targetSum) => {
        array.sort((a,b) => a - b),
          let left = 0
          let right = array.length - 1
          while (left < right) {
              const currentSum = array[left] + array[right]
              if (currentSum === targetSum) {
                  return [array[left], array[right]]
              }
          }
      }
      const twoNumberSumTwo = (array, targetSum) => {
        const xNums = {};
          for(const num of array) {
              const possibleY = targetSum - num;
              if(possibleY in xNums) {
                  return [possibleY, num];
              } else {
                  xNums[num] = true;
              }
          }
          return []
      }
  return (
    <div>
      <h2>{twoNumberSum}</h2>
      <h2>{twoNumberSumTwo}</h2>
    </div>
  );
}
