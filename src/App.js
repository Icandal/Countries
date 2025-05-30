// import axios from 'axios';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFoud';


function App() {

  const [countries, setCountries] = useState([]);

  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
