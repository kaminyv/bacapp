import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modals = ({ children, modal, setModal }) => {
    const handleClose = () => setModal(false);
    const handleShow = () => setModal(true);
    return (
        <>
            <Button
                className='mx-2'
                variant='secondary'
                onClick={handleShow}>
                Вход
            </Button>

            <Modal show={modal} onHide={handleClose} animation={false}>
                <Modal.Body> {children}</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Modals
