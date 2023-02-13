import "./Contact.css"
import { contactContent } from "../../Model/Contact.content"

const Contact = () => {
    return (
        <div className="contact-page-main-container">
            <div className="team-page-map-container">
                <div className="team-page-map-title">
                    {contactContent().mapTitle} 
                </div>
                <div className="team-page-map-description">
                    {contactContent().mapDescription} 
                </div>
                <div className="team-page-map-image">
                    <img className="map-image" src={contactContent().mapImage} alt="" />
                </div>
            </div>
            <div className="team-page-contact-container">
                <div className="office-container">
                    <div className="contact-title">Office Address</div>
                    <div className="contact-content">{contactContent().officeAddress}</div>
                </div>
                <div className="office-container">
                    <div className="contact-title">Contact</div>
                    <div className="contact-content">{contactContent().contact}</div>
                </div>
                <div className="office-container">
                    <div className="contact-title">Email</div>
                    <div className="contact-content">{contactContent().email}</div>
                </div>
            </div>
        </div>
    )
}
export default Contact