import Image from "next/image";
import Navbar from "./components/Navbar";
import Name from "./components/Name";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Name />
    </div>
  );
}
