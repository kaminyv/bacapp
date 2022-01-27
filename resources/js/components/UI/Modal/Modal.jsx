import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Login from '../../pages/Login';

const Modals = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Login />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default Modals
