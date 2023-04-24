// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Table from 'react-bootstrap/Table'; 

// const SubmitForm = (props) => {
//     const [name, setName] = useState(''); 
//     const [email, setEmail] = useState('');
//     const [profileURL, setProfileURL] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const history = useNavigate();

//     function handleSubmit(e) {
//         e.preventDefault();
//         const newContact = {
//             name: name,
//             email: email,
//             profileURL: profileURL,
//             phoneNumber: phoneNumber
//         };
//         props.onSubmit(newContact);
//         // redirect to home page
//         history.push('/');
//     }

//     function handleNameChange(e) {
//         setName(e.target.value);
//     }

//     function handleEmailChange(e) {
//         setEmail(e.target.value);
//     }

//     function handlePhoneNumberChange(e) {
//         setPhoneNumber(e.target.value);
//     }

//     function handleURLChange(e) {
//         setProfileURL(e.target.value);
//     }

//     return (
//         <>
//             <div className='new'> 
//                 <Table striped bordered hover>
//                     <tbody>
//                         <tr>
//                             <td>2</td>
//                             <td> 
//                                 <input 
//                                     img src={handleURLChange} alt="Profile" /></td>
//                             <td>
//                                 <input
//                                     value={name}
//                                     onChange={handleNameChange}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     value={email}
//                                     onChange={handleEmailChange}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     value={phoneNumber}
//                                     onChange={handlePhoneNumberChange}
//                                 />
//                             </td>
//                         </tr>
//                     </tbody>
//                 </Table>
//                 <button onClick={handleSubmit}>Submit</button>
//             </div>
//         </>
//     );
// };

// export default SubmitForm; 