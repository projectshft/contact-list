import { Button } from "react-bootstrap";

const ContactCard = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://a.wattpad.com/useravatar/WassupBruh67.256.1228.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Name</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email</li>
        <li className="list-group-item">000-000-0000</li>
      </ul>

      <Button>Go Back</Button>
    </div>

    // <div className="card" style={{ width: "25%" }}>
    //   <img
    //     className="card-img-top"
    //     src="https://a.wattpad.com/useravatar/WassupBruh67.256.1228.jpg"
    //     alt="Card image cap"
    //   />
    //   <div className="card-body">
    //     <h5 className="card-title">Name</h5>
    //     <p className="card-text">Email</p>
    //   </div>
    // </div>
  );
};

export default ContactCard;
