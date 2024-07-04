import { useContext } from 'react';

import RoomCard from './RoomCard';
import RoomContext from './RoomContext';

const RoomList = () => {
  const roomData = useContext(RoomContext);

  return (
    <div className='section room-list'>
      <h2>Nossos Quartos</h2>
      <p className='px-4'>
        Escolha entre uma variedade de quartos de luxo para a sua estadia
        perfeita.
      </p>
      <div className='room-cards-container'>
        {Object.keys(roomData).map((key) => (
          <RoomCard key={key} info={roomData[key]} />
        ))}
      </div>
    </div>
  );
};

export default RoomList;
