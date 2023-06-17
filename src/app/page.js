import Info from "@/components/info/Info";
import Education from "../components/education/Education";

export default function Home() {
  return (
    <div className="w-full lg:w-4/5 bg-white sm:w-full m-auto">
      <Info />
      <Education />
    </div>
  );
}
