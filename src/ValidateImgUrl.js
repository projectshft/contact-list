// Check if the img url is valid
const validateImgUrl = (url) => {
  return url.match(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/);
}

export default validateImgUrl;