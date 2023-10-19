import React from 'react';

export default function HomePage() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Wellcome!</h1>
      <h2 style={{ textAlign: 'center' }}>Here on the slides you see categories of news.</h2>
      <h2 style={{ textAlign: 'center' }}>To use this app authorize or register.</h2>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://tradeproacademy.com/wp-content/uploads/2016/10/NewsFeedforDayTrading.jpg" className="d-block w-100" alt="tranding" />
          </div>
          <div className="carousel-item">
            <img src="https://www.fairobserver.com/wp-content/uploads/2019/09/Finance.jpg" className="d-block w-100" alt="finance" />
          </div>
          <div className="carousel-item">
            <img src="https://www.economicjournal.co.uk/wp-content/uploads/2020/06/cryptocurrencies.jpg" className="d-block w-100" alt="crypto" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
