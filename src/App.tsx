import React, { useEffect, useState } from 'react';
import QuoteBox from './components/QuoteBox';
import './App.css';

// Define TypeScript interface for API response
interface Quote {
  quote: string;
  author: string;
  category: string;
}

const bgClasses = ['bg-0', 'bg-1', 'bg-2', 'bg-3', 'bg-4'];

const App: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [bgIndex, setBgIndex] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleStart = () => {
    setStarted(true);
    if (!quote) fetchQuote(); // Fetch only if no quote is loaded
  };

  const fetchQuote = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': process.env.REACT_APP_API_NINJAS_KEY || '' },
      });
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
      const data: Quote[] = await res.json();
      setQuote(data[0].quote);
      setAuthor(data[0].author);
      setBgIndex(Math.floor(Math.random() * bgClasses.length));
    } catch (error) {
      setError('Failed to fetch quote. Please try again.');
      setQuote('');
      setAuthor('');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (started) fetchQuote(); // Fetch only after start
  }, [started]);

  return (
    <div className={`app-container ${bgClasses[bgIndex]}`}>
      {!started ? (
        <div className="start-screen">
          <button onClick={handleStart}>
            Start
          </button>
        </div>
      ) : (
      
            <>
          
          <QuoteBox quote={quote} author={author} onNewQuote={fetchQuote} />
          
        </>
    
      )}
    </div>
  );
};

export default App;