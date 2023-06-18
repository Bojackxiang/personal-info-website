import Info from "@/components/info/Info";
import Education from "../components/education/Education";
import AutoTyper from "@/plugins/AutoTyper";

const nodeJs = ["NodeJs", 1000];
const reactJs = ["ReactJs", 1000];
const nextJs = ["NextJs", 1000];
const tailwindCss = ["TailwindCss", 1000];
const javascript = ["Javascript", 1000];
const typescript = ["Typescript", 1000];
const html = ["Html", 1000];
const css = ["Css", 1000];
const sass = ["Sass", 1000];
const git = ["Git", 1000];
const github = ["Github", 1000];
const firebase = ["Firebase", 1000];

const WORDS = [
  ...nodeJs,
  ...reactJs,
  ...nextJs,
  ...tailwindCss,
  ...javascript,
  ...typescript,
  ...html,
  ...css,
  ...sass,
  ...git,
  ...github,
  ...firebase,
];
const fontSize = "40px";
const display = "inline-block";

export default function Home() {
  return (
    <div className="w-full lg:w-4/5 bg-white sm:w-full m-auto">
      <AutoTyper words={WORDS} fontSize={fontSize} display={display} />
      <Info />
      <Education />
    </div>
  );
}
