import { Modal } from "react-bootstrap"
import QR_code from '/images/QR_code.png'

const InviteModal = (props) => {
  return (
    <Modal
        {...props}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
    >
        <Modal.Header>
            <Modal.Title id='contained-modal-title-vcenter'>
                Invite a friend
            </Modal.Title>
            <div onClick={props.onHide} className='d-flex align-items-center pe-auto' >
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#2e2e2e"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
        </Modal.Header>
        <Modal.Body>
            <div className="d-flex flex-column align-items-center px-4 py-2">
                <img src={QR_code} alt="qr_sample" style={{width: '250px', height: '250px'}} />
                <small className="text-wrap w-75 text-center">Scan this QR code to open the same live album on a different phone</small>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default InviteModal