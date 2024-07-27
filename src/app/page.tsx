import Image from "next/image";
import Navbar from "./components/Navbar";
import Name from "./components/Name";
import Prices from "./components/Prices";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Name />
      <Prices />
      <Projects />
    </div>
  );
}
