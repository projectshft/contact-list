import React from "react";
import { useHistory } from "react-router-dom";

export default function ContactRow(props) {
  const { id, name, image_url, email, phone_number } = props;
  const history = useHistory();

  function changeRoute() {
    const path = `/contacts/${id}`;
    history.push(path, { name, image_url, email, phone_number });
  }

  return (
    <>
      <tr onClick={changeRoute}>
        <td>
          <img src={image_url} alt="person" height="150" />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone_number}</td>
      </tr>
    </>
  );
}
