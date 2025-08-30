import { useState } from "react";
import MainStructure from "./MainStructure";
import SectionList from "./Education&Experiance/SectionList";
import FormModal from "./Education&Experiance/FormModal";
import ExperienceForm from "./Education&Experiance/ExperienceForm";
import EducationForm from "./Education&Experiance/EducationForm";
import ConfirmDialog from "../../utils/ConfirmDialog";

const ExperienceEducation = () => {
  const [experience, setExperience] = useState([
    {
      id: 1,
      role: "Senior Product Designer",
      company: "Company A",
      description: "Description...",
      startDate: "2019-06-01",
      endDate: "",
      continue: true,
    },
    {
      id: 2,
      role: "UX Designer",
      company: "Company B",
      description: "Description...",
      startDate: "2017-01-01",
      endDate: "2019-05-01",
      continue: false,
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "M.A. in Graphic Design",
      school: "University Y",
      yearStart: "2012-01-01",
      yearEnd: "2014-01-01",
      continue: false,
    },
    {
      id: 2,
      degree: "B.A. in Fine Arts",
      school: "University X",
      yearStart: "2008-01-01",
      yearEnd: "2012-01-01",
      continue: false,
    },
  ]);

  const [formType, setFormType] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const handleSave = (data) => {
    if (formType === "experience") {
      if (editingItem) {
        setExperience(
          experience.map((e) =>
            e.id === editingItem.id ? { ...data, id: e.id } : e
          )
        );
      } else {
        setExperience([...experience, { ...data, id: Date.now() }]);
      }
    } else {
      if (editingItem) {
        setEducation(
          education.map((e) =>
            e.id === editingItem.id ? { ...data, id: e.id } : e
          )
        );
      } else {
        setEducation([...education, { ...data, id: Date.now() }]);
      }
    }
    setFormType("");
    setEditingItem(null);
  };
  const handleDelete = (id, type) => {
    setDeleteTarget({ id, type });
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (deleteTarget.type === "experience") {
      setExperience(experience.filter((e) => e.id !== deleteTarget.id));
    } else {
      setEducation(education.filter((e) => e.id !== deleteTarget.id));
    }
    setShowConfirm(false);
    setDeleteTarget(null);
  };

  return (
    <MainStructure>
      <div className="max-h-[83vh] overflow-y-auto">
        <SectionList
          title="Experience"
          type="experience"
          items={experience}
          onAdd={() => {
            setFormType("experience");
            setEditingItem(null);
          }}
          onEdit={(item) => {
            setFormType("experience");
            setEditingItem(item);
          }}
          onDelete={(id) => handleDelete(id, "experience")}
        />

        <hr className="my-4" />

        <SectionList
          title="Education"
          type="education"
          items={education}
          onAdd={() => {
            setFormType("education");
            setEditingItem(null);
          }}
          onEdit={(item) => {
            setFormType("education");
            setEditingItem(item);
          }}
          onDelete={(id) => handleDelete(id, "education")}
        />
      </div>

      {formType && (
        <FormModal onClose={() => setFormType("")}>
          {formType === "experience" ? (
            <ExperienceForm
              item={editingItem}
              onSave={handleSave}
              onCancel={() => setFormType("")}
            />
          ) : (
            <EducationForm
              item={editingItem}
              onSave={handleSave}
              onCancel={() => setFormType("")}
            />
          )}
        </FormModal>
      )}
      {showConfirm && (
        <ConfirmDialog
          title="Delete Item?"
          message="Are you sure you want to delete this record? This action cannot be undone."
          confirmText="Yes, Delete"
          cancelText="Cancel"
          onConfirm={confirmDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </MainStructure>
  );
};

export default ExperienceEducation;
