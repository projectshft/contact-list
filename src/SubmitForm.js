import validateEmail from "./ValidateEmail";
import validatePhoneNum from "./ValidateNumber";
import validateImgUrl from "./ValidateImgUrl";

// Function that validates form submissions
const submitForm = (name, email, number, imgUrl) => {
  if (!validateEmail(email)) {
    alert("Invalid email");

  } else if (!validatePhoneNum(number)) {
    alert("Invalid number");

  } else if (!validateImgUrl(imgUrl)) {
    alert("Invalid image url")

  } else if (name) {
    const contact = {
      name: name,
      email: email,
      number: number,
      imgUrl: imgUrl
    }

    return contact;

  } else {
    alert("Please fill out your contact's name");  
  }
  return false;
}

export default submitForm;