import React, { Component } from "react";
import { connect } from "react-redux";
import { getMediaData, filterMediaData } from "../../modules/media/actions";
import SocialNetworkFilter from "./SocialNetworkFilter/SocialNetworkFilter";
import CardStatus from "./CardStatus/CardStatus";
import Card from "./Card/Card";
import SearchCardPanel from "./SearchCardPanel/SearchCardPanel";
import "./card-list.scss";

class CardList extends Component {

	componentDidMount() {
		this.props.getMediaData();
	}

	render() {
		const { isSearchActivated, filteredMediaData, mediaData } = this.props;
		const totalItemsCounter = mediaData.length;
		const totalFilteredItemsCounter = filteredMediaData.length;

		const renderMediaData = () => {
			return mediaData.map((item) => {
				return (
					<Card key={item.id}
								{...item}
					/>
				);
			});
		};

		const renderFilteredMediaData = () => {
			return filteredMediaData.map((item) => {
				return (
					<Card key={item.id}
								{...item}
					/>
				);
			});
		};

		return (
			<main className="main-content">
				<SocialNetworkFilter />
				<CardStatus />
				<SearchCardPanel />
				<div className="card-list-wrapper">
					<p className="total-items-counter">
						<span>{isSearchActivated ? totalFilteredItemsCounter : totalItemsCounter}</span>
						items total
					</p>
					<div className="cards-inner-wrapper">
						{isSearchActivated ? renderFilteredMediaData() : renderMediaData()}
					</div>
				</div>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		mediaData: state.mediaData.mediaData,
		isSearchActivated: state.searchData.isSearchActivated,
		filteredMediaData: state.mediaData.filteredMediaData
	};
};

export default connect(mapStateToProps, { getMediaData, filterMediaData })(CardList);
