// components/Navbar.jsx
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/Hotel.png";

const Navbar = () => {
  return (
    <header className="w-full bg-white  shadow fixed top-0 z-50 border-b border-b-gray-300">
      <nav className="container mx-auto flex items-center justify-between py-3 ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Stay Swift Logo"
            width={50}
            height={50}
            priority
            className="h-14 w-auto"
          />
          <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-500">
            Stay Swift
          </h3>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center text-gray-700 font-medium">
          <li>
            <Link
              href="#recommended"
              className="hover:text-blue-600 transition"
            >
              Recommended Places
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-blue-600 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-600 transition">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/bookings" className="hover:text-blue-600 transition">
              Bookings
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
