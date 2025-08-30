import AboutInfo from "./AboutInfo";

const MainSectionOfAbout = () => {
  return (
    <div className="h-full w-full md:w-8/12 rounded-e-xl px-5 py-2 bg-gray-50 flex flex-col">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        About Me
      </h2>
      <AboutInfo />
    </div>
  );
};

export default MainSectionOfAbout;
