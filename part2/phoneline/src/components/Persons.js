import React from "react";
const Persons = ({ filterContacts }) => {
    return(
      <>
        {filterContacts.map(contact => <p key={contact.Id}> {contact.name} {contact.number}</p>)}
      </>
    )
  }
export default Persons;
