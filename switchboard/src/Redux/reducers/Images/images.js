
import { SET_LANDING_IMAGES, SET_SCROLL_IMAGES } from "../../actions/images.action"

const initialState = {};

export const landingImages = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANDING_IMAGES:
            return action.payload
        default:
            return state
    }
}
export const scrollImages1 = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCROLL_IMAGES:
            return action.payload
        default:
            return state
    }
}
