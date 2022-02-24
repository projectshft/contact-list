import { Link, Outlet } from "react-router-dom";
import ConfirmDeleteModal from "./_confirm-delete-modal";
import React, {useState, useEffect} from "react";

export default function Home(){
    const [showModal, setShowModal] = useState(false);

    return(
        <div className="container">
            <ConfirmDeleteModal show={showModal} onClose={() => {setShowModal(false)}}/>
            <h2 className="text-center">Contact List</h2>
            <nav className="text-center">
                <Link to="/contacts">Contacts</Link> |{" "}
                <Link to="/contacts/new">Make New Contact</Link>
            </nav>
            <hr></hr>
            <button onClick={() => {setShowModal(true)}}>show modal</button>
            <Outlet />
        </div>
    )
}