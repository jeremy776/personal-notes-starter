import React from "react";
import Card from "./Card";
export default function Notes({
  judul,
  data,
  onArchive,
  onDelete,
  onActive,
}) {

  return (
    <div className="list_notes">
      <h2 className="notes_heading">{judul}</h2>
      <div className="list_notes_item">
        {data.length > 0 ? (
          data.map((note) => (
            <Card
              key={note.id}
              title={note.title}
              content={note.body}
              date={note.createdAt}
              onDelete={() => onDelete(note.id)}
              onArchive={judul === "Active Notes" ? () => onArchive(note.id) : null}
              onActive={judul === "Archieve Notes" ? () => onActive(note.id) : null}
            />
          ))
        ) : (
          <p>
            {judul === "Active Notes"
              ? "Tidak ada catatan aktif."
              : "Tidak ada catatan yang diarsipkan."}
          </p>
        )}
      </div>
    </div>
  );
}
