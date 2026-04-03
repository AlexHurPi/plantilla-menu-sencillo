import Inicio from './pages/Inicio';
import './App.css';
import './languages/i18n.js';  // ← Agrega esta línea en App.jsx para inicializar i18n
import { useTranslation } from 'react-i18next';
import Header from './components/header-components/Header';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header background="var(--primary)" image={t("header.image")} titleText={t("header.title")} subtitleText={t("header.subtitle")} titleColor="var(--title)" subtitleColor="var(--subtitle)"/>
      <Inicio />
    </>
  )
}

export default App
