import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setToggleNav(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="p-3 justify-center sticky bg-[#f7f9fb] top-0 flex md:justify-between items-center w-full z-50 md:pt-7 md:pb-18 md:px-28">
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
          href="#experience"
          className="hover:border-b-2 hover:border-purple-800 cursor-pointer"
        >
          Work Experiences
        </a>
        <a
          href="#contact"
          className="hover:border-b-2 hover:border-purple-800 cursor-pointer"
        >
          Contact
        </a>
      </nav>

      {toggleNav && (
             <nav
             ref={navRef}
             className="absolute right-0 top-20 z-10 flex bg-[#f7f9fb] flex-col p-6 rounded-md md:hidden gap-5 text-semibold text-black text-lg"
           >
             
          <a onClick={() => setToggleNav(false)} href="#home" className="hover:border-b-2 hover:border-purple-800">
            Home
          </a>
          <a onClick={() => setToggleNav(false)} href="#about" className="hover:border-b-2 hover:border-purple-800">
            About
          </a>
          <a onClick={() => setToggleNav(false)} href="#project" className="hover:border-b-2 hover:border-purple-800">
            Projects
          </a>
          <a onClick={() => setToggleNav(false)} href="#experiences" className="hover:border-b-2 hover:border-purple-800">
            Work Experience
          </a>
          <a onClick={() => setToggleNav(false)} href="#contact" className="hover:border-b-2 hover:border-purple-800">
            Contact
          </a>
          <a
            onClick={() => setToggleNav(false)}
            href="https://drive.google.com/file/d/18zu75luWFepsq1EqqZ6PuIAAatTPXvmQ/view?usp=drive_link"
            target="_blank"
            className="bg-purple-800 text-white px-5 py-1 rounded-xl font-semibold hover:opacity-70"
          >
            Resume
          </a>
           </nav>
   
      )}
      <a
        href="https://drive.google.com/file/d/18zu75luWFepsq1EqqZ6PuIAAatTPXvmQ/view?usp=drive_link"
        target="_blank"
        className="hidden md:block bg-purple-800 text-white text-lg px-5 py-1 rounded-xl font-semibold hover:opacity-70"
      >
        Resume
      </a>
    </div>
  );
};

export default Header;
