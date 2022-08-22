const formChecker = (value) => {
  if (value.trim().length === 0) {
    console.log(value);
    return false;
  }
  return true;
};

export default formChecker;
