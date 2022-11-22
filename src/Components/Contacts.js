import ContactNew from "./ContactNew";
// import ContactList from "./ContactList";
import { useState } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import ContactCard from "./ContactCard";

const Contacts = (newContact) => {
  const test1 = {
    id: 101,
    name: "Armando T",
    image_url:
      "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
    email: "atorr233@gmail.com",
    phone_number: "3057737986",
  };

  const test2 = {
    id: 102,
    name: "John Jacob",
    image_url:
      "https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s1100-c50.jpg",
    email: "jdog@gmail.com",
    phone_number: "5033667986",
  };

  const test3 = {
    id: 405,
    name: "Richard James",
    image_url: "https://static.tvtropes.org/pmwiki/pub/images/homeimage.jpg",
    email: "otheremail@gmail.com",
    phone_number: "8485968298",
  };

  const groupedContacts = [test1, test2, test3];

  const contacts = groupedContacts.map((item) => (
    <tr>
      <td>
        <img src={item.image_url} width="150px"></img>
      </td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone_number}</td>
    </tr>
  ));

  return <tbody>{contacts}</tbody>;
};

export default Contacts;
