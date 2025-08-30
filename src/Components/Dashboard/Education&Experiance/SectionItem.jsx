import { FaEdit, FaTrash } from "react-icons/fa";
import { formatRange } from "../../../utils/FormateDate";
const SectionItem = ({ item, type, onEdit, onDelete }) => {
  return (
    <div className="relative">
      {type === "experience" && (
        <span className="absolute -left-5 top-2 w-3 h-3 bg-gray-400 rounded-full"></span>
      )}

      <div className="flex justify-between items-start">
        <div>
          {type === "experience" ? (
            <>
              <h4 className="font-semibold">{item.role}</h4>
              <p className="text-blue-600">{item.company}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="text-gray-500 text-sm">
                {formatRange(item.startDate, item.endDate, item.continue)}
              </p>
            </>
          ) : (
            <>
              <h4 className="font-semibold">{item.degree}</h4>
              <p className="text-blue-600">{item.school}</p>
              <p className="text-gray-500 text-sm">
                {formatRange(item.yearStart, item.yearEnd, item.continue)}
              </p>
            </>
          )}
        </div>

        <div className="flex gap-2 text-gray-600">
          <button onClick={() => onEdit(item)}>
            <FaEdit />
          </button>
          <button onClick={() => onDelete(item.id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionItem;
