export function getCardType(ccNum, ccData) {
  for (let i in ccData.cardTypes) {
    const cardType = ccData.cardTypes[i];
    if (ccNum.match(cardType.pattern) && isValidLength(ccNum, cardType)) {
      return cardType;
    }
  }
}

export function formatCardNumber(ccNum, cardType, ccData) {
  let numAppendedChars = 0;
  let formattedNumber = "";
  let cardFormatIndex = "";

  // if (!cardType) return ccNum;
  let cardFormatString = getCardFormatString(ccNum, cardType, ccData);
  for (let i = 0; i < ccNum.length; i++) {
    cardFormatIndex = i + numAppendedChars;
    if (!cardFormatString || cardFormatIndex >= cardFormatString.length) {
      return ccNum;
    }
    if (cardFormatString.charAt(cardFormatIndex) !== "x") {
      numAppendedChars++;
      formattedNumber += cardFormatString.charAt(cardFormatIndex) + ccNum.charAt(i);
    } else {
      formattedNumber += ccNum.charAt(i);
    }
  }
  return formattedNumber;
}

export function addIdentifier(element, cardType) {
  let identifier;
  if (cardType) identifier = cardType.code;

  if (this.ccType !== identifier) {
    this.ccType = identifier;
    if (cardType) {
      element.setAttribute("maxlength", cardType.max_length);
      this.cvvInput.current.setAttribute("maxlength", cardType.security);
    } else {
      element.setAttribute("maxlength", 19);
      this.cvvInput.current.setAttribute("maxlength", 3);
    }
  }
}

function isValidLength(ccNum, cardType) {
  for (let i in cardType.valid_length) {
    if (ccNum.length <= cardType.valid_length[i]) {
      return true;
    }
  }
  return false;
}

function getCardFormatString(ccNum, cardType, ccData) {
  if (!cardType) return ccData.default_format;
  for (let i in cardType.formats) {
    const format = cardType.formats[i];
    if (ccNum.length <= format.length) {
      return format;
    }
  }
}

export function cleanValue(value) {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  return v;
}
