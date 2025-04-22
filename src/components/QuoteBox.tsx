import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface QuoteBoxProps {
  quote: string;
  author: string;
  onNewQuote: () => void;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ quote, author, onNewQuote }) => {
  const typedQuote = useTypewriter(quote, 30);
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}&hashtags=DailyQuote,Inspiration`;

  return (
    <div className="quote-box-container">
      <div className="quote-box">
        <p className="quote">"{typedQuote}"</p>
        {author && <p className="author">- {author}</p>}
        <div className="buttons">
          <button onClick={onNewQuote}>New Quote</button>
          <a href={tweetURL} target="_blank" rel="noopener noreferrer">
            <button>Tweet This</button>
          </a>
        </div>
      </div>
    </div>

  );
};

export default QuoteBox;
