import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center text-black justify-between flex-wrap bg-white">
      <span className="text-4xl p-5 drop-shadow-xl">
        <span className="text-blue-600">J</span>|B
      </span>
      <div className="flex justify-between px-5">
        <Link className="px-6 drop-shadow-xl" href="/">
          <Image
            className="hover:opacity-20 drop-shadow-xl height:auto width:auto"
            src="/house.svg"
            alt="home"
            width={30}
            height={30}
          />
        </Link>
        <Link className="px-6 drop-shadow-xl" href="/projects">
          <Image
            className="hover:opacity-20 drop-shadow-xl"
            src="/projects.svg"
            alt="home"
            width={30}
            height={30}
          />
        </Link>
        <Link className="px-6 drop-shadow-xl" href="/contact">
          <Image
            className="hover:opacity-20 drop-shadow-xl"
            src="/contact.svg"
            alt="home"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </nav>
  );
}
