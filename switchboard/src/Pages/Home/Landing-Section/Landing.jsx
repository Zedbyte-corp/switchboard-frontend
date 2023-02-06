import './Landing.css'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { landingPageContent } from '../../../Model/Landing.content'
// import { ChangeTheme } from '../../../Facade/theme'
import { useDispatch } from "react-redux";
import { setTheme } from "../../../Redux/actions/theme.action";

const Landing = () => {
    const dispatch = useDispatch()
    const GetThemeStatus = useSelector(state => state.theme)
    const [PageContent, setPageContent] = useState(landingPageContent(GetThemeStatus))

    useEffect(() => {
        setPageContent(landingPageContent(GetThemeStatus))
    }, [GetThemeStatus])


    return (
        <div className="landing-main-container" style={{
            backgroundImage: `url(${PageContent.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* {PageContent.image} */}
            <button onClick={() => dispatch(setTheme(1))}>
               wedding
            </button>
            <button onClick={() => dispatch(setTheme(0))}>
                event
            </button>
        </div>
    )
}
export default Landing