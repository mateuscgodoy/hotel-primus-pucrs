import Select from 'react-select';

const RoomReservation = ({ room, defaultValue, onChange }) => {
  return (
    <div datatype={room.name} className='room-div'>
      <img src={`./images/${room.name}-room.jpg`} />
      <div>
        <h4>{room.displayName}</h4>
        <Select
          isSearchable={false}
          isClearable={true}
          styles={{
            option: (styles) => {
              return { ...styles, color: 'black' };
            },
          }}
          options={[...Array(10).keys()].map((num) => {
            return { value: num, label: num };
          })}
          maxMenuHeight={100}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default RoomReservation;
