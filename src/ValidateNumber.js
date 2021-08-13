// Check if the phone number is valid
const validatePhoneNum = (number) => {
  return number.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
}

export default validatePhoneNum;