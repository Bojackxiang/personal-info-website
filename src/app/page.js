"use client";

import Info from "@/components/info/Info";
import Education from "../components/education/Education";
import Divider from "@/components/common/Divider";
import WorkExperience from "@/components/experience/WorkExperience";
import AosFadeUp from "@/lib/aos-fade-up";
import TechStack from "@/components/tech-stack/TechStack";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="w-full bg-white m-auto">
      <Info />
      <AosFadeUp>
        <Divider>Education</Divider>
        <Education />
      </AosFadeUp>

      <AosFadeUp>
        <Divider>Tech Stack</Divider>
        <TechStack />
      </AosFadeUp>

      <AosFadeUp>
        <Divider>Experience</Divider>
        <WorkExperience />
        <Footer />
      </AosFadeUp>
    </div>
  );
}
