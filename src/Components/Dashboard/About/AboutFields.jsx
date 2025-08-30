import capitalizeFirstLetter from "../../../utils/CapitalizeFirstletter";

const AboutFields = ({ title, value, editMode, onChange }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-2 px-4 py-3 border-b last:border-b-0">
      <h3 className="font-semibold text-gray-700">
        {capitalizeFirstLetter(title)}:
      </h3>
      {editMode ? (
        <input
          type="text"
          className="text-gray-700 border rounded px-2 py-1 w-full md:w-2/3"
          value={value}
          onChange={(e) => onChange(title, e.target.value)}
        />
      ) : (
        <p className="text-gray-600">{capitalizeFirstLetter(value)}</p>
      )}
    </div>
  );
};

export default AboutFields;
