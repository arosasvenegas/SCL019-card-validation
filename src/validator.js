
export function validCard(cardNumber) {
  
      
      var nCheck = 0, nDigit = 0, bEven = false;
      
  
      for (var n = cardNumber.length - 1; n >= 0; n--) {
          var cDigit = cardNumber.charAt(n),
              nDigit = parseInt(cDigit, 10);
  
          if (bEven) {
              if ((nDigit *= 2) > 9) nDigit -= 9;
          }
  
          nCheck += nDigit;
          bEven = !bEven;
          
      }
  
      return (nCheck % 10) == 0;
  }