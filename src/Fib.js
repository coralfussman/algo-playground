import React from "react";

export default function Fib() {
  const getNthFib = (n) => {
    let firstTwo = [0, 1];
    let counter = 3;

    while (counter <= n) {
      const nextFib = firstTwo[0] + firstTwo[1];
      firstTwo[0] = firstTwo[1];
      firstTwo[1] = nextFib;
      counter++;
    }
    return n > 1 ? firstTwo[1] : firstTwo[0];
  };

  const getNthFib2 = (n) => {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
      const nextFib = lastTwo[0];
    }
  };

  return (
    <div>
      <h2>{getNthFib}</h2>
    </div>
  );
}
