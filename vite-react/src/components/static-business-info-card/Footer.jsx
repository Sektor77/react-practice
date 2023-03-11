import { FaTwitterSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"

const Footer = () => {
    return (
        <div className={"footer"}>
            <FaTwitterSquare className={"footer-icon"}></FaTwitterSquare>
            <FaFacebookSquare className={"footer-icon"}></FaFacebookSquare>
            <FaInstagramSquare className={"footer-icon"}></FaInstagramSquare>
            <FaGithubSquare className={"footer-icon"}></FaGithubSquare>
        </div>

    )
}

export default Footer;