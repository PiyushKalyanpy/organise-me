import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { NavbarDesk, NavbarMob } from "@/components/exporter";
import HeroDesk from "@/components/desktop/HeroDesk";

export default function Home() {
  return (
    <>
      <Head>
        <title>Organise Me</title>
      </Head>
      <main className="w-screen min-h-screen h-full bg-white">
        <Image
          src="/bghead.png"
          alt="logo"
          layout="fill"
          className="border-2 fixed"
        />

        {/* for desktops */}
        <div className="hidden md:block">
          <NavbarDesk />
          <HeroDesk />
        </div>
        {/* for mobile devices */}
        <div className="md:hidden ">asdad</div>
      </main>
    </>
  );
}
