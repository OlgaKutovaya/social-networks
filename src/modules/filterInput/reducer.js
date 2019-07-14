import { SET_SEARCH_STRING, SET_SOCIAL_SEARCH_TYPE, SET_STATUS_SEARCH_TYPE } from "./action-types";
import { ACTIVATE_SEARCH } from "../media/action-types";

const initialState = {
	isSearchActivated: false,
	searchString: "",
	socialSearchType: "",
	statusSearchType: ""
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ACTIVATE_SEARCH:
			return {
				...state,
				isSearchActivated: true
			};
		case SET_SEARCH_STRING:
			return {
				...state,
				searchString: action.payload
			};
		case SET_SOCIAL_SEARCH_TYPE:
			return {
				...state,
				socialSearchType: action.payload
			};
		case SET_STATUS_SEARCH_TYPE:
			return {
				...state,
				statusSearchType: action.payload
			};
		default:
			return state;
	}
}