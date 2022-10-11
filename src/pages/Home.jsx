import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex h-screen w-screen items-center justify-center bg-blue-600">
    <Link
      to="/contacts"
      className="animate-bounce rounded-md border-2 border-white bg-white p-4 text-blue-600 shadow-2xl hover:rounded-xl hover:bg-blue-600 hover:px-6 hover:text-white"
    >
      ENTER
    </Link>
  </div>
);

export default Home;
