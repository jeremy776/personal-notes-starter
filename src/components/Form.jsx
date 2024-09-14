import React from "react";

export default function Form({update}) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: new Date().getTime(),
      title,
      body: content,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    update((prevNotes) => [...prevNotes, newNote]);
    setTitle("");
    setContent("");
  }
  return (
    <section className="container_form" onSubmit={handleSubmit}>
      <form className="form">
        <h2 className="form_heading">Tambah Catatan Baru</h2>
        <div className="form_group">
          <label htmlFor="title" className="form_label">
            Judul
          </label>
          <input onChange={(e) => {
            setTitle(e.target.value);
          }} value={title} maxLength={50} type="text" id="title" name="title" className="form_input" />
          <p className="form_character">Sisa karakter: {50 - title.length}</p>
        </div>
        <div className="form_group">
          <label htmlFor="content" className="form_label">
            Isi Catatan
          </label>
          <textarea
            id="content"
            name="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            className="form_textarea"
          ></textarea>
        </div>
        <button className="form_button">Tambah</button>
      </form>
    </section>
  );
}
