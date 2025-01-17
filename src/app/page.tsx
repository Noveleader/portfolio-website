"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Name from "./components/Name";
import CV from "./components/CV";
import Prices from "./components/Prices";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";
import MagnetLines from "./components/MagnetLines";

export default function Home() {
  return (
    <div>
      <SplashCursor />
      {/* <MagnetLines /> */}
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
