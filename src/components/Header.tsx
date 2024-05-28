import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="p-3 justify-center sticky bg-[#f7f9fb] top-0 flex md:justify-between items-center w-full z-10 md:pt-7 md:pb-18 md:px-28">
      <div className="flex gap-14 shadow-md p-4 rounded-md justify-between items-center md:shadow-none md:p-0 md:rounded-none">
        <p className="font-bold text-2xl text-black/70 curso(r-pointer">
          SHEBA
        </p>
        <HiMenuAlt3
          className="md:hidden text-2xl"
          onClick={() => setToggleNav(!toggleNav)}
        />
      </div>
      <nav className="hidden md:flex gap-5 text-semibold text-black text-lg">
        <a
          href="#home"
          className="hover:border-b-2 hover:border-purple-800 cursor-pointer"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:border-b-2 hover:border-purple-800 cursor-pointer"
        >
          About
        </a>
        <a
          href="#project"
          className="hover:border-b-2 hover:border-purple-800 cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:border-b-2 hover:border-purple-800 cursor-pointer"
        >
          Contact
        </a>
      </nav>

      {toggleNav && (
        <nav className="absolute right-0 z-10 top-0 flex bg-transparent flex-col p-6 rounded-md md:hidden gap-5 text-semibold text-black text-lg">
          <a
            href="#home"
            className="hover:border-b-2 hover:border-purple-800 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:border-b-2 hover:border-purple-800 cursor-pointer"
          >
            About
          </a>
          <a
            href="#project"
            className="hover:border-b-2 hover:border-purple-800 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:border-b-2 hover:border-purple-800 cursor-pointer"
          >
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/19fcZDeZqPA6_rv6jW3GxZ4ivCnz5ifyu/view?usp=drive_link"
            target="_blank"
            className=" md:hidden bg-purple-800 text-white text-lg px-5 text-start py-1 rounded-xl font-semibold hover:opacity-70"
          >
            Resume
          </a>
        </nav>
      )}
      <a
        href="https://drive.google.com/file/d/19fcZDeZqPA6_rv6jW3GxZ4ivCnz5ifyu/view?usp=drive_link"
        target="_blank"
        className="hidden md:block bg-purple-800 text-white text-lg px-5 py-1 rounded-xl font-semibold hover:opacity-70"
      >
        Resume
      </a>
    </div>
  );
};

export default Header;
