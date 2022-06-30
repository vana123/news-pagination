import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Container } from '@mui/material'

import { NewsPage } from './page/NewsPage';

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/*' element={<NewsPage/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

