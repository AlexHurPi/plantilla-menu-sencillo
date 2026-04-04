import React from 'react';
import './whatsappButton-styles.css';

export const WhatsappButton = () => {
  return (
    <div className='whatsapp-container'>
        <h3>Contactanos!</h3>
        <button onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
            <img src="../../../public/images/IconoWhatsapp.png" alt="whatsapp" />
        </button>
    </div>
  )
}
