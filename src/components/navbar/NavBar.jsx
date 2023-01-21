import { useState } from 'react';
import logo from '../../assets/svg/logo.svg';
import NavBarButtons from './NavBarButtons';
import NavBarMenu from './NavBarMenu';
const NavBar = () => {
  const [showNavbar, setShowNavBar] = useState(false);
  return (
    <header className="relative">
      <div className="container mx-auto p-4 py-8 lg:px-0 ">
        <div className="flex justify-between items-center ">
          <div className="overflow-hidden">
            <img src={logo} alt="Brand Logo" className="max-w-full" />
          </div>
          {!showNavbar ? <NavBarButtons className={`lg:hidden`} onClick={() => setShowNavBar(!showNavbar)} showNavbar={showNavbar} /> : undefined}
          <nav className={`${showNavbar ? 'w-full h-[100vh] absolute left-0 right-0 top-0 bg-slate-900/30 flex justify-end ' : 'hidden lg:flex'}`}>
            <div className="w-8/12 h-full flex flex-col items-start bg-white p-5">
              {showNavbar ? <NavBarButtons className={`mt-5 ml-auto`} onClick={() => setShowNavBar(!showNavbar)} showNavbar={showNavbar} /> : undefined}
              <NavBarMenu className={`py-32 flex flex-col gap-5 text-xl font-semibold text-very-dark-blue lg:flex-row lg:py-0`} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
