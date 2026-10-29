import Nav from "./main-components/Nav";
import Hero from "./main-components/Hero";

export default function App() {
  return (
    <div
      id="main-container"
      className="w-full min-h-screen bg-white px-20 py-5"
    >
      <Nav />
      <Hero />
    </div>
  );
}
