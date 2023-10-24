// Write functionality for contacts here

// Generate unique id for contact function (add id to data object in NewContact)
export const generateContactId = () => {
  return Math.round(Math.random() * 100000000).toString(36);
};

// addContact function 
// Once data is received by contact, add to localStorage

generateContactId();