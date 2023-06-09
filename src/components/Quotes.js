import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const quotesAPI = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'TMP3+UyJ0pk7Ip/fCXRNbw==CnFZdyifLuqfM7I4',
          },
        });
        const jsonQuotes = await quotesAPI.json();
        setData(jsonQuotes);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div className="notification">
        Something went wrong!
        {error.message}
      </div>
    );
  }
  if (loading) return <div className="notification">Loading...</div>;

  return (
    <>
      {data.map((quote) => (
        <div className="quoteContainer" key={quote.category}>
          <span className="quote">{quote.quote}</span>
          <span className="author">
            {' - '}
            {quote.author}

          </span>
        </div>
      ))}
    </>
  );
};

export default Quotes;
