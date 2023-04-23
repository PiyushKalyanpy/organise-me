import Image from "next/image";

const HeroDesk = () => {
    return (
        <div className="w-screen text-black h-1/2">
            {/* Hero content with CTA */}

            {/* Hero Image */}
            <div className="relative w-1/2 h-full items-center">
                <Image src="/heroImage.png" alt="logo" layout="fill" className="object-cover w-1/2" />
            </div>
        </div>
    );
}

export default HeroDesk;