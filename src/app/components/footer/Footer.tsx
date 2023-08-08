import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <>
      <footer className="container-flex bg-slate-800 text-white justify-center flex py-10">
        <div className="flex space-x-40">
          <Link  href="https://www.linkedin.com/in/jessie-baker-a5b52a92/" target="_blank"><Image className="item invert hover:opacity-30" src="/github.svg"width={40} height={40} /></Link>
          <Link href="https://www.linkedin.com/in/jessie-baker-a5b52a92/" target="-blank"><Image className="item invert hover:opacity-30" src="/linkedin.svg"  height={40} width={40} /></Link>
          <span className="text-4xl drop-shadow-xl ml-4">
            <span className="text-blue-600">J</span>|B
          </span>
        </div>
      </footer>
    </>
  );
}
