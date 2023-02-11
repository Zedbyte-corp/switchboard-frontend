import './Team.css'
import Trail from "./Trail-Section/Trail";
import TeamCard from '../../Components/TeamsCard/teamCard';
import { teamContent } from '../../Model/Team.content';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

const Team = () => {

    const GetThemeStatus = useSelector(state => state.theme)
    const [PageContent, setPageContent] = useState(teamContent(GetThemeStatus))

    useEffect(() => {
        setPageContent(teamContent(GetThemeStatus))
    }, [GetThemeStatus])

    const TeamContainer = PageContent.team.map((teamcard) => {
        return <TeamCard image={teamcard.image} title={teamcard.name} description={teamcard.content} />
    })

    return (
        <div className="team-page-main-container">
            <Trail></Trail>
            <div className='team-page-member-container'>
                {TeamContainer}
            </div>
            <div className="team-page-map-container">
                <div className="team-page-map-title">
                    {teamContent().mapTitle} 
                </div>
                <div className="team-page-map-description">
                    {teamContent().mapDescription} 
                </div>
                <div className="team-page-map-image">
                    <img className="map-image" src={teamContent().mapImage} alt="" />
                </div>
                <div className="team-page-contact-container">
                    <div className="office-container">
                        <div className="contact-title">Office Address</div>
                        <div className="contact-content">{teamContent().officeAddress}</div>
                    </div>
                    <div className="office-container">
                        <div className="contact-title">Contact</div>
                        <div className="contact-content">{teamContent().contact}</div>
                    </div>
                    <div className="office-container">
                        <div className="contact-title">Email</div>
                        <div className="contact-content">{teamContent().email}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team