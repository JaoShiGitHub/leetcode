function isPalindrome(num) {
    const leftToRigth = num.toString().split("").reverse().join("");
    return leftToRigth === num.toString();
  }
  
  console.log(isPalindrome(121)); // true
  console.log(isPalindrome(-121)); // false
  console.log(isPalindrome(10)); // false