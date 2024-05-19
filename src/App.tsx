import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ViewMode from './pages/ViewMode';
import Settings from './pages/Settings';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/view" element={<ViewMode />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
