import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";

export default function ImageContainer() {
  return (
    <div id="image-container">
      <div>
        <img src={product1} />
      </div>
      <div>
        <img src={product1} />
        <img src={product2} />
        <img src={product3} />
        <img src={product4} />
      </div>
    </div>
  );
}
