/* eslint-disable no-unused-vars */
// acomponent with a state of contacts with a function for adding new contacts, which is displaying contact list itself and switching to contact list ?

import React, { useState } from 'react';
import Main from './Main';
import Header from './Header';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

// const App = () => {
//   const [contacts, setContacts] = useState([
//     {
//       id: 70219577,
//       name: 'Johnny Depp',
//       imageUrl:
//         'https://i0.wp.com/www.giantfreakinrobot.com/wp-content/uploads/2022/05/johnny-depp-benny-joon.jpg?ssl=1',
//       email: 'johnny@example.com',
//       phoneNumber: '1555',
//     },
//     {
//       id: 70219578,
//       name: 'Albert Einstein',
//       imageUrl: 'https://scx1.b-cdn.net/csz/news/800a/2015/alberteinste.jpg',
//       email: 'aeinstein@example.com',
//       phoneNumber: '155',
//     },
//   ]);

//   const addContact = (contact) => {
//     const newContacts = [...contacts, contact];
//     return setContacts(newContacts);
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-md-center">
//         <div className="col-md-auto">
//           <h1 className="header">Contact list</h1>
//         </div>
//         <Switch>
//           <Route
//             path="/contacts"
//             render={() => (
//               <Contacts contacts={contacts} addContact={addContact} />
//             )}
//           />
//         </Switch>
//       </div>
//     </div>
//   );
// };

export default App;
