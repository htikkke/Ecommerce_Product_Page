import { useState, useContext } from "react";
import { CartContext } from "../App";
import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";

import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";

const images = [img1, img2, img3, img4];
const thumbnails = [thumb1, thumb2, thumb3, thumb4];

export default function LightBox() {
  const { isLightBoxOpen } = useContext(CartContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  return <div id="light-box-container"></div>;
}
