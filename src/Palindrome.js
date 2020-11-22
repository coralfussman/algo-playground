import React from "react";

export default function Palindrome() {
  let string = "hannah";

  const isPalindrome = (string) => {
    let firstIndex = 0;
    let lastIndex = string.length - 1;
    while (firstIndex < lastIndex) {
      if (string[firstIndex] !== string[lastIndex]) return false;
      firstIndex++;
      lastIndex--;
    }
    return true;
  };
  return (
    <div>
      <h3>{isPalindrome}</h3>
    </div>
  );
}
