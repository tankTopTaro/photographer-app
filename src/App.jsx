import { useState } from "react"
import Aside from "./components/Aside"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import MailModal from "./components/MailModal"
import Navbar from "./components/Navbar"
import InviteModal from "./components/InviteModal"
/* import Single from "./components/Single"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" */

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


/** TODO:
 * 
 *  --> Remove the modal instead redirect the user to 
 *      another page where the full-sized image is loaded.
 *  --> Replace the Refresh Icon with a Back Icon
 *  
 *  --> Make Ajax call every 20 seconds
 *  --> Make Ajax call immediately when the page is focused or returned to.
 * 
 *  --> Trigger a refresh by sliding down the first picture.
 *  --> Fetch new pictures and append them to the existing ones.
 *  --> Show a loading indicator while fetching
 *  --> Ensure that there is no full page reload, just update to the current gallery.
 * 
 */