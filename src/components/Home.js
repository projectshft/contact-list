import Contacts from "../contact.json"


const HomePage = () => {
  const contacts = [
    {id: 0, name: "Benjamin Corbett", phone: "6093330000" email: "b@yahoo.com" image: "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"}
  ]
  return ( 
    <div className="home">
      
      <br /> <br />

      {
        Contacts.map( contact => {
          return(<div className="list" key={contact.id}>
            {contact.name}
            {contact.phone}
            {contact.email}
          </div>)
        })
      }
    </div>
   );
}
 
export default HomePage;