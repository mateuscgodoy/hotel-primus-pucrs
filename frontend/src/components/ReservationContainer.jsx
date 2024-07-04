import { useLocation } from 'react-router-dom';

import Reservation from './Reservation';
import GuestInfo from './GuestInfo';

const ReservationContainer = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialRoom = query.get('room') || '';

  return (
    <div className='reservation-container'>
      <nav>
        <div className='nav nav-tabs ' id='nav-tab' role='tablist'>
          <button
            className='nav-link active'
            id='nav-reservation-tab'
            data-bs-toggle='tab'
            data-bs-target='#nav-reservation'
            type='button'
            role='tab'
            aria-controls='nav-reservation'
            aria-selected='true'
          >
            Sua reserva
          </button>
          <button
            className='nav-link'
            id='nav-profile-tab'
            data-bs-toggle='tab'
            data-bs-target='#nav-profile'
            type='button'
            role='tab'
            aria-controls='nav-profile'
            aria-selected='false'
          >
            Suas informações
          </button>
        </div>
      </nav>
      <div className='tab-content' id='nav-tabContent'>
        <div
          className='tab-pane fade show active'
          id='nav-reservation'
          role='tabpanel'
          aria-labelledby='nav-reservation-tab'
          tabIndex='0'
        >
          <Reservation selectedRoom={initialRoom} />
        </div>
        <div
          className='tab-pane fade'
          id='nav-profile'
          role='tabpanel'
          aria-labelledby='nav-profile-tab'
          tabIndex='0'
        >
          <GuestInfo />
        </div>
      </div>
    </div>
  );
};

export default ReservationContainer;
