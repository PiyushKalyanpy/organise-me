import Image from "next/image";

const HeroDesk = () => {
  return (
    <div className="grid grid-cols-2   w-screen text-black min-h-screen z-50  overflow-hidden">
      {/* Hero content with CTA */}
      <div className="  my-auto">
        {/* heading with description*/}
        <div className="flex flex-col   gap-4 my-auto px-20">
          <h2 className="text-6xl font-bold">
            Maximize your productivity with
            <span className="text-6xl font-bold my-2  hover:rounded-3xl bg-gradient-to-r from-violet-600  to-pink-400 inline-block text-transparent bg-clip-text ">
              {" "}
              Organise Me
            </span>
          </h2>
          <h6 className="text-lg">
            Boost your productivity with Youtube Notes - a powerful tool to take
            notes and create timestamps while watching Youtube videos. Organize
            and share your notes easily with others.
          </h6>
          {/* cta buttons */}
          <div className=" flex flex-row gap-4  mt-10">
            <button className="flex items-center flex-row  gap-4 bg-gradient-to-r from-red-200 to-violet-500 hover:from-red-300 hover:to-violet-600 shadow-xl shadow-purple-200  p-4 rounded-3xl text-white font-medium text-lg cursor-pointer transition hover:scale-[1.04]">
              <p>Install Now</p>
              <i className="material-icons">arrow_forward</i>
            </button>
            <button className="flex flex-row hover:border-zinc-400 gap-4 border-2 border-zinc-200 cursor-pointer  p-4 rounded-3xl text-zinc-800 font-medium text-lg transition hover:scale-[1.04]">
              <p>How to use ?</p>
            </button>
          </div>
        </div>
      </div>
      {/* Hero Image */}
      <div className=" flex items-center  h-5/6 pt-20">
        <div className="relative m-auto w-full h-full  items-center">
          <div className="w-1/2 h-1/2">
            <Image
              src="/heroImage.png"
              alt="logo"
              layout="fill"
              className="object-scale-down pt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesk;
