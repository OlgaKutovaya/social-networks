import { GET_MEDIA_DATA, FILTER_MEDIA_DATA, CHANGE_CARD_STATUS } from "./action-types";

const initialState = {
	mediaData: [],
	filteredMediaData: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_MEDIA_DATA:
			return {
				...state,
				mediaData: action.payload
			};
		case FILTER_MEDIA_DATA:
			return {
				...state,
				filteredMediaData: action.payload
			};
		case CHANGE_CARD_STATUS:
			const newMediaData = [...state.mediaData];
			const cardIndex = newMediaData.findIndex(item => item.id === action.payload.id);
			if (cardIndex > -1) {
				newMediaData[cardIndex] = { ...newMediaData[cardIndex], status: action.payload.status };
			}
			return {
				...state,
				mediaData: newMediaData
			};
		default:
			return state;
	}
}
