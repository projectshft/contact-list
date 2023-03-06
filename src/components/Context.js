import { createContext, useContext, useReducer } from "react";

const ContactContext = createContext(null);
const ContactDispatchContext = createContext(null);

export function ContactProvider({ children }) {
  const [contacts, dispatch] = useReducer(
    contactReducer,
    originalcontacts.allContacts
  );

  return (
    <ContactContext.Provider value={contacts}>
      <ContactDispatchContext.Provider value={dispatch}>
        {children}
      </ContactDispatchContext.Provider>
    </ContactContext.Provider>
  );
}

export function useContacts() {
  return useContext(ContactContext);
}

export function useContactsDispatch() {
  return useContext(ContactDispatchContext);
}

function contactReducer(contacts, action) {
  switch (action.type) {
    case "added": {
      return [
        ...contacts,
        {
          id: action.id,
          name: action.name,
          phone: action.phone,
          email: action.email,
          image: action.image,
        },
      ];
    }
    default: {
      throw Error("Unknown" + action.type);
    }
  }
}

const originalcontacts = {
  allContacts: [
    {
      id: 0,
      name: "Benjamin Corbett",
      phone: "(609)925-4444",
      email: "b@yahoo.com",
      image:
        "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
    },
    {
      id: 1,
      name: "Laura Corbett",
      phone: "(609) 222-9999",
      email: "laura@yahoo.com",
      image:
        "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
    },
  ],
};

// const mapNeed = originalcontacts.allContacts
