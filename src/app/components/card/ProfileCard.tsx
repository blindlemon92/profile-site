import Image from "next/image";
import { Delicious_Handrawn } from "next/font/google";

const handrawn = Delicious_Handrawn({ weight: "400", subsets: ["latin"] });

export default function ProfileCard() {
  return (
    <div className={handrawn.className}>
      <div
        id="profile"
        className="max-w-sm overflow-hidden rounded-xl bg-white text-black p-3"
      >
        <Image
          className="flex shadow-lg"
          width={400}
          height={300}
          src="/headshot.png"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Jessie Ray Baker</div>
          <hr />
          <p>asdf asdfasdf asd fasd sadf asdf dsaf asdf sadf dsaa dsaf asdf sdfg sdfg asd ga be vas fh na sg b TDARGAJKLSDF</p>
        </div>
      </div>
    </div>
  );
}
