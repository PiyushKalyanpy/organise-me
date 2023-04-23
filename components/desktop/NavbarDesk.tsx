import Image from "next/image";
import Link from "next/link";

const NavbarDesk = () => {
  return (
    <div className="fixed z-10 flex flex-row justify-between text-zinc-700 w-screen h-20 bg-white/20 border-b-2 border-white backdrop-blur-lg items-center px-16">
      {/* brand logo */}
      <div className=" flex flex-row w-fill h-20 items-center">
        <Image src="/organiseme.svg" alt="logo" width={80} height={80} />
        <h1 className="text-xl font-semibold  flex flex-row ">Organise Me</h1>
      </div>
      {/* nav links */}
      <div>
        <ul className="flex flex-row gap-4">
          <Link href="/">Home </Link>
          <Link href="#about">About Us </Link>
          <Link href="#features">Features </Link>
          <Link href="#howtouse">How to use </Link>
          <Link href="#contact">Contact Us </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDesk;
