import { images } from "../constants"

const Gallery = () => {
  return (
    <div className="card-columns">
        {images.map((im) => (
            <div className="card" key={im.alt}>
                <img className="card-img-top probootstrap-animate" src={im.src} alt={im.alt}/>
            </div>
        ))}
    </div>  
  )
}

export default Gallery