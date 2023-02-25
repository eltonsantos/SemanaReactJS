import { useState } from "react";
import "./app.css";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [messagem, setMessagem] = useState("");

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMessagem("Você está abaixo do peso! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessagem("Peso ideal! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMessagem(
        "Você está levemente acima do peso! Seu IMC é: " + imc.toFixed(2)
      );
    } else if (imc >= 34.6) {
      setMessagem("Cuidado Obesidade! Seu IMC é: " + imc.toFixed(2));
    }
  }

  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso em (kg) Ex: 90"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura em (cm) Ex: 180"
        />
        <button onClick={calcularIMC}>Calcular</button>
      </div>

      <h2>{messagem}</h2>
    </div>
  );
}

export default App;
