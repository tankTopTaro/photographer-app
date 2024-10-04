import { useState } from "react"
import Aside from "./components/Aside"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import MailModal from "./components/MailModal"
import Navbar from "./components/Navbar"
import InviteModal from "./components/InviteModal"

const App = () => {
  const [modalShow, setModalShow] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const handleShowModal = (modalData) => {
    setModalContent(modalData)
    setModalShow(true)
  }

  return (
    <>
      <Aside handleModalShow={handleShowModal}/>

      <main role="main" className="probootstrap-main js-probootstrap-main">
        <Navbar />
        <Gallery />
        <Footer />
      </main>

      {modalContent === 'download-live' && (
        <MailModal show={modalShow} modalContent={modalContent} onHide={() => setModalShow(false)} />
      )}
      {modalContent === 'invite-live' && (
        <InviteModal show={modalShow} onHide={() => setModalShow(false)} />
      )}
      {modalContent === 'invite-longterm' && (
        <MailModal show={modalShow} modalContent={modalContent} onHide={() => setModalShow(false)} />
      )}
    </>
  )
}

export default App