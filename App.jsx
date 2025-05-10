import React, { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import ShareButtons from "./components/ShareButtons";
import "./App.css";
import Button from "./components/Button";

export default function App() {
  const [content, setContent] = useState("Press the Button to generate Quote");
  const [author, setAuthor] = useState("");

  const generateQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random");
      const data = await response.json();

      // Quotable API returns an array, so access the first element
      const quoteData = data[0];
      setContent(quoteData.content);
      setAuthor(quoteData.author);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
  };

  return (
    <div className="app">    
      <QuoteCard content={content} author={author} />
      <Button click={generateQuote}/>
      <ShareButtons content={content} author={author} />
    </div>
  );
}


