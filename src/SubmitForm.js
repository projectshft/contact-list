import validateEmail from "./ValidateEmail";
import validatePhoneNum from "./ValidateNumber";
import validateImgUrl from "./ValidateImgUrl";

// Function that validates form submissions
const submitForm = (name, email, number, imgUrl) => {
  if (!validateEmail(email)) {
    alert("Invalid email");

  } else if (!validatePhoneNum(number)) {
    alert("Invalid number");

  } else if (name) {
    // If the img url isn't valid, set default img
    if (!validateImgUrl(imgUrl))
      var picUrl = 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';
    else
      var picUrl = imgUrl

    const contact = {
      name: name,
      email: email,
      number: number,
      imgUrl: picUrl
    }

    return contact;

  } else {
    alert("Please fill out your contact's name");
    return false;
  }
}

export default submitForm;