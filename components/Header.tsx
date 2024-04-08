import Image from "next/image";
import Link from "next/link";
// config
import config from "@/config/cities";

const Header = () => {
  return (
    <header className="flex-col sm:flex-row flex justify-between items-start p-3">
      <div>
        <h2 className="font-normal text-3xl sm:text-4xl text-black">
          Explore Cities
        </h2>
      </div>
    </header>
  );
};

export default Header;
