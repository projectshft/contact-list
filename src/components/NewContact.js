import DragDrop from "./DragDrop";

export default function NewContact() {
  return (
  <>
    <div className="container-fluid">
      <h1 className="text-center">Create a new contact</h1>
      <div className="row justify-content-md-center">
      <form className="col-md-8">
        <div className="mb-2">
          <label htmlFor="nameInput" className="form-label">Name</label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="mb-2">
          <label htmlFor="phoneInput" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phoneInput" />
        </div>
        <div className="mb-2">
          <label htmlFor="emailInput" className="form-label">Email</label>
          <input type="email" className="form-control" id="emailInput" />
        </div>
      </form>
      </div>
    </div>
    <DragDrop />
  </>
  );
}