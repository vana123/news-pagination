import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Container } from '@mui/material'

import { NewsPage } from './page/NewsPage';
import {NotFound} from './page/NotFound';

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/*' element={<NewsPage/>}/>
            <Route element={<NotFound/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

