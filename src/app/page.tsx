import Image from "next/image";
import LandingPage from "./pages/landingpage";
import SecondPage from "./pages/secondpage";

export default function Home() {
  return (
    <div className="w-full pl-96 pr-96 flex-col flex">

      <LandingPage />
      <SecondPage />
    </div>
  );
}
