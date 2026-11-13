import closeIcon from "../assets/images/icon-close.svg";

export default function MobileMenu() {
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div id="mobile-menu-container" className="fixed inset-0 z-50 bg-black/75">
      <div id="nav-container">
        <img src={closeIcon} />
        {/* nav-items */}
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
