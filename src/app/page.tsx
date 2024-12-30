import Image from "next/image";
import LandingPage from "./pages/landingpage";
import SecondPage from "./pages/secondpage";

export default function Home() {
  return (
    <div className="w-full items-center justify-center flex-col flex">
      <div className="w-[70%]">

        <LandingPage />
        <SecondPage />
      </div>
    </div>
  );
}
