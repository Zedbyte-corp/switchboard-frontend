import './NumberCard.css'



const NumberCard = ({icon,number,description,color_id}) => {
    return (
        <div style={{
            height: "90%",
            width: "20%",
            borderRadius: "10px",
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap:"10%",
            backgroundColor: `var(--color-${color_id})`
        }}>
            <div className='icon-container'>
                <img src={icon} alt="" />
            </div>
            <div className='count-container'>{number}</div>
            <div className='number-description-container'>{description}</div>
        </div>
    )
}
export default NumberCard