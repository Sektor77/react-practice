import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const InfoPanel = () => {
    return (
        <div className={"info-panel"}>
            <div className={"info-panel--image-container"}/>
            <h1 className={"info-panel--name"}>Levente Törő</h1>
            <h5 className={"info-panel--position"}>Full-stack Web Developer</h5>
            <h6 className={"info-panel--webpage"}>levente.toro</h6>
            <div className={"info-panel--button-container"}>
                <a className={"info-panel--email-button"} href={"mailto:levente.toro@wrd.hu?subject=Hi!"} target={"_blank"}><FaEnvelope/>Email</a>
                <a className={"info-panel--linkedin-button"} href={"https://www.linkedin.com/in/torolevente/"} target={"_blank"}><FaLinkedin/>LinkedIn</a>
            </div>
        </div>
    )
}

export default InfoPanel;