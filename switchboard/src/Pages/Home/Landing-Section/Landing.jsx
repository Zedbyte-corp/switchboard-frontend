import './Landing.css'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { landingPageContent } from '../../../Model/Landing.content'
// import { ChangeTheme } from '../../../Facade/theme'
import { useDispatch } from "react-redux";
import { setTheme } from "../../../Redux/actions/theme.action";
import logo from "../../../Assets/logo-white.svg"

const Landing = () => {
    const dispatch = useDispatch()
    const landingImages = useSelector(state => state.landingImages)
    const GetThemeStatus = useSelector(state => state.theme)
    const [PageContent, setPageContent] = useState(landingPageContent(GetThemeStatus, landingImages))
    // const [theme, setTheme] = useState("event-theme")

    useEffect(() => {
        setPageContent(landingPageContent(GetThemeStatus, landingImages))
    }, [GetThemeStatus])

    const changeTheme = (themeFlag) => {
        dispatch(setTheme(themeFlag))
        if (themeFlag === 0) {
            document.body.setAttribute("data-theme", "event-theme")
        } else {
            document.body.setAttribute("data-theme", "wedding-theme")
        }
    }


    return (
        <div className="landing-main-container" style={{
            backgroundImage: `url(${PageContent.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="landing-left-container">
                <div className='title-container'>{PageContent.heading}
                <span className='event-name-color'>
                    {PageContent.companyName}
                </span>
                </div>
                {/* <div className="landing-image-container">
                    <img src={logo} alt="" />
                </div> */}
                <div className='description-container'>{PageContent.content}</div>
                <div className='button-container'>
                    <button className={GetThemeStatus ? "button_inactive" : "button_active"} onClick={() => changeTheme(0)}>
                        Events
                    </button>
                    <button className={GetThemeStatus ? "button_active" : "button_inactive"} onClick={() => changeTheme(1)}>
                        Wedding
                    </button>
                </div>

            </div>
            <div className="landing-right-container">

            </div>
        </div>
    )
}
export default Landing