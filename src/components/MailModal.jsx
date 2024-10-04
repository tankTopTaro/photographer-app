import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'

const MailModal = ({show, modalContent, onHide}) => {
  return (
    <Modal
        show={show}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
    >
        <Modal.Header>
            <Modal.Title id='contained-modal-title-vcenter'>
                {modalContent === 'download-live' ? 'Receive my Photos' : 'Invite a friend'}
            </Modal.Title>
            <div onClick={onHide} className='d-flex align-items-center pe-auto' >
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#2e2e2e"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
        >
            <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
            <Button>Submit</Button>
        </Modal.Body>
    </Modal>
  )
}

export default MailModal