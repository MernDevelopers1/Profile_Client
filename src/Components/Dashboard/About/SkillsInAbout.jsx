const skills = [
  { name: "JavaScript", percent: 90 },
  { name: "React", percent: 85 },
  { name: "Node.js", percent: 80 },
  { name: "MongoDB", percent: 75 },
  { name: "CSS", percent: 70 },
];

const SkillsInAbout = () => {
  // Group skills into pairs for two per row
  const skillRows = [];
  for (let i = 0; i < skills.length; i += 2) {
    skillRows.push(skills.slice(i, i + 2));
  }

  return (
    <div className="px-4 py-5">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills</h3>
      <div className="flex flex-col gap-4">
        {skillRows.map((row, idx) => (
          <div key={idx} className="flex gap-4">
            {row.map((skill) => (
              <div key={skill.name} className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">
                    {skill.name}
                  </span>
                  <span className="text-gray-500">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
            {/* If only one skill in last row, fill space */}
            {row.length === 1 && <div className="flex-1"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsInAbout;
