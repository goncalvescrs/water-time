import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';


const ModalDrink = ( {...props} ) => {
    
    return (
        <>
            <Modal
                show={props.show}
                // onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton={false}>
                    <Modal.Title>Alerta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    asasasasa
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={props.onClick}>
                        Vou Beber Agora
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDrink;