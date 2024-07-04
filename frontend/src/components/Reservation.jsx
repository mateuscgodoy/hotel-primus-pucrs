import { useState, useContext } from 'react';

import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

import UserIcon from './UserIcon';
import RoomReservation from './RoomReservation';
import RoomContext from './RoomContext';

const Reservation = () => {
  const defaultCheckOut = new Date().getDate() + 1;

  const roomInfo = useContext(RoomContext);

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(
    new Date().setDate(defaultCheckOut)
  );
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numOfStandardRooms, setNumOfStandardRooms] = useState(0);
  const [numOfDeluxeRooms, setNumOfDeluxeRooms] = useState(0);
  const [numOfSuiteRooms, setNumOfSuiteRooms] = useState(0);

  const handleConfirmationClick = () => {
    const triggerEl = document.querySelector(
      '#nav-tab button[data-bs-target="#nav-profile"]'
    );
    let tabInstance = bootstrap.Tab.getInstance(triggerEl);
    console.log(tabInstance);
    if (!tabInstance) {
      tabInstance = new bootstrap.Tab(triggerEl);
    }
    tabInstance.show();
    // bootstrap.Tab.getInstance(triggerEl).show();
  };

  return (
    <div className='reservation'>
      <h2 className='reservation-title'>Detalhes da Reserva</h2>
      <div className='dates-container'>
        <div className='date-container'>
          <label>
            <strong>Data de Check-in</strong>
          </label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => {
              setCheckInDate(date);
              setCheckOutDate(new Date().setDate(date.getDate() + 1));
            }}
            minDate={new Date()}
            dateFormat='dd/MM/yyyy'
            inline
          />
        </div>
        <div className='date-container'>
          <label>
            <strong>Data de Check-out</strong>
          </label>
          <DatePicker
            selected={checkOutDate}
            minDate={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            dateFormat='dd/MM/yyyy'
            inline
          />
        </div>
      </div>
      <div className='reservation-guests'>
        <UserIcon height='40px'></UserIcon>
        <div className='guests-container'>
          <div>
            <label className='guests-label'>
              <strong>Adultos</strong>
            </label>
            <Select
              className='guests-input'
              isSearchable={false}
              styles={{
                option: (styles) => {
                  return { ...styles, color: 'black' };
                },
              }}
              options={[...Array(10).keys()].map((num) => {
                return { value: num + 1, label: num + 1 };
              })}
              maxMenuHeight={100}
              defaultValue={{ value: numAdults, label: numAdults }}
              onChange={({ value }) => {
                setNumAdults(value);
              }}
            />
          </div>
          <div>
            <label className='guests-label'>
              <strong>Crianças</strong>
            </label>
            <Select
              className='guests-input'
              isSearchable={false}
              styles={{
                option: (styles) => {
                  return { ...styles, color: 'black' };
                },
              }}
              options={[...Array(10).keys()].map((num) => {
                return { value: num, label: num };
              })}
              maxMenuHeight={100}
              defaultValue={{ value: numChildren, label: numChildren }}
              onChange={({ value }) => {
                setNumChildren(value);
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <label>
          <strong>Tipo de Quarto</strong>
        </label>
        <div className='room-options'>
          <RoomReservation
            room={roomInfo.standard}
            onChange={(value) => setNumOfStandardRooms(value)}
            defaultValue={{
              value: numOfStandardRooms,
              label: numOfStandardRooms,
            }}
          />
          <RoomReservation
            room={roomInfo.deluxe}
            onChange={(value) => setNumOfDeluxeRooms(value)}
            defaultValue={{ value: numOfDeluxeRooms, label: numOfDeluxeRooms }}
          />
          <RoomReservation
            room={roomInfo.suite}
            onChange={(value) => setNumOfSuiteRooms(value)}
            defaultValue={{ value: numOfSuiteRooms, label: numOfSuiteRooms }}
          />
        </div>
      </div>
      <button className='highlight-btn' onClick={handleConfirmationClick}>
        Confirmar
      </button>
    </div>
  );
};

export default Reservation;
