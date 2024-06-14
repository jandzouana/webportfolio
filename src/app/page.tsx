import Image from "next/image";
import "./main.css";
import Sidebar from "@/app/components/sidebar/Sidebar";
import About from "@/app/components/about/About";
import Portfolio from "@/app/components/portfolio/Portfolio";
import Landing from "@/app/components/landing/Landing";
import Head from "next/head";
import "./assets/css/simple-line-icons.css";

export default function Home() {
  return (
      <>
        <Sidebar/>
        <main className="">
            <Landing/>
            <About/>
            <Portfolio/>
        </main>
      </>

  );
}
