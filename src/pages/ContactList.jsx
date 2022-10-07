import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { contactData } from '../data/contactData';

const contacts = contactData;

export default function ContactList() {
  return (
    <div className="flex flex-col items-start justify-start max-h-full bg-gray-300">
      <Header />
      <div className="flex flex-row h-96 w-full">
        <div className="flex flex-col max-h-full w-full sm:w-80">
          <Sidebar contacts={contacts} />
        </div>
        <div className="hidden sm:flex sm:w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
