import React from 'react';
import './whatsappButton-styles.css';
import whatsapp from"../../../public/images/IconoWhatsapp.png";

export const WhatsappButton = () => {
  return (
    <div className='whatsapp-container'>
        <h3>Contactanos!</h3>
        <button onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
            <img src={whatsapp} alt="whatsapp" />
        </button>
    </div>
  )
}
