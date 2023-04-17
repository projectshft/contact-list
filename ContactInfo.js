import React from "react";
import sample from "./sample.json"; 

console.log('hi'); 

const Info = () => {
    return(
    <>
        <h2>Contact</h2>
        <tbody>
            {sample.contacts.map((contactInfo) => (
                <tr className="preview" key={contactInfo.id}>
                    <td>{contactInfo.id}</td>
                    <td> <img src={contactInfo.profileUrl}
                        alt="Profile" />
                    </td>
                    <td>{contactInfo.name}</td>
                    <td>{contactInfo.email}</td>
                    <td>{contactInfo.phoneNumber}</td>
                </tr>
            ))}
        </tbody>
    </>  
    )
}

export default Info; 