import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import {
  Contact,
  FeatureSection,
  Footer,
  NavbarDesk,
  NavbarMob,
} from "@/components/exporter";
import HeroDesk from "@/components/desktop/HeroDesk";
import "material-icons/iconfont/material-icons.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Organise Me</title>
      </Head>
      <main className="w-screen h-full  bg-white overflow-x-hidden">
        {/* background */}

        <div className="relative h-screen">
          <div className=" absolute inset-0 z-0 bg-white blur-xl overflow-auto">
            <Image
              src="/bghead.png"
              alt="logo"
              layout="fill"
              objectFit="cover"
              className="fixed object-scale-down scale-[0.8] "
            />
          </div>
          <div className="w-screen relative z-10 flex items-center justify-center h-full">
            <div className="hidden md:block gap-10 md:flex-col z-10 h-full">
              <NavbarDesk />
              <HeroDesk />
              <FeatureSection />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
        {/* for desktops */}

        {/* for mobile devices */}
        <div className="md:hidden ">asdad</div>
      </main>
    </>
  );
}
