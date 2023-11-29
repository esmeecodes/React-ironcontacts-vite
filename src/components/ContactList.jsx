import contacts from "../contacts.json";
import { useState } from "react";

function ContactList() {
  const [displayedContacts, setDisplayedContacts] = useState(
    contacts.slice(0, 5)
  );
  const remainingContacts = contacts.slice(5);

  // create the code to create a random contact
  const getRandomContact = (remainingContacts) => {
    const index = Math.floor(Math.random() * remainingContacts.length);
    return remainingContacts[index];
  };

  const addRandom = () => {
    if (remainingContacts.length > 0) {
      const randomContact = getRandomContact(remainingContacts);
      setDisplayedContacts((prevDisplayedContacts) => [
        ...prevDisplayedContacts,
        randomContact, // add the random to the array of displayed contacts
      ]);
    }
  };

  const deleteContact = (contactId) => {
    const filteredContacts = displayedContacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setDisplayedContacts(filteredContacts);
  };

  return (
    <div className="contactList">
      <h1>IronContacts</h1>
      <button onClick={addRandom} className="btn-addRandom">
        add random
      </button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        {displayedContacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="contactPhoto" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="btn-remove"
                >
                  remove
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ContactList;
