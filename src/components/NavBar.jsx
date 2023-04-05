import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
import { MyContext } from "@/Context/context";
import Image from "next/image";
import myLogo from "../public/GV .svg";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const { darkMode, setDarkMode } = useContext(MyContext);
  return (
    <nav
      className={
        darkMode
          ? "dark py-10 mb-12 flex justify-between"
          : "py-10 mb-12 flex justify-between"
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
      </ul>
    </nav>
  );
}
