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
        animation={false}
        className={styles.modalSettings}
        show={showSettings}
        onHide={onClose}
        centered
      >
        <form onSubmit={() => save(user)}>
          <Modal.Header closeButton>
            <Modal.Title>Configurações</Modal.Title>
          </Modal.Header>

          <Modal.Body className={styles.modal_body}>
            <div className="row g-3">
              <label htmlFor="Usuario" className={styles.form_title}>
                Dados para calculo
              </label>
              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Digite seu nome..."
                  value={user?.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  required
                />
              </div>

              <div className="col-sm-5">
                <label htmlFor="age" className="form-label">
                  Idade
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Digite sua Idade..."
                  value={user?.age}
                  onChange={(e) => setUser({ ...user, age: e.target.value })}
                  required
                />
              </div>

              <div className="col-sm-7">
                <label htmlFor="sleep" className="form-label">
                  Horas de sono
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="sleep"
                  placeholder="Horas de sono por dia..."
                  value={user?.sleep}
                  onChange={(e) => setUser({ ...user, sleep: e.target.value })}
                  required
                />
              </div>

              <div className="col-sm-5">
                <label htmlFor="weight" className="form-label">
                  Peso
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  placeholder="Qual seu peso atual..."
                  value={user?.weight}
                  onChange={(e) => setUser({ ...user, weight: e.target.value })}
                  required
                />
              </div>

              <div className="col-sm-7">
                <label htmlFor="bottle" className="form-label">
                  Garrafa (ml)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="bottle"
                  placeholder="Quantos ml tem sua garrafa..."
                  value={user?.bottle}
                  onChange={(e) => setUser({ ...user, bottle: e.target.value })}
                  required
                />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="light" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="dark">
              Salvar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalSettings;
