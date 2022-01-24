import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const Modals = (props) => {
      return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>



            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default Modals
