import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Plans from './components/Plans/Plans';
import NotFound from './components/NotFound/NotFound';
import Subscribe from './components/Subscribe/Subscribe';
import UserContext from './contexts/UserContext';
import { getUser } from './services/gratibox.services';

const App = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      getUser(token)
        .then((response) => {
          setUser({ ...response.data, token, unauthorized: false });
        })
        .catch(() => {
          localStorage.removeItem('token');
          setUser({ unauthorized: true });
        });
    } else {
      setUser({ unauthorized: true });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/entrar" exact element={<SignIn />} />
          <Route path="/cadastro" exact element={<SignUp />} />
          <Route path="/planos" exact element={<Plans />} />
          <Route path="/assinar" exact element={<Subscribe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>

  );
};

export default App;
