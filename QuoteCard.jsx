import React from "react";
import "../App.css"

export default function QuoteCard({ content, author }) {
  return (
    <div className="quote-card">
      <p className="quote">{`"${content}"`}</p>
      {author && <p className="author">- {author}</p>}
    </div>
  );
}
