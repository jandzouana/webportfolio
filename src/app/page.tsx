import Image from "next/image";
import "./main.css";
import Sidebar from "@/app/components/sidebar/Sidebar";
import About from "@/app/components/about/About";
import Portfolio from "@/app/components/portfolio/Portfolio";
import Home from "@/app/components/home/Home";

export default function Home() {
  return (
      <>
        <Sidebar/>
        <main className="">
          <Home/>
          <About/>

        </main>
      </>

  );
}
