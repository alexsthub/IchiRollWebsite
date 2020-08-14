const app = {
  el_ccUnknown: "cc_type_unknown",
  el_ccTypePrefix: "cc_type_",
  default_format: "xxxx xxxx xxxx xxxx",
  cardTypes: {
    "American Express": {
      name: "American Express",
      code: "ax",
      max_length: 17,
      security: 4,
      pattern: /^3[47]/,
      valid_length: [15],
      formats: {
        length: 15,
        format: "xxxx xxxxxxx xxxx",
      },
    },
    Visa: {
      name: "Visa",
      code: "vs",
      max_length: 19,
      security: 3,
      pattern: /^4/,
      valid_length: [16],
      formats: {
        length: 16,
        format: "xxxx xxxx xxxx xxxx",
      },
    },
    Maestro: {
      name: "Maestro",
      code: "ma",
      max_length: 19,
      security: 3,
      pattern: /^(50(18|20|38)|5612|5893|63(04|90)|67(59|6[1-3])|0604)/,
      valid_length: [16],
      formats: {
        length: 16,
        format: "xxxx xxxx xxxx xxxx",
      },
    },
    Mastercard: {
      name: "Mastercard",
      code: "mc",
      security: 3,
      max_length: 19,
      pattern: /^5[1-5]/,
      valid_length: [16],
      formats: {
        length: 16,
        format: "xxxx xxxx xxxx xxxx",
      },
    },
  },
};

// TODO: Add discover somehow
// TODO: When you edit at the front, it will reset your cursor to the end. I don't want.
export function monitorCCFormat(e, cvvInput) {
  const value = e.target.value;
  const ccNum = value.replace(/\D/g, "");
  const cardType = getCardType(ccNum);
  const formattedNumber = formatCardNumber(ccNum, cardType);
  addIdentifier(e.target, cardType, cvvInput);
  return formattedNumber;
}

export function getCardType(ccNum) {
  for (let i in app.cardTypes) {
    const cardType = app.cardTypes[i];
    if (ccNum.match(cardType.pattern) && isValidLength(ccNum, cardType)) {
      return cardType;
    }
  }
}

export function formatCardNumber(ccNum, cardType) {
  let numAppendedChars = 0;
  let formattedNumber = "";
  let cardFormatIndex = "";

  // if (!cardType) return ccNum;
  let cardFormatString = getCardFormatString(ccNum, cardType);
  console.log(cardFormatString);
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

function isValidLength(ccNum, cardType) {
  for (let i in cardType.valid_length) {
    if (ccNum.length <= cardType.valid_length[i]) {
      return true;
    }
  }
  return false;
}

function getCardFormatString(ccNum, cardType) {
  if (!cardType) return app.default_format;
  for (let i in cardType.formats) {
    const format = cardType.formats[i];
    if (ccNum.length <= format.length) {
      return format;
    }
  }
}

function addIdentifier(element, cardType, cvvInput) {
  let identifier = app.el_ccUnknown;
  if (cardType) {
    identifier = app.el_ccTypePrefix + cardType.code;
  }
  if (!element.classList.contains(identifier)) {
    let classes = [app.el_ccUnknown];
    for (let i in app.cardTypes) {
      classes.push(app.el_ccTypePrefix + app.cardTypes[i].code);
    }
    element.classList.remove(...classes);
    element.classList.add(identifier);
    if (cardType) {
      console.log(cvvInput.current.getAttribute("maxlength"));
      element.setAttribute("maxlength", cardType.max_length);
      cvvInput.current.setAttribute("maxlength", cardType.security);
    }
  }
}

export function cleanValue(value) {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  return v;
}
