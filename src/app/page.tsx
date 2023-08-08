import Image from "next/image";
import ProfileCard from "./components/card/ProfileCard";

export default function Home() {
  return (
    <div className="container flex items-center justify-center py-40">
      <div className="text-center flex">
        <div className="flex-col">
          <h1 className="text-4xl p-2">front end developer</h1>
          <hr/>
          <p className="justify-between p-2">JavaScript | Typescript | React | Nextjs</p>
          <div className=" p-10">
            <p className="text-lg">Hi, I'm Jessie and I build dynamic front end applications. Click the tools in the corner to check out my projects</p>
          </div>
        </div>
          <ProfileCard />
      </div>
    </div>
  );
}
