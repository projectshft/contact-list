import React from "react";

export default function Contact(props) {
  const { name, image_url, email, phone_number } = props;

  return (
    <>
      <tr>
        <td>
          <img src={image_url} alt="person" height="150" />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone_number}</td>
        <td>
          <button className="btn btn-sm btn-outline-info">Edit</button>
          <button className="btn btn-sm btn-outline-danger">Delete</button>
        </td>
      </tr>
    </>
  );
}
