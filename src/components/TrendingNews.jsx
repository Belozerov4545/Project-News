import React, { useState, useEffect } from 'react';

export default function TrandingNews() {
  const [newsFromFetch, setNewsFromFetch] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'bec932e113mshb88dcf77aba1f74p149b5ajsnf9258526c098',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
      },
    };

    fetch('https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Off', options)
      .then((response) => response.json())
      .then((response) => setNewsFromFetch(response.value))
      .catch((err) => setError(err.message));
  }, [newsFromFetch]);

  return (
    <div>
      <div>
        <div>
          {/* <button
            onClick={getNews}
            style={{
              display: 'block',
              textAlign: 'center',
              margin: '0 auto',
              backgroundColor: 'blue',
            }}
            className="btn btn-primary"
            type="button"
          >
            Trends
          </button> */}
        </div>
        <div className="container">
          <div className="row md-5">
            {newsFromFetch && newsFromFetch?.map((el, i) => (
              <div
                className="card"
                key={i}
                style={{
                  width: '18rem', margin: '3rem', borderColor: '#0a53be', borderStyle: 'solid', borderWidth: '0.3rem',
                }}
              >
                <h5 className="card-title">
                  {' '}
                  {el.name}
                </h5>
                <img src={el.image.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">{el.query.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
