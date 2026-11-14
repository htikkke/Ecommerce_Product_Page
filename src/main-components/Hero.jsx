import ImageContainer from "../side-components/ImageContainer";
import TextContainer from "../side-components/TextContainer";

export default function Hero() {
  return (
    <section
      id="hero-section"
      aria-label="Product Showcase"
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto py-12 max-[440px]:py-0"
    >
      <ImageContainer />
      <TextContainer />
    </section>
  );
}
