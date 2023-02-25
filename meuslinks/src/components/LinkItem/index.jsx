import { FiClipboard, FiX } from "react-icons/fi";
import "./styles.css";

export default function LinkItem({ closeModal, data }) {
  function copyLink() {
    navigator.clipboard.writeText(data.link);
    alert("URL Copiada com sucesso!");
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link Encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>{data.long_url}</span>

      <button className="modal-link" onClick={copyLink}>
        {data.link}
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  );
}
