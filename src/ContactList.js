import React from "react";
import ContactTable from "./ContactTable.js"
import ButtonAddContact from "./ButtonAddContact.js"

export default function ContactList() {
  return (
    <div className="ContactList">

      <ButtonAddContact />

      <ContactTable />
      
    </div>
  );
}

