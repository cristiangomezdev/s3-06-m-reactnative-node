export const formatDate = (date)=>{
    date = new Date(date)
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if(month < 10){
    date = `${year}-0${month}-${day + 1}`
    }else{
    date = `${year}-${month}-${day + 1}`
    }
    return date
}

export const parseTargetCredit = (number)=>{
    return(`**** **** **** ${number.slice((number.length - 4))}`)
}

export function validateCreditCardNumber(ccNum) {

    //let ccNum = number.replace(/\s/g, '')
  
      let visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      let mastPattern = /^(?:5[1-5][0-9]{14})$/;
      let amexPattern = /^(?:3[47][0-9]{13})$/;
      let discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/; 
      
      var isVisa = visaPattern.test( ccNum ) === true;
      var isMast = mastPattern.test( ccNum ) === true;
      var isAmex = amexPattern.test( ccNum ) === true;
      var isDisc = discPattern.test( ccNum ) === true;
  
      if( isVisa || isMast || isAmex || isDisc ) {
          // at least one regex matches, so the card number is valid.
  
          if( isVisa ) {
              return 'visa'
          }
          else if( isMast ) {
            return 'mastercard'
          }
          else if( isAmex ) {
            return 'american express'
          }
          else if( isDisc ) {
              return 'discover'
          }
      }
      else {
          Alert.alert("Please enter a valid card number.");
      }
  }
  
  