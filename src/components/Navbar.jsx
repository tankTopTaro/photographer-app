import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()

  return (
    <div className="probootstrap-bar">
      {location.pathname === '/single' ? (
        <Link className="probootstrap-refresh" to='/'><span className="oi oi-arrow-left"></span></Link>
      ) : (
        <div className="probootstrap-refresh"><span className="oi oi-reload"></span></div>
      )}
        <a href="#" className="probootstrap-toggle js-probootstrap-toggle"><span className="oi oi-menu"></span></a>
        <div className="probootstrap-main-site-logo"><a href="index.html">Photo</a></div>
    </div>
  )
}

export default Navbar