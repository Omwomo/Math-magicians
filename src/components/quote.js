import React, { useState, useEffect } from 'react';

export default function DisplayQuotes() {
  const [newQuote, setNewQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const category = 'learning';
  const apiKey = 'MhhhjXkGrj3RilcESlI0hg==6uiWhYZSR6osRzHw';
  const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

  const fetchQuotes = () => {
    fetch(apiUrl, {
      method: 'GET',
      headers: { 'X-Api-Key': apiKey },
    })
      .then((response) => response.json())
      .then((data) => {
        setNewQuote(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    fetchQuotes();
  }, [apiUrl]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {' '}
        {error.message}
      </p>
    );
  }
}
