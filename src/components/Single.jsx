import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Single = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { imageSrc } = location.state || {}

    useEffect(() => {
        if (!imageSrc) {
            navigate('/')
        }
    }, [imageSrc, navigate])

    return (
        <div className="container-fluid mb-5 d-flex justify-content-center align-items-center">
            {imageSrc && (
                <img src={imageSrc} alt="full-image" className="img-fluid" />
            )}
        </div>
    )
}

export default Single