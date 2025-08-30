import ProfileSection from "./ProfileSection";
import ResumeUpload from "./ResumeUpload";
import SkillsInAbout from "./SkillsInAbout";

const SidebarOfAbout = () => {
  return (
    <div className="h-full w-full md:w-4/12 rounded-s-xl border-e-2">
      <ProfileSection />
      <ResumeUpload />
      <SkillsInAbout />
    </div>
  );
};

export default SidebarOfAbout;
