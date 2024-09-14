import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { getInitialData } from "./utils";
import Card from "./components/Card";
import Form from "./components/Form";
import Notes from "./components/Notes";

export default function App() {
  const [notes, setNotes] = React.useState(getInitialData());
  const [search, setSearch] = React.useState("");
  const archieveNotes = notes.filter((note) => note.archived);
  const activeNotes = notes.filter((note) => !note.archived);

  const onArchive = (id) => {
    const note = notes.find((note) => note.id === id);
    if (note) {
      const updatedNotes = notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: true };
        }
        return note;
      });
      setNotes(updatedNotes);
    } else {
      console.error(`Catatan dengan id ${id} tidak ditemukan.`);
    }
  }

  const onDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  const onActive = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: false };
      }
      return note;
    });
    setNotes(updatedNotes);
  }

  useEffect(() => {
    const filteredNotes = notes.filter((note) => {
      return note.title.toLowerCase().includes(search.toLowerCase()) || note.body.toLowerCase().includes(search.toLowerCase());
    });
    if (search.length > 0) {
      setNotes(filteredNotes);
    } else {
      setNotes(getInitialData());
    }
  }, [search]);

  return (
    <>
      <main>
        <Navbar search={search} setSearch={setSearch} />
        <Form update={setNotes} />
        <section className="container_list_notes">
          <Notes judul={'Active Notes'} data={activeNotes} onArchive={onArchive} onActive={onActive} onDelete={onDelete} />
          <Notes judul={'Archieve Notes'} data={archieveNotes} onActive={onActive} onArchive={onArchive} onDelete={onDelete} />
        </section>
      </main>
    </>
  );
}
