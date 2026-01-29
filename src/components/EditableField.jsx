import { useState } from "react";
import "./EditableField.css";

function EditableField({ value, onSave, type = "text", multiline = false }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="editable-field">
        <span className="field-value">{value}</span>
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          ✏️ Edit
        </button>
      </div>
    );
  }

  return (
    <div className="editable-field editing">
      {multiline ? (
        <textarea
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          rows={4}
          className="edit-input"
        />
      ) : (
        <input
          type={type}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="edit-input"
        />
      )}
      <div className="edit-actions">
        <button className="save-btn" onClick={handleSave}>
          ✓ Save
        </button>
        <button className="cancel-btn" onClick={handleCancel}>
          ✗ Cancel
        </button>
      </div>
    </div>
  );
}

export default EditableField;
