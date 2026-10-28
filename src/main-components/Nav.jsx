import cartIcon from "../assets/images/icon-cart.svg";
import profile from "../assets/images/image-avatar.png";

export default function Nav() {
  return (
    <section id="nav-bar">
      <h1>sneakers</h1>
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <img src={cartIcon} />
        <img src={profile} />
      </div>
    </section>
  );
}
