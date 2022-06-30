import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NewsPage } from './page/NewsPage';

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<NewsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

