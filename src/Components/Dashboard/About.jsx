import MainSectionOfAbout from "./About/MainSectionOfAbout";
import SidebarOfAbout from "./About/SidebarOfAbout";
import MainStructure from "./MainStructure";

const About = () => {
  return (
    <MainStructure padding={"p-0"}>
      <div className="flex justify-center items-stretch h-full flex-1 flex-wrap md:overflow-y-auto rounded-xl">
        <SidebarOfAbout />
        <MainSectionOfAbout />
      </div>
    </MainStructure>
  );
};

export default About;
