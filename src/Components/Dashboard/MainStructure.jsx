const MainStructure = ({ children, padding }) => {
  return (
    <div className="h-full flex justify-center items-center">
      <div
        className={`${
          padding || "p-4"
        } h-[95%] w-[95%] shadow-2xl bg-white rounded-xl`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainStructure;
