import "./context"
import Firebase from "firebase"

function writeToFireBaseDb(contacts)
{
  Firebase.database()
    .ref("/")
    .set(contacts)
  console.log("DATA SAVED")
}

export function getContacts()
{
  let contacts = []
  let ref = Firebase.database().ref("/")
  ref.on("value", snapshot => {
    contacts = snapshot.val()
  })
  return contacts
}

export function removeContact(id)
{
  const contacts = getContacts().filter((contact) => contact.id !== id)
  writeToFireBaseDb(contacts)
  return contacts
}

export function addContact(contact) {
  if(contact)
  {
    const contacts = getContacts() || []
    const exist = contacts.find((x) => x.id === contact.id)
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
    writeToFireBaseDb(arr)
    return arr
  }else return []
}
