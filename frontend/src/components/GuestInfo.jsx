import { useState } from 'react';

const GuestInfo = () => {
  const [guestInfo, setGuestInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestInfo({ ...guestInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guest Information:', guestInfo);
    // Here, you can add your logic to handle form submission
  };

  return (
    <div className='guest-info-container'>
      <h2>Suas Informações</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Nome Completo</label>
          <input
            type='text'
            className='form-control'
            name='name'
            value={guestInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={guestInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Telefone</label>
          <input
            type='tel'
            className='form-control'
            name='phone'
            value={guestInfo.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Endereço</label>
          <textarea
            className='form-control'
            name='address'
            value={guestInfo.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <h3>Informações do Cartão de Crédito</h3>
        <div className='mb-3'>
          <label className='form-label'>Número do Cartão</label>
          <input
            type='text'
            className='form-control'
            name='cardNumber'
            value={guestInfo.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Nome no Cartão</label>
          <input
            type='text'
            className='form-control'
            name='cardName'
            value={guestInfo.cardName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Data de Validade</label>
          <input
            type='text'
            className='form-control'
            name='expiry'
            value={guestInfo.expiry}
            onChange={handleChange}
            placeholder='MM/AA'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>CVV</label>
          <input
            type='text'
            className='form-control'
            name='cvv'
            value={guestInfo.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' className='highlight-btn'>
          Confirmar Reserva
        </button>
      </form>
    </div>
  );
};

export default GuestInfo;
