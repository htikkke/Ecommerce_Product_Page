import cartIcon from "../assets/images/icon-cart.svg";
import profile from "../assets/images/image-avatar.png";

export default function Nav() {
  return (
    <nav
      id="nav-bar"
      className="flex items-center justify-between py-8 border-b border-grayish-blue
       max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-14">
        <h1 className="font-bold font-sans text-3xl text-black tracking-tight">
          sneakers
        </h1>
        <ul className="flex items-center gap-8">
          <li className="text-dark-grayish-blue text-sm font-sans cursor-pointer">
            Collections
          </li>
          <li className="text-dark-grayish-blue text-sm font-sans cursor-pointer">
            Men
          </li>
          <li className="text-dark-grayish-blue text-sm font-sans cursor-pointer">
            Women
          </li>
          <li className="text-dark-grayish-blue text-sm font-sans cursor-pointer">
            About
          </li>
          <li className="text-dark-grayish-blue text-sm font-sans cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-10">
        <img src={cartIcon} className="cursor-pointer" alt="cart" />
        <img
          src={profile}
          className="w-12 h-12 rounded-full cursor-pointer"
          alt="Profile"
        />
      </div>
    </nav>
  );
}
