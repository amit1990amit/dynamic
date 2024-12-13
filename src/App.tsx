import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import CharacterDetailPage from './pages/CharacterDetailPage';
import CharactersListPage from "./pages/CharactersListPage";
import './App.css';


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<CharactersListPage />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;

