import './Trail.css'
import { useSelector } from "react-redux";

const Trail = () => {
    const scrollEventImagesTwo = useSelector(state => state.scrollEventImagesTwo)

    return (
        <div className='trail-main-container'>
            <div className="trail">
                {Object.keys(scrollEventImagesTwo).map((key, value) => {
                    if (value >= 0 && value <= 14)
                        return <img className="trail__img" src={scrollEventImagesTwo[key]} alt={value} key={value} />
                })}
                <h3 className="trail__title">Hi</h3>
            </div>
        </div>
    );
}

export default Trail;