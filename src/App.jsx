import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/entrar" exact element={<SignIn />} />
      <Route path="/cadastro" exact element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

export default App;
