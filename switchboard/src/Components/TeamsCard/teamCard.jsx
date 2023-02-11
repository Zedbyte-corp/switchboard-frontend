import './teamCard.css'



const TeamCard = ({ image, title, description }) => {
    return (
        <div style={{
            height: "fit-content",
            width: "20%",
            borderRadius: "10px",
            display: 'flex',
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: "1vh",
            margin:"5vh"
        }}>

            <img className="team-image-container" src={image} alt="" />
            <div className='team-heading-container'>{title}</div>
            <div className='team-description-container'>{description}</div>
        </div>
    )
}
export default TeamCard