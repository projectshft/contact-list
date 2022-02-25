import { Link, Outlet } from "react-router-dom";

export default function Home(){

    return(
        <div className="container">
            <h2 className="text-center">Contact List</h2>
            <nav className="text-center">
                <Link to="/contacts">Contacts</Link> |{" "}
                <Link to="/contacts/new">Make New Contact</Link>
            </nav>
            <hr></hr>
            <Outlet />  
        </div>
    )
}