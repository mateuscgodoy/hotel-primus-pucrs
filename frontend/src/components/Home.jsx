import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='text-center home-content'>
        <h1>
          <span className='logo large'>Hotel Primus</span>
        </h1>
        <p>
          Experimente o melhor em hospitalidade e conforto no coração da cidade.
        </p>
        <Link className='highlight-btn' to='/reservation'>
          Reserve Já
        </Link>
      </div>
    </div>
  );
};

export default Home;
