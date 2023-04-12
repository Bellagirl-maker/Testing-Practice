function reverseString(string){
    let Array = string.split("");
  
    let reversedArray = Array.reverse();
    
    let reversedString = reversedArray.join("");
    return reversedString;
}

module.exports = reverseString