import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Authorization from './Loging/Authorization';
import Registration from './Loging/Registration';
import Header from './Header';
import TrandingNews from './TrendingNews';
import CryptoNews from './CryptoNews';
import FinanceNews from './FinanceNews';
import HomePage from './HomePage';

export default function App({ user }) {
  const [currentUser, setCurrentUser] = useState(user || null);
  return (
    <div className="container">
      <Header user={currentUser} setUser={setCurrentUser} />
      <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
        <div className="max-w-700 center">
          <Routes>
            <Route path="/" element={<HomePage user={currentUser} />} />
            <Route path="/registration" element={<Registration setUser={setCurrentUser} />} />
            <Route path="/authorization" element={<Authorization setUser={setCurrentUser} />} />
            <Route path="/tranding_news" element={<TrandingNews setUser={setCurrentUser} />} />
            <Route path="/crypto_news" element={<CryptoNews setUser={setCurrentUser} />} />
            <Route path="/finance_news" element={<FinanceNews setUser={setCurrentUser} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
