import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import styles from './styles.module.css'
import { GiWaterRecycling } from "react-icons/gi";

const ModalDrink = ( props ) => {
    
    return (
        <>
            <Modal
                show={props.show}
                backdrop="static"
                keyboard={false}
                centered
                className={styles.modalContainer}
            >
                <Modal.Header closeButton={false} className={styles.modalHeader}>
                    <Modal.Title>Hora da Pausa </Modal.Title>
                    <GiWaterRecycling size={30}/>
                </Modal.Header>
                <Modal.Body className={styles.modalText}>
                    Faça uma pause e beba 250 ml de água! <br/>
                    (equivalente a 01 copo comum)
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>
                        Cancelar Pausa
                    </Button>
                    <Button variant="primary" onClick={props.onClick} className={styles.buttonOk}>
                        Vou Beber Agora
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDrink;