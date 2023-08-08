import Image from "next/image";
import ProfileCard from "./components/card/ProfileCard";

export default function Home() {
  return (
    <div className="container-flex items-center justify-center pt-20 h-screen">
      <div className="text-center items-center justify-center pt-20 flex">
        <div className="flex-col items-center pt-10">
          <h1 className="text-4xl p-2 hover:text-blue-600 transition-colors duration-600">
            front end developer
          </h1>
          <hr />
          <p className="justify-between p-2">
            JavaScript | Typescript | React | Nextjs
          </p>
          <p className="text-2xl pt-10">
            Hi, I'm Jessie. I build dynamic front-end applications.
            <br />
            Click the tools in the corner to check out my projects
          </p>
        </div>
        <ProfileCard />
      </div>
    </div>
  );
}
