import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import SecretSection from "./components/SecretSection";
import Modal from "./components/Modal";

import "./App.css";
import Projects from "./components/ProjectsSection";

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAccessGranted = () => {
    setAccessGranted(true);
  };

  return (
    <div className="App">
      <Header></Header>

      <AboutMe></AboutMe>
      <Projects></Projects>

      {/* Bouton "En savoir plus" */}
      {!accessGranted && (
        <button onClick={handleOpenModal}>En savoir plus</button>
      )}

      {/* Si l'accès est accordé, afficher la zone secrète */}
      {accessGranted && <SecretSection></SecretSection>}

      {/* Afficher la modale */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAccessGranted={handleAccessGranted}
      />
    </div>
  );
}

export default App;
