const NavBarButtons = ({ showNavbar, onClick, className }) => {
  return (
    <button className={`flex flex-col ${className}`} onClick={onClick}>
      <span className={`w-12 h-1 bg-slate-900 transition-all duration-300 ease-in-out ${showNavbar ? 'rotate-45 translate-y-2' : ''}`}></span>
      <span className={`w-12 h-1 my-1 bg-slate-900 transition-all duration-300 ease-in-out ${showNavbar ? 'opacity-0' : ''}`}></span>
      <span className={`w-12 h-1 bg-slate-900 transition-all duration-300 ease-in-out ${showNavbar ? '-rotate-45 -translate-y-2' : ''}`}></span>
    </button>
  );
};

export default NavBarButtons;
