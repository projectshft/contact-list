import { createContext, useContext, useReducer } from "react";

const ContactContext = createContext(null);
const ContactDispatchContext = createContext(null);

export function ContactProvider({children}) {
  const [contacts, dispatch] = useReducer(
    contactReducer,
    originalcontacts
  );

  return (
    <ContactContext.Provider value={contacts}>
      <ContactDispatchContext.Provider value={dispatch}>
        {children}
      </ContactDispatchContext.Provider>
    </ContactContext.Provider>
  )
}

export function useContacts() {
  return useContext(ContactContext);
}

export function useContactsDispatch() {
  return useContext(ContactDispatchContext)
}

function contactReducer(contacts, action) {
  switch (action.type) {
    case "added": {
      return [...contacts, {
      id: action.id,
      name: action.name,
      phone: action.phone,
      email: action.email,
      image: action.image
      }];
    }
    case "deleted": {
      return contacts.filter(e => e.id !== action.id);
    }
    default: {
      throw Error("Unknow" + action.type)
    }
  }
}

const originalcontacts = [
  {id: 0, name: "Benjamin Corbett", phone: "6099254444", email: "b@yahoo.com", image: "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"},
  {id: 1, name: "Laura Corbett", phone: "6092229999", email: "laura@yahoo.com", image: "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"}
]

