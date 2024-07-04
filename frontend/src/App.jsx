import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import RoomList from './components/RoomList';
import ReservationContainer from './components/ReservationContainer';

const App = () => {
  const [csrf, setCsrf] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    getSession();
  }, []);

  const getCSRF = () => {
    fetch('/api/csrf/', {
      credentials: 'same-origin',
    })
      .then((res) => {
        const csrfToken = res.headers.get('X-CSRFToken');
        setCsrf(csrfToken);
        console.log(csrfToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSession = () => {
    fetch('/api/session/', {
      credentials: 'same-origin',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.isAuthenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          getCSRF();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = (username, password) => {
    fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrf,
      },
      credentials: 'same-origin',
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        console.log(err);
        alert('Usuário ou senha incorretos.');
      });
  };

  const logout = () => {
    fetch('/api/logout', {
      credentials: 'same-origin',
    })
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        setIsAuthenticated(false);
        getCSRF();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Router>
      <div className='app'>
        <Header isAuthenticated={isAuthenticated} logout={logout} />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login login={login} />} />
            <Route path='/rooms' element={<RoomList />} />
            <Route path='/reservation' element={<ReservationContainer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
