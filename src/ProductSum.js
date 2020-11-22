import React from "react";

export default function ProductSum() {
  const productSum = (array, depth = 1) => {
    let sum = 0;
    for (let value of array) {
      if (Array.isArray(value)) {
        let reducedSum = value.reduce(a + b, 0);
        depth++;
        reducedSum * depth;
      } else {
        sum += value;
      }
    }
    return sum;
  };
  return <div>{productSum}</div>;
}
