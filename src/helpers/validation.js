/* eslint-disable no-control-regex */

export function validateContactInformation(name, email, phone) {
  let errorObject = {};
  const nameValidated = validateName(name);
  const emailValidated = validateEmail(email);
  // const phoneValidated = validatePhone(phone);
  errorObject["name"] = !nameValidated ? "Please enter a name" : null;
  errorObject["email"] = !emailValidated ? "Please enter a valid email" : null;
  // errorObject["phone"] = !phoneValidated ? "Please enter a valid phone number": null;
  return errorObject;
}

function validateName(name) {
  return name !== "";
}

function validateEmail(email) {
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return expression.test(email.toLowerCase());
}
// TODO: Do we need phone number?
// function validatePhone(phone) {
//   return null;
// }

export function validatePaymentInformation(ccNumber, ccExpiry, ccSecurity, ccZip, ccType, ccData) {
  let errorObject = {};
  const numberValidated = validateCCNumber(ccNumber, ccType, ccData);
  const expiryValidated = validateCCExpiry(ccExpiry);
  const securityValidated = validateCCSecurity(ccSecurity, ccType, ccData);
  const zipValidated = validateCCZip(ccZip);

  errorObject["cardNumber"] = !numberValidated ? "Invalid credit card number" : null;
  errorObject["cardExpiry"] = !expiryValidated ? "Invalid expiry" : null;
  errorObject["cardSecurity"] = !securityValidated ? "Invalid CVV" : null;
  errorObject["cardZip"] = !zipValidated ? "Invalid zipcode" : null;
  return errorObject;
}

function validateCCNumber(ccNumber, ccType, ccData) {
  if (!ccType) return false;
  const cardType = ccData.cardTypes[ccType];
  const expectedLength = cardType.formats.length;
  const expression = /^[0-9]+$/;

  const cleanNumber = ccNumber.replace(/ /g, "");
  if (cleanNumber.length !== expectedLength || !expression.test(cleanNumber)) return false;
  return true;
}

function validateCCExpiry(ccExpiry) {
  const splitStr = ccExpiry.split("/");
  if (splitStr.length < 2 || splitStr[1].length < 2) return false;
  const expression = /^[0-9]+$/;
  splitStr.forEach((s) => {
    if (!expression.test(s)) return false;
  });

  const month = Number(splitStr[0]);
  const year = Number(splitStr[1]);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = Number(currentDate.getFullYear().toString().substr(2));

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false;
  }

  return true;
}

function validateCCSecurity(ccSecurity, ccType, ccData) {
  if (!ccType) return false;
  const cardType = ccData.cardTypes[ccType];
  const expression = /^[0-9]+$/;
  return expression.test(ccSecurity) && ccSecurity.length === cardType.security;
}

function validateCCZip(ccZip) {
  const expression = /^[0-9]+$/;
  return expression.test(ccZip) && ccZip.length === 5;
}
