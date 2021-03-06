import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import LogoSubtitle from '../../assets/images/LogoSub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const LeftSidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={Logo} alt="logo"/>
      <img className="sub-logo" src={LogoSubtitle} alt="kevin"/>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>

    </nav>

    <ul>
      <li>
        <a target="_blank"
          rel="noreferrer"
          href='https://www.linkedin.com/in/xu-yang-h-981755176/'
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      
      <li>
        <a target="_blank"
          rel="noreferrer"
          href='https://github.com/Kevin-was-here'
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default LeftSidebar