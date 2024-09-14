import React from "react";

export default function Navbar({ search, setSearch }) {
  return (
    <nav className="container_nav">
      <div className="nav">
        <h1>Catatan Pribadi</h1>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          className="form_input"
          type="search"
          placeholder="Cari catatan..."
        />
      </div>
    </nav>
  );
}
