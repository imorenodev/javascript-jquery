function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; 

  for (var i = 0; i < codeArr.length; i++) {
    var nextLetter = encodedStr.charCodeAt(i);//save current letter in variable

    if (nextLetter >= 65 && nextLetter <= 90) { //is uppercase letter character
      if (nextLetter + 13 > 90) {
        decodedArr[i] = (String.fromCharCode(nextLetter - 13));
      } else {
        decodedArr[i] = (String.fromCharCode(nextLetter + 13));
      }
    } else {
      decodedArr[i] = codeArr[i];
    }
  }
  
  
  return decodedArr.join(""); // Array to String
}

// test code
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");