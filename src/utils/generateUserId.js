const generateUserId = (array) => {
  const idArray = array.map((arr) => arr.id);
  const totalIds = 10000;
  const availableIds = Array.from(Array(totalIds).keys()).filter((num) => !idArray.includes(num));
  const randomNumber = Math.floor(Math.random() * totalIds);

  return availableIds[randomNumber];
};

export default generateUserId;

// needs to take in the array  of objects, pull all the id numbers, then generate a number randomly that doesn't exist already
// need to validate what is being sent into function
