import capitalizeFirstLetter from "../../../utils/CapitalizeFirstletter";

const AboutFields = ({ title, value, editMode, onChange }) => {
  const isDescription = title.toLowerCase() === "description";

  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 px-4 py-3 border-b last:border-b-0">
      <h3 className="font-semibold text-gray-700 md:w-1/3">
        {capitalizeFirstLetter(title)}:
      </h3>
      {editMode ? (
        isDescription ? (
          <textarea
            rows={4}
            className="text-gray-700 border rounded px-2 py-1 w-full md:w-2/3 resize-none"
            value={value}
            onChange={(e) => onChange(title, e.target.value)}
          />
        ) : (
          <input
            type="text"
            className="text-gray-700 border rounded px-2 py-1 w-full md:w-2/3"
            value={value}
            onChange={(e) => onChange(title, e.target.value)}
          />
        )
      ) : (
        <p className="text-gray-600 md:w-2/3">{capitalizeFirstLetter(value)}</p>
      )}
    </div>
  );
};

export default AboutFields;
