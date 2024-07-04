import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import RoomContext from './components/RoomContext.jsx';

const roomData = {
  standard: {
    name: 'standard',
    displayName: 'Quarto Standard',
    description: 'Quarto confortável com todas as comodidades essenciais.',
    imgSource: './images/standard-room.jpg',
    altText: 'Quarto Standard',
    maxGuestsNumber: '2',
    amenities: [
      'Internet wifi gratuita de alta velocidade',
      'Cofre pessoal',
      'Frigobar',
      'Cama Queen ou King Size',
    ],
  },
  deluxe: {
    name: 'deluxe',
    displayName: 'Quarto Deluxe',
    description: 'Espaço extra e comodidades premium.',
    imgSource: './images/deluxe-room.jpg',
    altText: 'Quarto Deluxe',
    maxGuestsNumber: '4',
    amenities: [
      'Internet wifi gratuita de alta velocidade',
      'Cofre pessoal',
      'Frigobar',
      'Cama Queen ou King Size',
      'Banheiro luxuoso',
    ],
  },
  suite: {
    name: 'suite',
    displayName: 'Suíte Master',
    description: 'Experiência de luxo com áreas de estar separadas.',
    imgSource: './images/suite-room.jpg',
    altText: 'Suíte Master',
    maxGuestsNumber: '6',
    amenities: [
      'Internet wifi gratuita de alta velocidade',
      'Cofre pessoal',
      'Frigobar',
      'Cama Queen ou King Size',
      'Banheiro luxuoso',
      'Cafeteira Nespresso',
      'Televisão 4K 65 polegadas OLED LG',
      'Sala de Estar',
      'Copa completa com cooktop e utensílios',
    ],
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoomContext.Provider value={roomData}>
      <App />
    </RoomContext.Provider>
  </React.StrictMode>
);
