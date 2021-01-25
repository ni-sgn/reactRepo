export function getContacts() {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || []
  return contacts
}

export function removeContact(id) {
  const contacts = getContacts().filter((contact) => contact.id !== id)
  localStorage.setItem('contacts', JSON.stringify(contacts))
  return contacts
}

export function addContact(contact) {
  const contacts = getContacts()
  const exist = contacts.find((x) => x.id == contact.id)
  let arr = []
  if (exist) {
    const { id, name, phone, email } = contact
    arr = contacts.map((item) => {
      if (item.id === id) {
        return {
          id,
          name,
          phone,
          email,
        }
      } else {
        return item
      }
    })
  } else {
    arr = [...contacts, contact]
  }
  localStorage.setItem('contacts', JSON.stringify(arr))
  return arr
}
