import React, { useState } from "react";
import "../styles/SecretSection.css";
function SecretSection() {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  // Mot de passe (que tu peux changer)
  const correctPassword = "caca";

  // Fonction pour vérifier le mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setAccessGranted(true);
    } else {
      alert("Mot de passe incorrect !");
    }
  };

  return (
    <div className="secret-content">
      <h2>Bienvenue dans ma zone perso !</h2>
      <p>
        C’est l’endroit où je partage mes pensées les plus folles, mes blagues,
        et mes gifs préférés ! 🎉
      </p>
      <img
        src="https://media.giphy.com/media/2A4Vh9XAm1Lsa/giphy.gif"
        alt="funny gif"
      />
      <p>J'espère que tu t'amuses autant que moi ici 😜</p>
    </div>
  );
}

export default SecretSection;
