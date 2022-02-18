import ContactForm from "./components"


const addContact = (contactObject) => {
    const newContact = {
      ...contactObject,
      id: Math.round(Math.random() * 100000000).toString();
    };
    console.log(newContact);
    // setContact((contacts) => {
    //   return [...contacts, contact];
    // });

  
 

  return (
      <div className = 'new-contact'>
          <ContactForm onAddContact={addContact} />
      </div>
  );
  }