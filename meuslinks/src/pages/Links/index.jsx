import { useEffect, useState } from "react";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LinkItem } from "../../components/LinkItem";
import { deleteLink, getLinksSave } from "../services/storeLinks";
import "./styles.css";

export function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave("@encurtaLink");

      if (result.length === 0) {
        setEmptyList(true);
      }

      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(myLinks, id);

    if (result.length === 0) {
      setEmptyList(true);
    }

    setMyLinks(result);
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {emptyList && (
        <div className="links-item">
          <h1 className="text">Sua lista está vazia...</h1>
        </div>
      )}

      {myLinks.map((link) => (
        <div key={link.id} className="links-item">
          <button
            className="link"
            onClick={() => {
              handleOpenLink(link);
            }}
          >
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>
          <button className="delete" onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color="#ff5454" />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} data={data} />
      )}
    </div>
  );
}
