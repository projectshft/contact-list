import ContactList from "./ContactList";
import useAxios from "./axios";




const Home = () => {
  const {data: contacts} = useAxios("db/users.json")
  return (
    <div className="home">
      {contacts && <ContactList contacts={contacts} title="Contacts"/>}
    </div>
    );
}
 
export default Home;