const ContactNew = () => {
  return (
    <div>
      <h1 className="text-center mt-5">Contact List</h1>
      <form className="col-md-6 offset-md-3">
        <div class="form-group mt-5">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Enter Full Name"
          />
        </div>
        <div class="form-group mt-3">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control mt-2"
            placeholder="Enter Email"
          />
        </div>
        <div class="form-group mt-3">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Enter Phone"
          />
        </div>
        <div class="form-group mt-3">
          <label>Image URL</label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Image URL"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactNew;
