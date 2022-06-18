const AddContacts = () => {
  return (
    <form>
      <div className="form-group">
        <label for="name-input">Full Name</label>
        <input type="text" className="form-control" id="name-input"/>
      </div>
      <div className="form-group">
        <label for="email-input">Email Address</label>
        <input type="text" className="form-control" id="email-input"/>
      </div>
      <div className="form-group">
        <label for="phone-input">Phone Number</label>
        <input type="number" className="form-control" id="phone-input"/>
      </div>
      <div className="form-group">
        <label for="img_url">Image URL</label>
        <input type="email" className="form-control" id="img_url"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit Contact
      </button>
      <button class="btn btn-secondary">Go Back
      </button>
    </form>
  );
};

export default AddContacts;