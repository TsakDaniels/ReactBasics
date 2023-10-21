import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import "./icons.css"



const mail = <FontAwesomeIcon icon={faEnvelope} className="icons"/>
const facebook = <FontAwesomeIcon icon={faFacebook} className="icons"/>
const github = <FontAwesomeIcon icon={faGithub} className="icons"/>
const instagram = <FontAwesomeIcon icon={faInstagram} className="icons"/>

function Icons(){
    return (
        <div>

        <p>{mail}</p>
        <p>{facebook}</p>
        <p>{github}</p>
        <p>{instagram}</p>

        </div>
    )
};

export default Icons;