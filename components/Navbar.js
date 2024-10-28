// components/Navbar.js
import Link from 'next/link';
import TelegramIcon from '../components/TelegramIcon';
// import "../../global.css";
export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r sticky top-0 z-50 from-gray-900 via-sky-400 to-gray-900  bg-opacity-70  mx-12 rounded-lg backdrop-blur-lg flex justify-between p-4 shadow-lg">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold w-auto text-center">TeleSumts Official </h1>
        <TelegramIcon size={40} /></div>
      <ul className="flex justify-between space-x-4 my-auto ">
        <li>
          <Link className=' text-white font-bold text-xl' href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className=' text-white font-bold text-xl' href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className=' text-white font-bold text-xl' href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
