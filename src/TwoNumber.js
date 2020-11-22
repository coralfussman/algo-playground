import React from "react";

export default function TwoNumber() {
  const isValidSubsequence = (array, sequence) => {
    let arrInd = 0;
    let seqInd = 0;

    while (seqInd < sequence.length && arrInd < array.length) {
      if (sequence[seqInd] === array[arrInd]) {
        seqInd++;
      }

      arrInd++;
    }
    return seqInd === sequence.length;
  };

  return (
    <div>
      <h2>{isValidSubsequence}</h2>
    </div>
  );
}
