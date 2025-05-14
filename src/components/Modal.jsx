// src/components/Modal.jsx
import React, { useState } from "react";
import "../styles/Modal.css";

function Modal({ isOpen, onClose, onAccessGranted }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Mot de passe (que tu peux changer)
  const correctPassword = "caca";

  // Gérer la soumission du mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      onAccessGranted();
      onClose();
    } else {
      setError(true);
    }
  };

  if (!isOpen) return null; // Si la modal n'est pas ouverte, on ne la rend pas

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Accédez à la page secrète</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Entrez le mot de passe :
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Mot de passe"
            />
          </label>
          <button type="submit">Se connecter</button>
        </form>
        {error && <p className="error-message">Mot de passe incorrect !</p>}
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default Modal;
