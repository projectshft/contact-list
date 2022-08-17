import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Contacts from './Contacts';

export default function Main() {
  const [users, setUsers] = useState([
    [
      {
        id: 70219577,
        name: 'Albert Einstein',
        image_url:
          'https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
        email: 'aeinstein@example.com',
        phone_number: '15555555555',
      },
    ],
  ]);
  return (
    <>
      <h1>{uuidv4()}</h1>
      <Routes>
        <Route index element={<Contacts users={users} />} />
        <Route path="contacts/*" element={<Contacts users={users} />} />
      </Routes>
    </>
  );
}
