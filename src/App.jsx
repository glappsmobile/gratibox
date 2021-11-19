import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import UserContext from './contexts/UserContext';

const App = () => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/entrar" exact element={<SignIn />} />
          <Route path="/cadastro" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>

  );
};

export default App;
