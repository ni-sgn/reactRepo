export function getContacts(){
    const contacts = JSON.parse(localStorage.getItem('contacts')) || []
    return contacts
 }

 export function addContact(contact){
     const contacts = getContacts()
     const contactArray = [...contacts, contact]
     localStorage.setItem('contacts', JSON.stringify(contactArray))
 }

 export function removeContact(contacts){
   localStorage.setItem('contacts', JSON.stringify(contacts));
 }

 export function editContact(contact)
 {
   const contacts = getContacts()
   contacts.filter((x) => x.id === contact.id)[0].name = contact.name
   localStorage.setItem('contacts', JSON.stringify(contacts));
 }