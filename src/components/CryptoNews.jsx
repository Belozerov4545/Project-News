import React, { useState, useEffect } from 'react';

export default function CryptoNews() {
  const [newsFromFetch, setNewsFromFetch] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'bec932e113mshb88dcf77aba1f74p149b5ajsnf9258526c098',
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      },
    };

    fetch('https://crypto-news-live3.p.rapidapi.com/news', options)
      .then((response) => response.json())
      .then((response) => setNewsFromFetch(response))
      .catch((err) => setError(err.message));
  }, [newsFromFetch]);

  return (
    <div>
      <div>
        <div className="container">
          <div className="row row-cols-2">
            {newsFromFetch && newsFromFetch?.map((el, i) => (
              <div
                key={i}
                className="card"
                style={{
                  width: '25rem', margin: '1rem', borderColor: '#0a53be', borderStyle: 'solid', borderWidth: '0.3rem',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">
                    Source:
                    {' '}
                    {el.source}
                  </p>
                  <a href={el.url} className="btn btn-primary">Link to source</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
