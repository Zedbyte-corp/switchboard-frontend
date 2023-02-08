export const SET_LANDING_IMAGES = "SET_LANDING_IMAGES"
export const SET_SCROLL_IMAGES = "SET_SCROLL_IMAGES"

export const setLandingImages = (payload) => (dispatch) => {
    dispatch({
        type: SET_LANDING_IMAGES,
        payload: payload,
    });
};

export const setScrollImages1 = (payload) => (dispatch) => {
    dispatch({
        type: SET_SCROLL_IMAGES,
        payload: payload,
    });
};