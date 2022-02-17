import "./ContactForm.css";

const ContactForm = () => (
  <div className="container p-10">
    <h1 className="text-center mb-4 text-uppercase">Add New Contact</h1>
    <form>
      <div className="form-group mb-5">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          className="form-control"
          id="first-name"
          placeholder="Arianna"
        />
      </div>
      <div className="form-group mb-5">
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="last-name"
          placeholder="Reese"
        />
      </div>
      <div className="form-group mb-5">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="arianna@gmail.com"
        />
      </div>
      <div className="form-group mb-5">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          className="form-control"
          id="phone"
          aria-describedby="emailHelp"
          placeholder="919-230-4409"
        />
      </div>
      <div className="form-group mb-5">
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          className="form-control"
          id="image"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
    <div className="text-center">
      <button className="btn btn-lg btn-dark">Submit</button>
    </div>
  </div>
);

export default ContactForm;
