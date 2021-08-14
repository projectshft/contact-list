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

const Contact = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="col border">
            <img src={testData.contacts[0].image_url} className="selected-prof-pic rounded mx-auto d-block" alt=""></img>
            <h4 className="text-center">{testData.contacts[0].name}</h4>
            <p className="text-center fs-5 selected-p">{testData.contacts[0].email}</p>
            <p className="text-center fs-5 selected-p">{testData.contacts[0].phone_number}</p>
          </div>
          <Link to="/" type="button" className="btn btn-warning">Back</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Contact