import React from 'react';
import './inicio.css';
import Header from '../components/header-components/Header';
import { useTranslation } from 'react-i18next';
import ImageCard from '../components/image-card/ImageCard';
import { Map } from '../components/map-components/Map';
import { WhatsappButton } from '../components/whatsapp-components/whatsappButton';

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <div className="inicio-mainContainer">     
        <ImageCard dataKey="cards.card1" titleKey="cards.title1" image="cards.image1" alt="image1"/>
        <ImageCard dataKey="cards.card2" titleKey="cards.title2" image="cards.image2" alt="image2"/>
        <ImageCard dataKey="cards.card3" titleKey="cards.title3" image="cards.image3" alt="image3"/>
        <ImageCard dataKey="cards.card4" titleKey="cards.title4" image="cards.image4" alt="image4"/>
        <Map />
        <WhatsappButton />
    </div>
  )
}

export default Inicio
