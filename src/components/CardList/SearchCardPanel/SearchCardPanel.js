import React, { Component } from "react";
import "./search-card-panel.scss";
import { connect } from "react-redux";
import { filterMediaData } from "../../../modules/media/actions";
import { setSearchString } from "../../../modules/filterInput/actions";

class SearchCardPanel extends Component {

	changeInputDataHandler = (event) => {
		this.props.setSearchString(event.target.value);
	};

	handleFilterButtonClick = () => {
		this.props.filterMediaData();
	};

	render() {
		const { searchString, statusSearchType } = this.props;
		if (["", "Pending"].includes(statusSearchType)) {
			return (
				<div className="search-panel-wrapper">
					<input type="text"
								 className="search-input"
								 placeholder="type to search"
								 value={searchString}
								 onChange={(event) => {
									 this.changeInputDataHandler(event);
								 }}
					/>
					<button onClick={this.handleFilterButtonClick}>Filter</button>
				</div>
			);
		} else {
			return null;
		}
	}
}

const mapStateToProps = (state) => {
	return {
		searchString: state.searchData.searchString,
		statusSearchType: state.searchData.statusSearchType
	};
};

export default connect(mapStateToProps, { setSearchString, filterMediaData })(SearchCardPanel);
