import { GET_MEDIA_DATA, FILTER_MEDIA_DATA, ACTIVATE_SEARCH, CHANGE_CARD_STATUS } from "./action-types";
import { setStatusSearchType } from "../filterInput/actions";

export const getMediaData = () => {
	return (dispatch) => {
		return new Promise(async (resolve, reject) => {
			const response = await fetch("/API/MEDIA.json");
			const data = await response.json();
			const mutatedData = data["media"].map(item => {
				return {
					...item,
					status: "Pending"
				};
			});

			dispatch({
				type: GET_MEDIA_DATA,
				payload: mutatedData
			});
			resolve();
		});
	};
};

export const filterMediaData = () => {
	return (dispatch, getState) => {
		const { mediaData } = getState().mediaData;
		const { searchString, socialSearchType, statusSearchType } = getState().searchData;

		dispatch({
			type: ACTIVATE_SEARCH
		});

		let filteredMediaData = [];

		if (searchString && ["", "Pending"].includes(statusSearchType)) {
			filteredMediaData = mediaData.filter((item) => {
				return (item.caption.indexOf(searchString) > -1);
			});
		} else {
			filteredMediaData = mediaData;
		}

		if (socialSearchType && socialSearchType !== "All") {
			filteredMediaData = filteredMediaData.filter((item) => {
				return (item["social_network"] === socialSearchType);
			});
		}

		if (statusSearchType) {
			filteredMediaData = filteredMediaData.filter((item) => {
				return (item["status"] === statusSearchType);
			});
		}

		dispatch({
			type: FILTER_MEDIA_DATA,
			payload: filteredMediaData
		});
	};
};

export const changeCardStatus = (id, status) => {
	return (dispatch, getState) => {
		const currentStatusType = getState().searchData.statusSearchType || "Pending";
		dispatch({
			type: CHANGE_CARD_STATUS,
			payload: { id, status }
		});
		dispatch(setStatusSearchType(currentStatusType));
		dispatch(filterMediaData());
	};
};
