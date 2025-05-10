import React, { useState } from "react";

export default function ShareButtons({ content, author }) {
  const [copied, setCopied] = useState(false);
  const quote = `${content} - ${author}`;

  // Function to handle Copy
  const handleCopy = () => {
    navigator.clipboard.writeText(quote); // Copies the text to the clipboard
    setCopied(true); // Show "Copied!" message
  };

  // Reset "Copied!" message when a new quote is generated
  React.useEffect(() => {
    setCopied(false);
  }, [content]);

  const shareOnSocial = (platform) => {
    const encodedQuote = encodeURIComponent(quote);
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedQuote}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedQuote}`,
      reddit: `https://www.reddit.com/submit?title=${encodedQuote}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedQuote}`,
    };

    window.open(urls[platform], "_blank");
  };

  return (
    <div className="share-buttons">
      {/* Twitter */}
      <button onClick={() => shareOnSocial("twitter")} className="btn">
        Share on Twitter
      </button>
      {/* Facebook */}
      <button onClick={() => shareOnSocial("facebook")} className="btn">
        Share on Facebook
      </button>
      {/* Reddit */}
      <button onClick={() => shareOnSocial("reddit")} className="btn">
        Share on Reddit
      </button>
      {/* LinkedIn */}
      <button onClick={() => shareOnSocial("linkedin")} className="btn">
        Share on LinkedIn
      </button>
      {/* Copy to Clipboard */}
      <button onClick={handleCopy} className="btn">
        {copied ? "Copied!" : "Copy Quote"}
      </button>
    </div>
  );
}
