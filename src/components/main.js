import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const testData = {
  "contacts": [
    {
      "id": 70219577,
      "name": "Albert Einstein",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/800px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      "email": "aeinstein@example.com",
      "phone_number": "15555555555"
    }
  ]
};

const Index = () => (
  <div>
    <div className="container">
      <Link to="/contacts/new" type="button" className="btn btn-primary">Add Contact</Link>
      <Link to="contacts/id" type="button" className="btn btn-warning">Ind. Page</Link>

    <table className="table table-bordered table-hover">
    <thead className="table table-light">
      <tr>
        <th scope="col">Profile Pic</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src={testData.contacts[0].image_url} className="prof-pic" alt=""></img></td>
        <td>{testData.contacts[0].name}</td>
        <td>{testData.contacts[0].email}</td>
        <td>{testData.contacts[0].phone_number}</td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
);

export default Index