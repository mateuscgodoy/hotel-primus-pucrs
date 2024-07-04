import PropTypes from 'prop-types';
import '../styles/RoomCard.css';
import { Link } from 'react-router-dom';

const RoomCard = ({ info }) => {
  return (
    <div className='room-card'>
      <img src={info.imgSource} alt={info.altText} className='room-image' />
      <div className='room-content'>
        <h3>{info.displayName}</h3>
        <p className='room-description'>{info.description}</p>
        <ul>
          {info.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        <p>
          <strong>Capacidade:</strong> {info.maxGuestsNumber} adultos.
        </p>
        <Link className='highlight-btn' to={`/reservation?room=${info.name}`}>
          Reserve Já
        </Link>
      </div>
    </div>
  );
};

RoomCard.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    maxGuestsNumber: PropTypes.string.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RoomCard;
