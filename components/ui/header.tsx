import Link from "next/link";
import Image from "next/image";
import NavItems from "./navitems";
import UserDropdown from "./userdropdown";
const Header: () => Element = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logposelogo.png"
            alt="Logpose Signals"
            width={32}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
          <span className="hidden md:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Logpose Signals
          </span>
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  );
};
export default Header;
