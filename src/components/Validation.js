function checkImage(url) {
  const image = new Image();

  image.onerror = function () {
    alert('The Image URL imputted is invalid and the image has been replaced');
  };
  image.src = url;
}

function validateInput(user) {
  // The only required field I have set is the name of the contact. The image will auto-replace itself only if the link is invalid
  if (user.name.length > 0) {
    checkImage(user.image_url);
    return true;
  }
  alert('Please enter a name for this contact (required)');
  return false;
}

export default validateInput;
