import Image from "next/image";
import Navbar from "./components/Navbar";
import Name from "./components/Name";
import CV from "./components/CV";
import Prices from "./components/Prices";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Name />
      {/* <CV /> */}
      <Prices />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
}
