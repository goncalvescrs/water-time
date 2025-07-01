import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./styles.module.css";
import { UserContext } from "../../context/UserContext";

function ModalSettings({ showSettings, handleSave, onClose }) {
  const { userData, saveUserLocalStorage } = useContext(UserContext);
  const [user, setUser] = useState("");

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  const save = (user) => {
    saveUserLocalStorage(user);
    handleSave();
    onClose();
  };

  if (!showSettings) return null;
  return (
    <>
      <Modal
        className={styles.modalSettings}
        show={showSettings}
        onHide={onClose}
        centered
        scrollable
      >
        <form onSubmit={() => save(user)}>
          <Modal.Header closeButton>
            <Modal.Title>Configurações</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4>Seus dados:</h4>
            <h5>Nome:</h5>
            <input
              type="text"
              value={user?.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
            <h5>Idade:</h5>
            <input
              type="number"
              value={user?.age}
              onChange={(e) => setUser({ ...user, age: e.target.value })}
              required
            />
            <h5>Peso:</h5>
            <input
              type="number"
              value={user?.weight}
              onChange={(e) => setUser({ ...user, weight: e.target.value })}
              required
            />
            <h5>Altura:</h5>
            <input
              type="number"
              value={user?.height}
              onChange={(e) => setUser({ ...user, height: e.target.value })}
              required
            />
            <h5>Horas de sono:</h5>
            <input
              type="number"
              value={user?.sleep}
              onChange={(e) => setUser({ ...user, sleep: e.target.value })}
              required
            />
            <h5>Capacidade da garrafa: {"(ml)"}</h5>
            <input
              type="number"
              value={user?.bottle}
              onChange={(e) => setUser({ ...user, bottle: e.target.value })}
              required
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              Salvar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalSettings;
