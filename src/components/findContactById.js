const findContactById = (array, id) => {
  const newData = array.filter((cont) => parseInt(cont.id) === parseInt(id));
  return newData;
};

export default findContactById;
