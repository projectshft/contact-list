
const NewContact = (props) => {

  // New Contact form: all fields are required, according to type.
  
  return ( 
  <form onSubmit = {props.HandleNewContactSubmit} className = "col-md-4 offset-md-4">
    <h3>Add Contact</h3>
    <span>
     <input required name = "name" type="name" className="form-control" id="InputName" placeholder="Name"/>
     <input required name = "email" type="email" className="form-control" id="InputEmail1"  placeholder="Email"/>
     <input required name = "phoneNumber" type="tel" className="form-control" id="InputPhoneNumber" placeholder="Phone Number"/>
     <input required name = "url" type="url" className="form-control" id="InputImageUrl" placeholder="Image Url"/>
    </span>
    <button type="submit" className="btn btn-primary">Add Contact</button>
  </form>
)
}

export default NewContact