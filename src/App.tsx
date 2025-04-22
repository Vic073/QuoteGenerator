import React, { useEffect, useState } from 'react';
import QuoteBox from './components/QuoteBox';
import './App.css';

const bgClasses = ['bg-0', 'bg-1', 'bg-2', 'bg-3', 'bg-4'];

const App: React.FC = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [bgIndex, setBgIndex] = useState(0);
  const [started, setStarted] = useState(false);
  

  const handleStart = () => {
   
    setStarted(true);
  };

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
      setBgIndex(Math.floor(Math.random() * bgClasses.length));
    } catch (error) {
      setQuote('Failed to fetch quote. Try again later.');
      setAuthor('');
    }
  };

  useEffect(() => {
    fetchQuote();

  }, []);

  


  // ✅ THIS is the correct return block
  return (
    <div className={`app-container ${bgClasses[bgIndex]}`}>
      
      {!started ? (
        <div className="start-screen">
          <button className='start' onClick={handleStart}>Start</button>
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
