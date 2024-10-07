import { useState } from "react"
import { images } from "../constants"
import { useNavigate } from "react-router-dom"

const Gallery = () => {
  const navigate = useNavigate()

  const handleImage = (src) => {
    navigate('/single', { state: { imageSrc: src}})
  }


  return (
    <>
    <div className="card-columns">
        {images.map((im) => (
            <div className="card" key={im.alt} onClick={() => handleImage(im.src)}>
                <img className="card-img-top probootstrap-animate" src={im.img} alt={im.alt}/>
            </div>
        ))}
    </div>  

{/*     <Modal show={showModal} centered>
        <Modal.Header>
          <div onClick={() => handleClose()} className='d-flex align-items-center pe-auto' >
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#2e2e2e"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
          <div className="w-100 h-100">
            <img src={image} alt='Full Image' className="w-100 h-100" />
          </div>
          <small className="mt-2">"Long click on the image and click save to camera roll"</small>
          </div>
        </Modal.Body>
    </Modal> */}
    </>
  )
}

export default Gallery