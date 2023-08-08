import Image from "next/image";
import { Delicious_Handrawn } from "next/font/google";

export default function ProfileCard() {
  return (
      <Image
        className="flex rounded-full"
        width={400}
        height={300}
        src="/headshot.png"
      />
  );
}
