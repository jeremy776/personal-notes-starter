import React from 'react';
import { showFormattedDate } from '../utils';

function Card({ title, content, date, onArchive, onDelete, onActive }) {
  return (
    <div className="card">
      <h3 className="card_title">{title}</h3>
      <p className="card_content">{content}</p>
      <p className="card_date">{showFormattedDate(date)}</p>
      <div className="card_actions">
        {onActive && <button className="card_button active" onClick={onActive}>Active</button>}
        {onArchive && <button className="card_button archive" onClick={onArchive}>Archive</button>}
        <button className="card_button delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Card;