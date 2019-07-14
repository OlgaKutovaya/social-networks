import { SET_SEARCH_STRING, SET_SOCIAL_SEARCH_TYPE, SET_STATUS_SEARCH_TYPE } from "./action-types";

export const setSearchString = (inputString) => {
	return {
		type: SET_SEARCH_STRING,
		payload: inputString
	};
};

export const setSocialSearchType = (type) => {
	return {
		type: SET_SOCIAL_SEARCH_TYPE,
		payload: type
	};
};

export const setStatusSearchType = (type) => {
	return {
		type: SET_STATUS_SEARCH_TYPE,
		payload: type
	};
};