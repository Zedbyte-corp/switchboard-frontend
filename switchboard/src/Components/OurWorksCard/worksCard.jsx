import './worksCard.css'



const WorkCard = ({ image, title, description }) => {
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
        }}>

            <img className="work-image-container" src={image} alt="" />
            <div className='work-heading-container'>{title}</div>
            <div className='work-description-container'>{description}</div>
        </div>
    )
}
export default WorkCard