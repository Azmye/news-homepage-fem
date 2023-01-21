const NavBarMenu = ({ className }) => {
  return (
    <ul className={className}>
      <li className="cursor-pointer hover:text-soft-red ">Home</li>
      <li className="cursor-pointer hover:text-soft-red ">New</li>
      <li className="cursor-pointer hover:text-soft-red ">Popular</li>
      <li className="cursor-pointer hover:text-soft-red ">Trending</li>
      <li className="cursor-pointer hover:text-soft-red ">Categories</li>
    </ul>
  );
};

export default NavBarMenu;
