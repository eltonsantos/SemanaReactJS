import { useState } from "react";
import { FiLink } from "react-icons/fi";
import LinkItem from "../../components/LinkItem";
import Menu from "../../components/Menu";
import api from "../services/api";
import "./styles.css";

import { saveLink } from "../services/storeLinks";

export function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);
      saveLink("@encurtaLink", response.data);
      setLink("");
    } catch {
      alert("Ops parece que algo deu errado! Verificar URL digitada.");
      setLink("");
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Encurtador de links" />
        <h1>Encurtador de URL</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Encurtar link</button>
      </div>
      <Menu />

      {showModal && (
        <LinkItem data={data} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
}
