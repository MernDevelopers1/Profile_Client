import SectionItem from "./SectionItem";

const SectionList = ({ title, type, items, onAdd, onEdit, onDelete }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <div
        className={
          type === "experience"
            ? "border-l-2 border-gray-300 pl-4 space-y-4"
            : "space-y-3"
        }
      >
        {items.map((item) => (
          <SectionItem
            key={item.id}
            item={item}
            type={type}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>

      <button
        onClick={onAdd}
        className="mt-3 text-sm text-blue-600 hover:underline"
      >
        + Add {title}
      </button>
    </div>
  );
};

export default SectionList;
