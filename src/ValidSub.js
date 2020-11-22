import React from "react";

export default function ValidSub() {
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
      <h3>{isValidSubsequence}</h3>
    </div>
  );
}
