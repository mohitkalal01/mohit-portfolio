import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full px-6 xl:px-0 h-[90px] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4">
          
          {/* Logo / Name */}
          <Link href="/">
            <span className="text-white text-2xl font-bold tracking-wide hover:text-accent transition-colors duration-300 cursor-pointer">
              Mohit Kalal
            </span>
          </Link>

          {/* Social Icons */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
