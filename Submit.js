import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table'; 

const SubmitForm = (props) => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [profileURL, setProfileURL] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const history = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newContact = {
            name: name,
            email: email,
            profileURL: profileURL,
            phoneNumber: phoneNumber
        };
        props.onSubmit(newContact);
        // redirect to home page
        history.push('/');
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value);
    }

    function handleURLChange(e) {
        setProfileURL(e.target.value);
    }

    return (
        <>
            <div className='new'> 
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td> 
                                <input 
                                    img src={handleURLChange} alt="Profile" /></td>
                            <td>
                                <input
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </td>
                            <td>
                                <input
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </td>
                            <td>
                                <input
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
};

export default SubmitForm;

// import { useState } from "react";
// //import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from 'react-bootstrap/Table'; 
// import { Link } from "react-router-dom";

// const SubmitForm = (prop) => {
//     const [name, email, profileURL, phoneNumber] = useState(''); 
    
//     function HandleNameChange(e) {
//         name(e.target.value);
//     }

//     function HandleEmailChange(e) {
//         email(e.target.value);
//     }

//     function HandlePhoneNumberChange(e) {
//         phoneNumber(e.target.value);
//     }

//     function HandleURLChange(e) {
//         profileURL(e.target.value);
//     }

//     return (
//         <>
//             <div className='new'> 
//                 <Table striped bordered hover>
//                 <tbody>
//                     <tr>
//                     <td>1</td>
//                     <td> <img src={HandleURLChange} alt="Profile" /></td>
//                     <td>
//                         <input
//                         value={name}
//                         onChange={HandleNameChange}>
//                         </input>
//                     </td>
//                     <td>
//                     <input
//                         value={email}
//                         onChange={HandleEmailChange}>
//                         </input>
//                     </td>
//                     <td>
//                     <input
//                         value={phoneNumber}
//                         onChange={HandlePhoneNumberChange}>
//                         </input>
//                     </td>
//                     </tr>
//                 </tbody>
//                 </Table>
//         </div>
//         </>
//     )
// }

// export default SubmitForm; 