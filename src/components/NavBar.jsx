import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
import { MyContext } from "@/Context/context";
import Image from "next/image";
import myLogo from "../public/GV .svg";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {

  const router = useRouter();
  const { darkMode, setDarkMode } = useContext(MyContext);
  const [ dropMenu, setDropMenu ] = useState(false)
  return (
    <div>
    <nav
      className={
        darkMode
          ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark flex justify-between"
          : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between"
      }
    >
      <Image src={myLogo} width={100} height={100} />
      <ul className="flex items-center">
        <li>
          {darkMode ? (
            <BsFillSunFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          )}
        </li>
        <div className="hidden md:block">
        {router.pathname !== "/" && (
          <Link
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="/"
          >
            Home
          </Link>
        )}
        {router.pathname !== "/projects" && (
          <Link
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="/projects"
          >
            Projects
          </Link>
        )}
        {router.pathname !== "/about" && (
          <Link
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          href="/about"
        >
          Sobre Mim
        </Link>
        )}
        </div>

        <div className="mr-2 flex md:hidden">
          <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-400 focus:bg-gray-700 focus:text-gray-900 transition duration-250 ease-in-out" aria-label="Menu" aria-expanded="false" onClick={ () => setDropMenu(!dropMenu) } type="button">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={!dropMenu ? "hidden md:hidden": "md:hidden"}>
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <a href="/" className="hover:bg-gray-400 text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-250 ease-in-out">Home</a>
            <a href="/projects" className="hover:bg-gray-400 text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-250 ease-in-out">Meus Projetos</a>
            <a href="/about" className="hover:bg-gray-400 text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-250 ease-in-out">Sobre Mim</a>
          </div>

        </div>  
      </ul>
    </nav>
    </div>
  );
}
