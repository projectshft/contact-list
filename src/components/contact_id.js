import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';

const ContactId = (props) => {
  const testData = props.passFromMain;



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="col border">
              <img src={testData[0].image_url} className="selected-prof-pic rounded mx-auto d-block" alt=""></img>
              <h4 className="text-center">{testData[0].name}</h4>
              <p className="text-center fs-5 selected-p">{testData[0].email}</p>
              <p className="text-center fs-5 selected-p">{testData[0].phone_number}</p>
            </div>
            <Link to="/" type="button" className="btn btn-warning">Back</Link>
          </div>
        </div>
      </div>
    </div>
  )  

};

export default ContactId