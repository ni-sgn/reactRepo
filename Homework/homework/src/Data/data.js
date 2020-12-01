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
   const contact_target = contacts.filter((x) => x.id === contact.id)[0]
   contact_target.name = contact.name
   contact_target.phone = contact.phone
   contact_target.email = contact.email
   localStorage.setItem('contacts', JSON.stringify(contacts));
 }